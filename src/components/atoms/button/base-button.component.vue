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
@use '../../../styles/design-tokens.scss' as tokens;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: tokens.$border-radius-medium;
  font-family: tokens.$font-family-primary;
  font-weight: tokens.$font-weight-medium;
  cursor: pointer;
  transition: all tokens.$transition-duration-fast tokens.$transition-timing-ease;
  text-decoration: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid tokens.$color-primary-500;
    outline-offset: 2px;
  }

  // Sizes
  &--small {
    padding: tokens.$spacing-xs tokens.$spacing-sm;
    font-size: tokens.$font-size-sm;
    line-height: tokens.$line-height-sm;
  }

  &--medium {
    padding: tokens.$spacing-sm tokens.$spacing-md;
    font-size: tokens.$font-size-base;
    line-height: tokens.$line-height-base;
  }

  &--large {
    padding: tokens.$spacing-md tokens.$spacing-lg;
    font-size: tokens.$font-size-lg;
    line-height: tokens.$line-height-lg;
  }

  // Variants
  &--primary {
    background-color: tokens.$color-primary-600;
    color: tokens.$color-white;

    &:hover:not(:disabled) {
      background-color: tokens.$color-primary-700;
    }

    &:active:not(:disabled) {
      background-color: tokens.$color-primary-800;
    }
  }

  &--secondary {
    background-color: tokens.$color-gray-100;
    color: tokens.$color-gray-900;
    border: 1px solid tokens.$color-gray-300;

    &:hover:not(:disabled) {
      background-color: tokens.$color-gray-200;
      border-color: tokens.$color-gray-400;
    }

    &:active:not(:disabled) {
      background-color: tokens.$color-gray-300;
    }
  }

  &--danger {
    background-color: tokens.$color-danger-600;
    color: tokens.$color-white;

    &:hover:not(:disabled) {
      background-color: tokens.$color-danger-700;
    }

    &:active:not(:disabled) {
      background-color: tokens.$color-danger-800;
    }
  }

  &--ghost {
    background-color: transparent;
    color: tokens.$color-primary-600;

    &:hover:not(:disabled) {
      background-color: tokens.$color-primary-50;
    }

    &:active:not(:disabled) {
      background-color: tokens.$color-primary-100;
    }
  }

  // Disabled state
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
