<!-- race-track.component.vue -->
<template>
  <div :class="$style.raceTrackContainer">
    <div :class="$style.raceInfo">
      <h2 v-if="race?.roundId">
        {{ `Round ${race?.roundId}` }}
      </h2>
    </div>
    <div :class="$style.raceTrackWrapper">
      <div :class="$style.positions">
        <div v-for="index in HORSE_COUNT_IN_A_RACE" :key="index" :class="$style.position">
          <span>{{ index }}</span>
        </div>
      </div>
      <div :key="`race-track-${race?.roundId}`" :class="$style.raceTrack">
        <!-- Lane dividers -->
        <div
          v-for="n in HORSE_COUNT_IN_A_RACE"
          :key="`lane-${n}`"
          :class="$style.laneDivider"
          :style="{ top: `${(n - 1) * laneHeight}px` }"
        />

        <!-- Horses -->
        <div v-for="(horse, index) in racingHorses" :key="horse.id">
          <BaseHorse
            :name="horse.name"
            :color="horse.color"
            :style="{
              transform: `translateX(${getHorsePosition(horse)}px)`,
              top: `${index * laneHeight + TOP_PADDING}px`,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { raceViewModelKey } from '@/views/race/view-model/race.view-model'
import { BaseHorse } from '@/components/atoms/horse'
import { RACE_TRACK_WIDTH } from './race-track.fixture.ts'
import { HORSE_COUNT_IN_A_RACE } from '@/views/race/view-model/race.fixture.ts'
import { type RacingHorse } from '@/views/race/view-model/race.abstract.ts'

const store = useStore(raceViewModelKey)

const race = computed(() => store.state.race.ongoingRace)
const racingHorses = computed(() => store.state.race.ongoingRace?.horses || [])
const laneHeight = 60 // pixels per lane
const TOP_PADDING = 16 // top padding to center the horse vertically

const getHorsePosition = (horse: RacingHorse): number => {
  const parentWidth = RACE_TRACK_WIDTH - 44
  const totalDistance = store.state.race.ongoingRace?.distance || 1
  const percent = Math.min((horse.distanceCovered / totalDistance) * 100, 100)

  return percent * (parentWidth / 100)
}
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.raceTrackContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.raceInfo {
  height: 40px;
}

.raceTrackWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.positions {
  display: flex;
  flex-direction: column;
  height: 100%;

  .position {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: tokens.$font-size-lg;
    color: tokens.$color-text-secondary;
    border: 1px solid tokens.$color-border;
  }
}

.raceTrack {
  position: relative;
  width: 800px;
  height: 600px;
  background: linear-gradient(90deg, #8fbc8f 0%, #98fb98 100%);
  border: 2px solid #654321;
}

.laneDivider {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: rgba(101, 67, 33, 0.3);
  left: 0;
}
</style>
