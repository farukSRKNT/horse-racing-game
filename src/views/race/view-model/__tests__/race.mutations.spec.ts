import { describe, expect, it, beforeEach } from 'vitest'
import { mutations } from '../race.mutations'
import { SEED_STATE } from '../race.state'
import type { RaceState } from '../race.abstract'

const { GENERATE_HORSE_NAMES, GENERATE_RACE_SCHEDULE, START, PAUSE, TICK } = mutations

describe('Race Mutations', () => {
  let state: RaceState

  const createFreshState = (): RaceState => {
    return JSON.parse(JSON.stringify(SEED_STATE))
  }

  beforeEach(() => {
    state = createFreshState()
  })

  describe('GENERATE_HORSE_NAMES', () => {
    it('should generate 20 horse names', () => {
      GENERATE_HORSE_NAMES(state)
      expect(state.horses).toHaveLength(20)
    })

    it('should generate unique horse names', () => {
      GENERATE_HORSE_NAMES(state)
      const uniqueNames = new Set(state.horses.map((h) => h.name))
      expect(uniqueNames.size).toBe(20)
    })

    it('should assign unique IDs to each horse', () => {
      GENERATE_HORSE_NAMES(state)
      const uniqueIds = new Set(state.horses.map((h) => h.id))
      expect(uniqueIds.size).toBe(20)
    })

    it('should assign valid condition values between 1-100', () => {
      GENERATE_HORSE_NAMES(state)
      state.horses.forEach((horse) => {
        expect(horse.condition).toBeGreaterThanOrEqual(1)
        expect(horse.condition).toBeLessThanOrEqual(100)
      })
    })

    it('should assign colors to horses', () => {
      GENERATE_HORSE_NAMES(state)
      state.horses.forEach((horse) => {
        expect(horse.color).toBeDefined()
        expect(typeof horse.color).toBe('string')
      })
    })

    it('should reset horses array on multiple calls', () => {
      GENERATE_HORSE_NAMES(state)
      const firstGeneration = structuredClone(state.horses)

      GENERATE_HORSE_NAMES(state)
      expect(state.horses).not.toEqual(firstGeneration)
      expect(state.horses).toHaveLength(20)
    })
  })

  describe('GENERATE_RACE_SCHEDULE', () => {
    beforeEach(() => {
      GENERATE_HORSE_NAMES(state)
    })

    it('should generate 6 rounds', () => {
      GENERATE_RACE_SCHEDULE(state)
      expect(state.raceSchedule).toHaveLength(6)
    })

    it('should assign unique round IDs', () => {
      GENERATE_RACE_SCHEDULE(state)
      const roundIds = state.raceSchedule.map((round) => round.id)
      const uniqueIds = new Set(roundIds)
      expect(uniqueIds.size).toBe(6)
    })

    it('should pick 10 horses for each round', () => {
      GENERATE_RACE_SCHEDULE(state)
      state.raceSchedule.forEach((round) => {
        expect(round.selectedHorses).toHaveLength(10)
      })
    })

    it('should assign valid distances to rounds', () => {
      GENERATE_RACE_SCHEDULE(state)
      state.raceSchedule.forEach((round) => {
        expect(round.distance).toBeGreaterThan(0)
        expect(typeof round.distance).toBe('number')
      })
    })

    it('should select horses from available horses pool', () => {
      GENERATE_RACE_SCHEDULE(state)
      const allHorseIds = state.horses.map((h) => h.id)

      state.raceSchedule.forEach((round) => {
        round.selectedHorses.forEach((horse) => {
          expect(allHorseIds).toContain(horse.id)
        })
      })
    })
  })

  describe('START', () => {
    beforeEach(() => {
      GENERATE_HORSE_NAMES(state)
      GENERATE_RACE_SCHEDULE(state)
    })

    it('should set isRunning to true', () => {
      START(state)
      expect(state.isRunning).toBe(true)
    })

    it('should create ongoing race for first round', () => {
      START(state)
      expect(state.ongoingRace).not.toBeNull()
      expect(state.ongoingRace?.roundId).toBe(1)
    })

    it('should initialize horse positions to 0', () => {
      START(state)
      state.ongoingRace?.horses.forEach((horse) => {
        expect(horse.position).toBe(0)
        expect(horse.distanceCovered).toBe(0)
        expect(horse.currentSpeed).toBe(0)
      })
    })

    it('should not restart if already running', () => {
      state.isRunning = true
      const initialOngoingRace = state.ongoingRace

      START(state)
      expect(state.ongoingRace).toBe(initialOngoingRace)
    })

    it('should continue from last completed round', () => {
      state.results = [
        { roundId: 1, distance: 1000, results: [] },
        { roundId: 2, distance: 1200, results: [] },
      ]

      START(state)
      expect(state.ongoingRace?.roundId).toBe(3)
    })

    it('should handle empty results array', () => {
      state.results = []
      START(state)
      expect(state.ongoingRace?.roundId).toBe(1)
    })

    it('should return early if no race schedule found for round', () => {
      state.results = [
        { roundId: 1, distance: 1000, results: [] },
        { roundId: 2, distance: 1200, results: [] },
        { roundId: 3, distance: 1400, results: [] },
        { roundId: 4, distance: 1600, results: [] },
        { roundId: 5, distance: 1800, results: [] },
        { roundId: 6, distance: 2000, results: [] },
      ]

      START(state)
      expect(state.ongoingRace).toBeNull()
      expect(state.isRunning).toBe(false)
    })
  })

  describe('PAUSE', () => {
    it('should set isRunning to false', () => {
      state.isRunning = true
      PAUSE(state)
      expect(state.isRunning).toBe(false)
    })

    it('should work when already paused', () => {
      state.isRunning = false
      PAUSE(state)
      expect(state.isRunning).toBe(false)
    })
  })

  describe('TICK', () => {
    beforeEach(() => {
      GENERATE_HORSE_NAMES(state)
      GENERATE_RACE_SCHEDULE(state)
      START(state)
    })

    it('should not progress when not running', () => {
      state.isRunning = false
      const initialState = structuredClone(state.ongoingRace)

      TICK(state)

      expect(state.ongoingRace).toEqual(initialState)
    })

    it('should not progress when no ongoing race', () => {
      state.ongoingRace = null
      const initialResults = structuredClone(state.results)

      TICK(state)

      expect(state.ongoingRace).toBeNull()
      expect(state.results).toEqual(initialResults)
    })

    it('should update horse speeds and distances', () => {
      const initialDistances = state.ongoingRace?.horses.map((h) => h.distanceCovered) || []

      TICK(state)

      state.ongoingRace?.horses.forEach((horse, index) => {
        expect(horse.currentSpeed).toBeGreaterThanOrEqual(0)
        expect(horse.distanceCovered).toBeGreaterThanOrEqual(initialDistances[index])
      })
    })

    it('should assign finish positions when horses complete race', () => {
      // Force horses to finish by setting high distance covered
      state.ongoingRace?.horses.forEach((horse) => {
        horse.distanceCovered = state.ongoingRace!.distance + 100
      })

      TICK(state)

      state.ongoingRace?.horses.forEach((horse) => {
        expect(horse.finishPosition).toBeDefined()
        expect(horse.finishPosition).toBeGreaterThan(0)
      })
    })

    it('should stop race when all horses finish', () => {
      // Simulate all horses finishing
      state.ongoingRace?.horses.forEach((horse, index) => {
        horse.distanceCovered = state.ongoingRace!.distance + 100
        horse.finishPosition = index + 1
      })

      TICK(state)

      expect(state.isRunning).toBe(false)
      expect(state.results).toHaveLength(1)
    })

    it('should add race result when race completes', () => {
      const roundId = state.ongoingRace!.roundId
      const distance = state.ongoingRace!.distance

      // Force race completion
      state.ongoingRace?.horses.forEach((horse, index) => {
        horse.distanceCovered = distance + 100
        horse.finishPosition = index + 1
      })

      TICK(state)

      const result = state.results.find((r) => r.roundId === roundId)
      expect(result).toBeDefined()
      expect(result?.distance).toBe(distance)
      expect(result?.results).toHaveLength(10)
    })
  })

  describe('Integration Tests', () => {
    it('should complete full race workflow', () => {
      // Use fresh state for integration test
      const integrationState = createFreshState()

      // Generate horses and schedule
      GENERATE_HORSE_NAMES(integrationState)
      GENERATE_RACE_SCHEDULE(integrationState)
      expect(integrationState.horses).toHaveLength(20)
      expect(integrationState.raceSchedule).toHaveLength(6)

      // Start first race
      START(integrationState)
      expect(integrationState.isRunning).toBe(true)
      expect(integrationState.ongoingRace?.roundId).toBe(1)

      // Simulate race completion
      integrationState.ongoingRace?.horses.forEach((horse, index) => {
        horse.distanceCovered = integrationState.ongoingRace!.distance + 100
        horse.finishPosition = index + 1
      })

      TICK(integrationState)
      expect(integrationState.isRunning).toBe(false)
      expect(integrationState.results).toHaveLength(1)
    })

    it('should handle multiple race rounds', () => {
      // Use fresh state for integration test
      const multiRoundState = createFreshState()

      GENERATE_HORSE_NAMES(multiRoundState)
      GENERATE_RACE_SCHEDULE(multiRoundState)

      // Complete first round
      START(multiRoundState)
      multiRoundState.ongoingRace?.horses.forEach((horse, index) => {
        horse.distanceCovered = multiRoundState.ongoingRace!.distance + 100
        horse.finishPosition = index + 1
      })
      TICK(multiRoundState)

      // Start second round
      START(multiRoundState)
      expect(multiRoundState.ongoingRace?.roundId).toBe(2)
      expect(multiRoundState.results).toHaveLength(1)
    })
  })
})
