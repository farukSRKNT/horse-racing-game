import { createStore, Store } from 'vuex'
import { mutations } from './race.mutations'
import { SEED_STATE } from './race.state'
import { type InjectionKey } from 'vue'
import { type RaceState } from './race.abstract'
import { getters } from './race.getters'
import { actions } from './race.actions'

export const raceModule = {
  namespaced: true,
  state: SEED_STATE,
  mutations,
  actions,
  getters,
}
export const raceViewModelKey: InjectionKey<Store<{ race: RaceState }>> = Symbol()

export const RaceViewModel = createStore({
  modules: {
    race: raceModule,
  },
})
