import { createStore } from 'vuex'
import { mutations } from './race.mutations'
import { SEED_STATE } from './race.state'

export const raceModule = {
  namespaced: true,
  state: SEED_STATE,
  mutations,
}

export const RaceViewModel = createStore({
  modules: {
    race: raceModule,
  },
})
