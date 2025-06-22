import type { Horse } from './race.abstract'
import { HORSE_NAMES_POOL } from './race.fixture'

/**
 * Randomly selects 20 unique horse names from the pool
 */
export const generateRandomHorseNames = (): string[] => {
  const shuffled = [...HORSE_NAMES_POOL].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 20)
}

/**
 * Randomly selects specified count of unique horse names from the pool
 */
export const pickHorses = (horseList: Array<Horse>): Array<Horse> => {
  const COUNT = 10

  const shuffled = [...horseList].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, COUNT)
}
