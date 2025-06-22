<template>
  <div :class="$style.horseListContainer">
    <BaseTable
      :columns="columns"
      :data="horses"
      :striped="true"
      :hoverable="true"
      :default-sort="{ key: 'condition', direction: 'desc' }"
      :empty-message="'No horses available for racing'"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import BaseTable from '../../atoms/table/base-table.component.vue'
import type { TableColumn } from '../../atoms/table/base-table.abstract'

const store = useStore()

const horses = computed(() => store.state.race.horses)

// Define table columns
const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'condition', label: 'Condition', sortable: true },
  { key: 'color', label: 'Color', sortable: false, cellClass: 'color-cell' },
]

onMounted(() => {
  store.commit('race/GENERATE_HORSE_NAMES')
})
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.horseListContainer {
  width: 100%;

  :global(.color-cell) {
    text-align: center;

    &::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--horse-color);
      margin-right: tokens.$spacing-xs;
      vertical-align: middle;
      border: 1px solid tokens.$color-gray-300;
    }
  }
}
</style>
