<template>
  <div :class="$style.layout">
    <header :class="$style.header">
      <h1 :class="$style.title">{{ title }}</h1>
      <div :class="$style.actions">
        <slot name="actions" />
      </div>
    </header>

    <main :class="$style.content">
      <section :class="$style.section">
        <slot name="left" />
      </section>
      <section :class="$style.section">
        <slot name="center" />
      </section>
      <section :class="$style.section">
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
}

.title {
  margin: 0;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.content {
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
}

.section {
  flex: 1;
}
</style>
