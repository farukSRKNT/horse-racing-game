export interface Horse {
  id: string
  name: string
  color: string
  condition: number // 1-100 range
}

export interface RaceState {
  horses: Array<Horse>
  raceSchedule: RaceSchedule | null
  results: RoundResult[]
  isRunning: boolean
}

export enum MutationTypes {
  GENERATE_HORSE_NAMES = 'GENERATE_HORSE_NAMES',
  GENERATE_RACE_SCHEDULE = 'GENERATE_RACE_SCHEDULE',
  START = 'START',
  PROCEED = 'PROCEED',
  PAUSE = 'PAUSE',
}

export interface Round {
  id: number
  distance: number
  selectedHorses: Horse[]
}

export interface RaceSchedule {
  rounds: Round[]
}

interface RoundResult {
  roundId: number
  results: {
    horse: Horse
    time: number
    position: number
  }[]
}
