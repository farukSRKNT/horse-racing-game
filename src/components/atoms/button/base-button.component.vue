<template>
  <button
    :class="[
      $style.button,
      $style[`button--${variant}`],
      $style[`button--${size}`],
      { [$style['button--disabled']]: disabled },
    ]"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonVariant, ButtonSize, ButtonType } from './base-button.abstract'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent): void => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style module lang="scss">
@import '../../../styles/design-tokens.scss';

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: $border-radius-medium;
  font-family: $font-family-primary;
  font-weight: $font-weight-medium;
  cursor: pointer;
  transition: all $transition-duration-fast $transition-timing-ease;
  text-decoration: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid $color-primary-500;
    outline-offset: 2px;
  }

  // Sizes
  &--small {
    padding: $spacing-xs $spacing-sm;
    font-size: $font-size-sm;
    line-height: $line-height-sm;
  }

  &--medium {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    line-height: $line-height-base;
  }

  &--large {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-lg;
    line-height: $line-height-lg;
  }

  // Variants
  &--primary {
    background-color: $color-primary-600;
    color: $color-white;

    &:hover:not(:disabled) {
      background-color: $color-primary-700;
    }

    &:active:not(:disabled) {
      background-color: $color-primary-800;
    }
  }

  &--secondary {
    background-color: $color-gray-100;
    color: $color-gray-900;
    border: 1px solid $color-gray-300;

    &:hover:not(:disabled) {
      background-color: $color-gray-200;
      border-color: $color-gray-400;
    }

    &:active:not(:disabled) {
      background-color: $color-gray-300;
    }
  }

  &--danger {
    background-color: $color-danger-600;
    color: $color-white;

    &:hover:not(:disabled) {
      background-color: $color-danger-700;
    }

    &:active:not(:disabled) {
      background-color: $color-danger-800;
    }
  }

  &--ghost {
    background-color: transparent;
    color: $color-primary-600;

    &:hover:not(:disabled) {
      background-color: $color-primary-50;
    }

    &:active:not(:disabled) {
      background-color: $color-primary-100;
    }
  }

  // Disabled state
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
