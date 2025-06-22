import { describe, expect, it } from 'vitest'
import { mutations } from '../race.mutations'
import { SEED_STATE } from '../race.state'
import type { RaceState } from '../race.abstract'

const { GENERATE_HORSE_NAMES, GENERATE_RACE_SCHEDULE } = mutations

describe('mutations', () => {
  describe('GENERATE_HORSE_NAMES', () => {
    it('should generate 20 horse names', () => {
      // mock state
      const state: RaceState = {
        ...SEED_STATE,
      }
      // apply mutation
      GENERATE_HORSE_NAMES(state)
      // assert result
      expect(state.horseNames).toHaveLength(20)
    })
    it('should generate unique horse names', () => {
      // mock state
      const state: RaceState = {
        ...SEED_STATE,
      }
      // apply mutation
      GENERATE_HORSE_NAMES(state)
      // assert result
      const uniqueHorseNames = new Set(state.horseNames)
      expect(uniqueHorseNames.size).toBe(state.horseNames.length)
    })
    it('should generate horse names from the pool randomly', () => {
      // mock state
      const state: RaceState = {
        ...SEED_STATE,
      }
      // apply mutation multiple times
      const results = Array.from({ length: 10 }, () => {
        const tempState: RaceState = { ...state }
        GENERATE_HORSE_NAMES(tempState)
        return tempState.horseNames
      })
      // assert that not all results are the same
      const firstResult = results[0]
      const allSame = results.every((result) => result.join(',') === firstResult.join(','))
      expect(allSame).toBe(false)
    })
  })
  describe('GENERATE_RACE_SCHEDULE', () => {
    it('should generate 6 rounds', () => {
      // mock state with horse names
      const state: RaceState = {
        ...SEED_STATE,
        horseNames: Array.from({ length: 20 }, (_, i) => `Horse ${i + 1}`),
      }

      // apply mutation
      GENERATE_RACE_SCHEDULE(state)
      // assert result
      expect(state.raceSchedule?.rounds).toHaveLength(6)
    })
    it('should pick 10 horses for each round', () => {
      // mock state with horse names
      const state: RaceState = {
        ...SEED_STATE,
        horseNames: Array.from({ length: 20 }, (_, i) => `Horse ${i + 1}`),
      }
      // apply mutation
      GENERATE_RACE_SCHEDULE(state)

      // assert result
      state.raceSchedule?.rounds.forEach((round) => {
        expect(round.selectedHorses).toHaveLength(10)
      })
    })
    it('should pick horse names from the horseNames generated', () => {
      // mock state with horse names
      const state: RaceState = {
        ...SEED_STATE,
      }

      // apply mutation
      GENERATE_HORSE_NAMES(state)
      GENERATE_RACE_SCHEDULE(state)
      // assert result
      state.raceSchedule?.rounds.forEach((round) => {
        round.selectedHorses.forEach((horse) => {
          expect(state.horseNames).toContain(horse)
        })
      })
    })
  })
  describe('START', () => {
    it('should set isRunning to true', () => {
      // mock state
      const state: RaceState = {
        ...SEED_STATE,
        isRunning: false,
      }
      // apply mutation
      mutations.START(state)
      // assert result
      expect(state.isRunning).toBe(true)
    })
  })
  describe('STOP', () => {
    it('should set isRunning to false', () => {
      // mock state
      const state: RaceState = {
        ...SEED_STATE,
        isRunning: true,
      }
      // apply mutation
      mutations.PAUSE(state)
      // assert result
      expect(state.isRunning).toBe(false)
    })
  })
})
