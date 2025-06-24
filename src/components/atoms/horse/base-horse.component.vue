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
  overflow: hidden;
}

.horse {
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  transform: scaleX(-1);
}

.horseName {
  font-size: 0.75rem;
  font-weight: bold;
  color: tokens.$color-gray-400;
  white-space: nowrap;
}
</style>
