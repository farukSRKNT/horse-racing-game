<template>
  <div :class="$style.layout">
    <header :class="$style.header">
      <h1 :class="$style.title">{{ title }}</h1>
      <div :class="$style.actions">
        <slot name="actions" />
      </div>
    </header>

    <main :class="$style.content">
      <section :class="$style.top">
        <slot name="top" />
      </section>
      <section :class="$style.left">
        <slot name="left" />
      </section>
      <section :class="$style.center">
        <slot name="center" />
      </section>
      <section :class="$style.right">
        <slot name="right" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: tokens.$color-gray-200;
}

.title {
  margin: 0;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'top top top'
    'left center right';
  gap: 1rem;
  padding: 1rem;
  flex: 1;
  min-height: 0;
}

.top {
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0;
}

.left {
  grid-area: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
}

.center {
  grid-area: center;
  display: flex;
  min-height: 0;
}

.right {
  grid-area: right;
  display: flex;
  min-height: 0;
}
</style>
