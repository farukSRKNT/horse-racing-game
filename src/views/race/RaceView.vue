<template>
  <div class="about">
    <h1>Race page</h1>
    <BaseButton @click="handleButtonClick"> Generate Race Schedule </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/components/atoms/button'

const handleButtonClick = (): void => {
  // TODO: Will connect to RaceViewModel store later
  console.log('Button clicked - will integrate with RaceViewModel store')
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
