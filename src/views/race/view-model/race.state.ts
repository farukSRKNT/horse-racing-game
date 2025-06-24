import type { RaceState } from './race.abstract'

export const SEED_STATE: RaceState = {
  horses: [],
  raceSchedule: [],
  results: [],
  isRunning: false,
  ongoingRace: null,
  _timerInterval: null, // Timer interval
}
