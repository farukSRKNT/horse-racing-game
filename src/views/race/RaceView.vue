<template>
  <RaceTemplate v-bind="args" title="Horse Racing">
    <template #actions>
      <BaseButton @click="generateRaceSchedule">Generate Program</BaseButton>
      <BaseButton>Start/Stop</BaseButton>
    </template>

    <template #left>
      <HorseList />
    </template>

    <template #center>
      <div style="background: #e0e0e0; padding: 1rem; height: 200px">Main Content Area</div>
    </template>

    <template #right>
      <div style="background: #f0f0f0; padding: 1rem; height: 200px">Right Panel Content</div>
    </template>
  </RaceTemplate>
</template>

<script setup lang="ts">
import { RaceTemplate } from '@/components/templates/race/'
import { BaseButton } from '@/components/atoms/button'
import { HorseList } from '@/components/molecules/horse-list'
import { useStore } from 'vuex'

const store = useStore()

const generateRaceSchedule = (): void => {
  // TODO: Will connect to RaceViewModel store later
  console.log('Button clicked - will integrate with RaceViewModel store')
  store.commit('race/GENERATE_RACE_SCHEDULE')
}
</script>

<style></style>
