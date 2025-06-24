// src/components/molecules/hippodrome/hippodrome.abstract.ts

import type { OngoingRace, RacingHorse } from '@/views/race/view-model/race.abstract'

export interface HippodromeProps {
  /**
   * The ongoing race data containing horses and race information
   */
  ongoingRace?: OngoingRace | null
}

export interface TrackHorse extends RacingHorse {
  /**
   * Progress percentage (0-100) for visual positioning
   */
  progressPercentage: number
}
