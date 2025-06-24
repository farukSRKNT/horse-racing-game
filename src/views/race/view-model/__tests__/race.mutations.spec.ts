import { describe, expect, it } from 'vitest'
import { mutations } from '../race.mutations'
import { SEED_STATE } from '../race.state'
import type { RaceState } from '../race.abstract'

const { GENERATE_HORSE_NAMES, GENERATE_RACE_SCHEDULE } = mutations

describe('mutations', () => {
  describe('GENERATE_HORSE_NAMES', () => {
    it('should generate 20 horse names', () => {
      const state: RaceState = {
        ...SEED_STATE,
      }
      GENERATE_HORSE_NAMES(state)
      expect(state.horses).toHaveLength(20)
    })
    it('should generate unique horse names', () => {
      const state: RaceState = {
        ...SEED_STATE,
      }
      GENERATE_HORSE_NAMES(state)
      const uniqueHorseNames = new Set(state.horses)
      expect(uniqueHorseNames.size).toBe(state.horses.length)
    })
  })
  describe('GENERATE_RACE_SCHEDULE', () => {
    it('should generate 6 rounds', () => {
      const state: RaceState = {
        ...SEED_STATE,
      }
      GENERATE_HORSE_NAMES(state)

      GENERATE_RACE_SCHEDULE(state)
      expect(state.raceSchedule).toHaveLength(6)
    })
    it('should pick 10 horses for each round', () => {
      const state: RaceState = {
        ...SEED_STATE,
      }
      GENERATE_HORSE_NAMES(state)
      GENERATE_RACE_SCHEDULE(state)

      state.raceSchedule?.forEach((round) => {
        expect(round.selectedHorses).toHaveLength(10)
      })
    })
    it.skip('should pick horse names from the horses generated', () => {
      const state: RaceState = {
        ...SEED_STATE,
      }

      GENERATE_HORSE_NAMES(state)
      GENERATE_RACE_SCHEDULE(state)
      state.raceSchedule.forEach((round) => {
        round.selectedHorses.forEach((horse) => {
          expect(state.horses).toContain(horse)
        })
      })
    })
  })
  describe('START', () => {
    it('should set isRunning to true', () => {
      const state: RaceState = {
        ...SEED_STATE,
        isRunning: false,
      }
      mutations.GENERATE_HORSE_NAMES(state)
      mutations.GENERATE_RACE_SCHEDULE(state)
      mutations.START(state)
      expect(state.isRunning).toBe(true)
    })
  })
  describe('STOP', () => {
    it('should set isRunning to false', () => {
      const state: RaceState = {
        ...SEED_STATE,
        isRunning: true,
      }
      mutations.PAUSE(state)
      expect(state.isRunning).toBe(false)
    })
  })
})
