<!-- race-track.component.vue -->
<template>
  <div :class="$style.raceTrack">
    <!-- Lane dividers -->
    <div
      v-for="n in racingHorses.length + 1"
      :key="`lane-${n}`"
      :class="$style.laneDivider"
      :style="{ top: `${(n - 1) * laneHeight}px` }"
    />

    <!-- Horses -->
    <div v-for="(horse, index) in racingHorses" :key="horse.id">
      <BaseHorse
        :name="horse.name"
        :color="horse.color"
        :speed="5"
        :style="{
          transform: `translateX(${getHorsePosition(horse)}px)`,
          top: `${index * laneHeight + laneHeight / 4}px`,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { raceViewModelKey } from '@/views/race/view-model/race.view-model'
import { BaseHorse } from '@/components/atoms/horse'
import { RACE_TRACK_WIDTH } from './race-track.fixture.ts'

const store = useStore(raceViewModelKey)

const racingHorses = computed(() => store.state.race.ongoingRace?.horses || [])
const laneHeight = 50 // pixels per lane

const getHorsePosition = (horse: any): number => {
  const parentWidth = RACE_TRACK_WIDTH - 44
  const totalDistance = store.state.race.ongoingRace?.distance || 1
  const percent = Math.min((horse.distanceCovered / totalDistance) * 100, 100)

  return percent * (parentWidth / 100)
}
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.raceTrack {
  position: relative;
  width: 800px;
  height: 500px; // Increased for multiple lanes
  background: linear-gradient(90deg, #8fbc8f 0%, #98fb98 100%);
  border: 2px solid #654321;
  overflow: hidden;
}

.laneDivider {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: rgba(101, 67, 33, 0.3);
  left: 0;
}
</style>
