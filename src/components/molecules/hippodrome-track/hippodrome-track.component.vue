<template>
  <div :class="$style.container">
    <div :class="$style.position">{{ props.position }}</div>
    <div :class="$style.track"></div>
    <div :class="$style.finish"></div>
  </div>
</template>

<script setup lang="ts">
import type { HippodromeTrackProps } from './hippodrome-track.abstract'

const props = defineProps<HippodromeTrackProps>()
</script>

<style module lang="scss">
.container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
}

.position {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  color: #333;
  border: 1px solid red;
}

.track {
  flex-grow: 1;
  height: 100%;
  background-color: #ccc;
  border-bottom: 1px solid red;
}

.finish {
  height: 100%;
  width: 1px;
  background-color: red;
}
</style>
