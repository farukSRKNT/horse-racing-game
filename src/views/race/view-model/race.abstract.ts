export interface RaceState {
  horseNames: string[]
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
  selectedHorses: string[]
}

export interface RaceSchedule {
  rounds: Round[]
}

interface RoundResult {
  roundId: number
  results: {
    horse: string
    time: number
    position: number
  }[]
}
