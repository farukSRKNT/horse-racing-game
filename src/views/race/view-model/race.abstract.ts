export interface Horse {
  id: string
  name: string
  color: string
  condition: number // 1-100 range
}

export interface SelectedHorse extends Horse {
  position: number
}

export interface RaceState {
  horses: Array<Horse>
  raceSchedule: Round[]
  results: RoundResult[]
  isRunning: boolean
  ongoingRace: OngoingRace | null
}

export enum MutationTypes {
  GENERATE_HORSE_NAMES = 'GENERATE_HORSE_NAMES',
  GENERATE_RACE_SCHEDULE = 'GENERATE_RACE_SCHEDULE',
  START = 'START',
  PROCEED = 'PROCEED',
  PAUSE = 'PAUSE',
  TICK = 'TICK',
}

export interface Round {
  id: number
  distance: number
  selectedHorses: SelectedHorse[]
}

interface HorseResult extends Horse {
  time: number // Time taken for the round
  position: number // Position in the round
}

interface RoundResult {
  roundId: number
  results: HorseResult[]
}

interface RacingHorse {
  id: string
  name: string
  color: string
  position: number
  currentSpeed: number // meters per second
  distanceCovered: number
  finishPosition?: number // Optional, to track if the horse has finished
}

interface OngoingRace {
  roundId: number
  distance: number
  horses: RacingHorse[]
}
