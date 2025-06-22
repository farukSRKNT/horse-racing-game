import { MutationTypes, type RaceState } from './race.abstract'
import { HORSE_COLORS, ROUND_DISTANCES, ROUND_PER_RACE } from './race.fixture'
import { generateRandomHorseNames, pickHorses } from './race.utils'

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
    state.raceSchedule = {
      rounds: Array.from({ length: ROUND_PER_RACE }, (_, index) => ({
        id: index + 1,
        distance: ROUND_DISTANCES[index],
        selectedHorses: pickHorses(state.horses),
      })),
    }
  },
  [MutationTypes.START](state: RaceState) {
    state.isRunning = true
  },
  [MutationTypes.PROCEED](state: RaceState) {
    if (!state.isRunning || !state.raceSchedule) return

    const currentRound = state.raceSchedule.rounds.find(
      (round) => !state.results.some((result) => result.roundId === round.id),
    )

    if (!currentRound) return

    const results = currentRound.selectedHorses.map((horse) => ({
      horse,
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
    if (state.results.length === state.raceSchedule.rounds.length) {
      state.isRunning = false
    }
  },
  [MutationTypes.PAUSE](state: RaceState) {
    state.isRunning = false
  },
}
