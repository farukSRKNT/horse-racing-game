<template>
  <RaceTemplate title="Horse Racing">
    <template #actions>
      <BaseButton @click="generateRaceSchedule">Generate Program</BaseButton>
      <BaseButton @click="handleStartStop">Start/Stop</BaseButton>
      <BaseButton @click="handleProceed">PROCEED</BaseButton>
    </template>

    <template #left>
      <HorseList />
    </template>

    <template #center>
      <div style="background: #e0e0e0; padding: 1rem; height: 200px">Main Content Area</div>
    </template>

    <template #right> <ProgramResults></ProgramResults> </template>
  </RaceTemplate>
</template>

<script setup lang="ts">
import { ProgramResults } from '@/components/molecules/program-results'
import { RaceTemplate } from '@/components/templates/race/'
import { BaseButton } from '@/components/atoms/button'
import { HorseList } from '@/components/molecules/horse-list'
import { useStore } from 'vuex'
import { raceViewModelKey } from './view-model/race.view-model'

const store = useStore(raceViewModelKey)

const generateRaceSchedule = (): void => {
  // TODO: Will connect to RaceViewModel store later
  console.log('Button clicked - will integrate with RaceViewModel store')
  store.commit('race/GENERATE_RACE_SCHEDULE')
}

const handleStartStop = (): void => {
  store.commit('race/START')
}

const handleProceed = (): void => {
  store.commit('race/PROCEED')
}
</script>

<style></style>
