<template>
  <div :class="$style.container">
    <div :class="$style.tableSection">
      <h3 :class="$style.tableTitle">Results</h3>
      <div :class="$style.roundWrapper">
        <div v-for="result of results" :key="result.roundId" :class="$style.roundInfo">
          <h4 :class="$style.tableTitle">
            Round {{ result.roundId }} - Distance: {{ result.distance }} m
          </h4>
          <BaseTable
            :columns="resultsColumns"
            :data="result.results"
            :striped="true"
            :hoverable="true"
            empty-message="No race results available"
          >
          </BaseTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { BaseTable } from '@/components/atoms/table'
import type { TableColumn } from '@/components/atoms/table'
import { raceViewModelKey } from '@/views/race/view-model/race.view-model'

// Results Table Configuration
const resultsColumns: TableColumn[] = [
  { key: 'position', label: 'Position', sortable: true, width: '100px' },
  { key: 'name', label: 'Horse Name', sortable: true },
]

const store = useStore(raceViewModelKey)

const results = computed(() => store.state.race.results)
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.container {
  padding: tokens.$spacing-lg;
  width: 100%;
}

.tableSection {
  background: tokens.$color-bg-primary;
  border-radius: tokens.$border-radius-lg;
  border: 1px solid tokens.$color-border;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tableTitle {
  background: tokens.$color-bg-secondary;
  margin: 0;
  padding: tokens.$spacing-md tokens.$spacing-lg;
  font-size: tokens.$font-size-lg;
  font-weight: tokens.$font-weight-semibold;
  color: tokens.$color-text-primary;
  border-bottom: 1px solid tokens.$color-border;
}

.horsesList {
  max-width: 400px;
  font-size: tokens.$font-size-sm;
}

.horseItem {
  display: inline;
  color: tokens.$color-text-primary;
}

.firstPlace {
  color: tokens.$color-success;
  font-weight: tokens.$font-weight-bold;
}

.secondPlace {
  color: tokens.$color-warning;
  font-weight: tokens.$font-weight-semibold;
}

.thirdPlace {
  color: tokens.$color-primary-600;
  font-weight: tokens.$font-weight-semibold;
}

.regularPosition {
  color: tokens.$color-text-primary;
}

.timeValue {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: tokens.$font-weight-medium;
}

.roundWrapper {
  overflow: auto;
}

@media (max-width: 768px) {
  .container {
    gap: tokens.$spacing-lg;
    padding: tokens.$spacing-md;
  }

  .horsesList {
    max-width: 200px;
    font-size: tokens.$font-size-xs;
  }
}
</style>
