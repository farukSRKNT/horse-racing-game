import type { RaceState } from './race.abstract'
import { ROUND_PER_RACE } from './race.fixture'

export const getters = {
  isStartStopDisabled: (state: RaceState) => {
    console.log('Checking if start/stop is disabled:', state)
    return state.raceSchedule.length === 0 || state.results.length === ROUND_PER_RACE
  },
}
