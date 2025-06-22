<template>
  <div :class="$style.horseListContainer">
    <BaseTable
      :columns="columns"
      :data="horseTableData"
      :striped="true"
      :hoverable="true"
      :default-sort="{ key: 'condition', direction: 'desc' }"
      :empty-message="'No horses available for racing'"
      @row-click="handleRowClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import BaseTable from '../../atoms/table/base-table.component.vue'
import type { TableColumn } from '../../atoms/table/base-table.abstract'
import type { HorseTableData } from './horse-list.abstract'
import { generateHorseColor, generateCondition } from './horse-list.utils'

const store = useStore()

// Define table columns
const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'condition', label: 'Condition', sortable: true },
  { key: 'color', label: 'Color', sortable: false, cellClass: 'color-cell' },
]

onMounted(() => {
  store.commit('race/GENERATE_HORSE_NAMES')
})

// Get horse names from store and transform to table data
const horseTableData = computed<HorseTableData[]>(() => {
  const horseNames = store.state.race.horseNames || []

  return horseNames.map(
    (name: string, index: number): HorseTableData => ({
      id: `horse-${index}`,
      name,
      condition: generateCondition(name), // Mock condition based on name
      color: generateHorseColor(name), // Generate consistent color based on name
    }),
  )
})

console.log('raceSchedule:', store.state.race.raceSchedule)

// Handle row click event
const handleRowClick = (horse: HorseTableData): void => {
  console.log('Horse selected:', horse)
  // Can emit event to parent if needed
}
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
