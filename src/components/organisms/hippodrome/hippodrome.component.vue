<template>
  <div :class="$style.container">
    <div v-for="count in 10" :key="count" class="hippodrome-track">
      <div :key="count" class="hippodrome-track">
        <div class="track-line">Line</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { raceViewModelKey } from '@/views/race/view-model/race.view-model'

const store = useStore(raceViewModelKey)

const ongoingRace = computed(() => store.state.race.ongoingRace)

console.log('csl ongoingRace', ongoingRace.value)
</script>

<style module lang="scss">
.container {
  display: flex;
}
</style>
