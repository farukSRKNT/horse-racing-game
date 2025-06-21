import { MutationTypes } from './race.abstract'
import type { RaceState } from './race.state'

export const mutations = {
  [MutationTypes.GENERATE_HORSE_NAMES](state: RaceState, payload: string[]) {
    state.horseNames = payload
  },
}
