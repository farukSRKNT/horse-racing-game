import { createStore } from 'vuex/types/index.js'
import { mutations } from './race.mutations'
import { state } from './race.state'

export const raceModule = {
  namespaced: true,
  state,
  mutations,
}

export const RaceViewModel = createStore({
  modules: {
    race: raceModule,
  },
})
