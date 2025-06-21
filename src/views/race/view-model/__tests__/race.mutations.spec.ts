import { describe, expect, it } from 'vitest'
import { mutations } from '../race.mutations'
import type { RaceState } from '../race.state'

const { GENERATE_HORSE_NAMES } = mutations

describe('mutations', () => {
  describe('GENERATE_HORSE_NAMES', () => {
    it('GENERATE_HORSE_NAMES', () => {
      // mock state
      const state: RaceState = {
        horseNames: [],
      }
      // apply mutation
      GENERATE_HORSE_NAMES(state, ['Thunder', 'Lightning', 'Storm'])
      // assert result
      expect(state.horseNames).toEqual(['Thunder', 'Lightning', 'Storm'])
    })
  })
})
