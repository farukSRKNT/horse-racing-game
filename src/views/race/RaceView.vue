<template>
  <RaceTemplate title="Horse Racing">
    <template #actions>
      <BaseButton @click="generateRaceSchedule">Generate Program</BaseButton>
      <BaseButton :disabled="isStartStopDisabled" @click="handleStartStop">Start/Stop</BaseButton>
    </template>

    <template #top>
      <RaceTrack></RaceTrack>
      <!-- <Hippodrome /> -->
    </template>

    <template #left>
      <HorseList />
    </template>

    <template #center>
      <ProgramList />
    </template>

    <template #right> <ResultList></ResultList> </template>
  </RaceTemplate>
</template>

<script setup lang="ts">
import { RaceTemplate } from '@/components/templates/race'
import { ProgramList } from '@/components/molecules/program'
import { ResultList } from '@/components/molecules/result'
import { BaseButton } from '@/components/atoms/button'
import { HorseList } from '@/components/molecules/horse-list'
import { useStore } from 'vuex'
import { raceViewModelKey } from './view-model/race.view-model'
// import { Hippodrome } from '@/components/organisms/hippodrome'
import { computed } from 'vue'
import RaceTrack from '@/components/atoms/race-track/race-track.component.vue'

const store = useStore(raceViewModelKey)

const isStartStopDisabled = computed(() => {
  return store.getters['race/isStartStopDisabled']
})

console.log('startStopDisabled', isStartStopDisabled.value)

const generateRaceSchedule = (): void => {
  store.commit('race/GENERATE_RACE_SCHEDULE')
}

const handleStartStop = (): void => {
  if (store.state.race.isRunning) {
    store.commit('race/PAUSE')
    store.dispatch('race/stopRaceTimer')
  } else {
    store.commit('race/START')
    store.dispatch('race/startRaceTimer')
  }
}
</script>

<style></style>
