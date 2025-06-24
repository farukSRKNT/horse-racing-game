<template>
  <div :class="$style.horseContainer">
    <span :class="$style.horseName">{{ props.name }}</span>
    <div :class="$style.horse" :style="{ backgroundColor: props.color }">🐎</div>
  </div>
</template>

<script lang="ts" setup>
import type { BaseHorseProps } from './base-horse.abstract'

const props = defineProps<BaseHorseProps>()
</script>

<style lang="scss" module>
@use '../../../styles/design-tokens.scss' as tokens;

.horseContainer {
  position: absolute;
  transition: transform 0.8s linear;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: tokens.$spacing-xs;
  width: 44px;
}

.horse {
  font-size: 2rem;
  transform: scaleX(-1);
}

.horseName {
  font-size: 0.75rem;
  font-weight: bold;
  color: tokens.$color-gray-900;
  white-space: nowrap;
  position: absolute;
  top: -16px;
  left: 0;
  z-index: 1;
}
</style>
