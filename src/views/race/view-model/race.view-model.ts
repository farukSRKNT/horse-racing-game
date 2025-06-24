import { createStore, Store } from 'vuex'
import { mutations } from './race.mutations'
import { SEED_STATE } from './race.state'
import { type InjectionKey } from 'vue'
import { MutationTypes, type RaceState } from './race.abstract'
import { getters } from './race.getters'

export const raceModule = {
  namespaced: true,
  state: SEED_STATE,
  mutations,
  actions: {
    startRaceTimer({ commit, state }) {
      // : ActionContext<RaceState, RaceState>
      if (state.timerInterval) return // Prevent multiple timers

      const interval = setInterval(() => {
        if (state.isRunning) {
          commit(MutationTypes.TICK)
          console.log('Timer tick:', state)
        } else {
          clearInterval(interval)
          state.timerInterval = null
        }
      }, 200)

      state.timerInterval = interval
    },

    stopRaceTimer({ state }) {
      if (state.timerInterval) {
        clearInterval(state.timerInterval)
        state.timerInterval = null
        console.log('Timer stopped', state)
      }
    },
  },
  getters,
}
export const raceViewModelKey: InjectionKey<Store<RaceState>> = Symbol()

export const RaceViewModel = createStore({
  modules: {
    race: raceModule,
  },
})
