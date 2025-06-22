import { createStore, Store } from 'vuex'
import { mutations } from './race.mutations'
import { SEED_STATE } from './race.state'
import type { InjectionKey } from 'vue'
import type { RaceState } from './race.abstract'

export const raceModule = {
  namespaced: true,
  state: SEED_STATE,
  mutations,
}

export const raceViewModelKey: InjectionKey<Store<RaceState>> = Symbol()

export const RaceViewModel = createStore({
  modules: {
    race: raceModule,
  },
})
