import type { Horse, SelectedHorse, OngoingRace } from './race.abstract'
import { HORSE_NAMES_POOL, MAX_HORSE_SPEED, MIN_HORSE_SPEED } from './race.fixture'

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
export const pickHorses = (horseList: Array<Horse>): Array<SelectedHorse> => {
  const COUNT = 10

  const shuffled = [...horseList].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, COUNT).map((horse, index) => ({
    ...horse,
    position: index + 1, // Assign position based on index
  }))
}

/**
 * Generates a new speed by changing current speed between -5 and 10 randomly
 * @param currentSpeed - The current speed of the horse
 * @returns New speed
 */
export const getNewHorseSpeed = (currentSpeed: number): number => {
  const speedChange = Math.floor(Math.random() * 16) - 5 // Random change between -5 and 10
  return Math.min(Math.max(MIN_HORSE_SPEED, currentSpeed + speedChange), MAX_HORSE_SPEED) // Ensure speed doesn't go below MIN_HORSE_SPEED or above MAX_HORSE_SPEED
}

/**
 * @returns true if all horses have finished
 */
export const isRaceFinished = (race: OngoingRace): boolean => {
  return race.horses.every((horse) => horse.finishPosition !== undefined)
}
