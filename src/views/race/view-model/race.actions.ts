import { MutationTypes, type RaceActionType } from './race.abstract'

export const actions = {
  startRaceTimer({ commit, state }: RaceActionType) {
    if (state._timerInterval) return // Prevent multiple timers

    const interval = setInterval(() => {
      if (state.isRunning) {
        commit(MutationTypes.TICK)
      } else {
        clearInterval(interval)
        state._timerInterval = null
      }
    }, 200)

    state._timerInterval = interval
  },

  stopRaceTimer({ state }: RaceActionType) {
    if (state._timerInterval) {
      clearInterval(state._timerInterval)
      state._timerInterval = null
      console.log('Timer stopped', state)
    }
  },
}
