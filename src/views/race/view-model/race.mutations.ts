import { MutationTypes, type RaceState } from './race.abstract'
import { HORSE_COLORS, ROUND_DISTANCES, ROUND_PER_RACE } from './race.fixture'
import {
  generateRandomHorseNames,
  getNewHorseSpeed,
  pickHorses,
  isRaceFinished,
} from './race.utils'

export const mutations = {
  [MutationTypes.GENERATE_HORSE_NAMES](state: RaceState) {
    state.horses = generateRandomHorseNames().map((name, index) => ({
      id: `horse-${index + 1}`, // Unique ID for each horse
      name,
      color: HORSE_COLORS[index],
      condition: Math.floor(Math.random() * 100) + 1, // Random condition
    }))
  },
  [MutationTypes.GENERATE_RACE_SCHEDULE](state: RaceState) {
    // GENERATE 6 rounds with random distances and selected horses
    state.raceSchedule = Array.from({ length: ROUND_PER_RACE }, (_, index) => ({
      id: index + 1,
      distance: ROUND_DISTANCES[index],
      selectedHorses: pickHorses(state.horses),
    }))
  },
  [MutationTypes.START](state: RaceState) {
    if (state.isRunning) return // Prevent starting if already running

    const roundId = (state.results.at(-1)?.roundId || 0) + 1 // Continue from the last completed round or start with the first round
    const raceSchedule = state.raceSchedule.find((schedule) => schedule.id === roundId)
    if (!raceSchedule) return // No

    if (state.ongoingRace === null || isRaceFinished(state.ongoingRace)) {
      state.ongoingRace = {
        roundId,
        distance: raceSchedule.distance,
        horses: raceSchedule.selectedHorses.map((horse) => ({
          ...horse,
          position: 0, // Initial position
          currentSpeed: 0, // Initial speed
          distanceCovered: 0, // Initial distance covered
        })),
      }
    }
    state.isRunning = true
  },
  [MutationTypes.PAUSE](state: RaceState) {
    state.isRunning = false
  },
  [MutationTypes.TICK](state: RaceState) {
    // Start and proceed one second of the race
    const { ongoingRace } = state
    if (ongoingRace === null || !state.isRunning) return

    console.log('TICK', ongoingRace.roundId, ongoingRace.distance, ongoingRace.horses)
    console.table(
      ongoingRace.horses.map((h) => ({
        id: h.id,
        name: h.name,
        color: h.color,
        position: h.position,
        currentSpeed: h.currentSpeed,
        distanceCovered: h.distanceCovered,
        condition: state.horses.find((horse) => horse.id === h.id)?.condition || 100, // Use original horse condition
      })),
    )
    ongoingRace.horses.forEach((horse) => {
      // Simulate speed and distance covered
      horse.currentSpeed = getNewHorseSpeed(horse.currentSpeed) // Get new speed based on condition
      horse.distanceCovered += horse.currentSpeed // Update distance covered
    })

    // sort by distance covered and assign finish position if any horse has finished
    const sortedHorses = [...ongoingRace.horses].sort(
      (a, b) => b.distanceCovered - a.distanceCovered,
    )
    sortedHorses.forEach((horse, index) => {
      if (horse.distanceCovered >= ongoingRace.distance) {
        ongoingRace.horses.find((h) => h.id === horse.id)!.finishPosition = index + 1 // Assign finish position
      }
    })

    state.ongoingRace = {
      ...ongoingRace,
    }

    // Check if race is finished
    if (ongoingRace.horses.every((horse) => horse.finishPosition !== undefined)) {
      // All horses have finished
      state.isRunning = false
      state.results.push({
        roundId: ongoingRace.roundId,
        distance: ongoingRace.distance,
        results: ongoingRace.horses.map((horse) => ({
          id: horse.id,
          name: horse.name,
          color: horse.color,
          time: 0, // Calculate time based on distance and speed
          position: horse.finishPosition || 0, // Use finish position or 0 if not
          distanceCovered: horse.distanceCovered,
          condition: state.horses.find((h) => h.id === horse.id)?.condition || 100, // Use original horse condition
        })),
      })
      // state.ongoingRace = null // Reset
    }
  },
}
