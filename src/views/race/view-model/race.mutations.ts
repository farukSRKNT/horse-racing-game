import { MutationTypes, type RaceState } from './race.abstract'
import { HORSE_COLORS, ROUND_DISTANCES, ROUND_PER_RACE } from './race.fixture'
import { generateRandomHorseNames, getNewHorseSpeed, pickHorses } from './race.utils'

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

    state.isRunning = true
    state.ongoingRace = {
      roundId: state.results.at(-1)?.roundId || 1, // Start with the first round or continue from the last completed round
      distance: state.raceSchedule[0].distance,
      horses: state.raceSchedule[0].selectedHorses.map((horse) => ({
        ...horse,
        position: 0, // Initial position
        currentSpeed: 0, // Initial speed
        distanceCovered: 0, // Initial distance covered
      })),
    }
  },
  [MutationTypes.PAUSE](state: RaceState) {
    state.isRunning = false
  },
  [MutationTypes.PROCEED](state: RaceState) {
    if (!state.isRunning || state.raceSchedule.length === 0) return

    const currentRound = state.raceSchedule.find(
      (round) => !state.results.some((result) => result.roundId === round.id),
    )

    if (!currentRound) return

    const results = currentRound.selectedHorses.map((horse) => ({
      ...horse,
      time: Math.random() * 100, // Simulate random time
      position: 0, // Placeholder for position
    }))
    results.sort((a, b) => a.time - b.time)
    results.forEach((result, index) => {
      result.position = index + 1
    })
    state.results.push({
      roundId: currentRound.id,
      results,
    })
    // Check if all rounds are completed
    if (state.results.length === state.raceSchedule.length) {
      state.isRunning = false
    }
  },
  [MutationTypes.TICK](state: RaceState) {
    // Start and proceed one second of the race
    const { ongoingRace } = state
    if (ongoingRace === null || !state.isRunning) return

    ongoingRace.horses.forEach((horse) => {
      // Simulate speed and distance covered
      horse.currentSpeed = getNewHorseSpeed(horse.currentSpeed) // Get new speed based on condition
      horse.distanceCovered += horse.currentSpeed // Update distance covered
    })

    // sort by distance covered and assign finish position if any horse has finished
    ongoingRace.horses.sort((a, b) => b.distanceCovered - a.distanceCovered)
    ongoingRace.horses.forEach((horse, index) => {
      if (horse.distanceCovered >= ongoingRace.distance) {
        horse.finishPosition = index + 1 // Assign finish position
      } else {
        horse.finishPosition = undefined // Not finished yet
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
      state.ongoingRace = null // Reset
    }
  },
}
