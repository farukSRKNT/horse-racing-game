<template>
  <div :class="$style.container">
    <!-- Program Table -->
    <div :class="$style.tableSection">
      <h3 :class="$style.tableTitle">Program</h3>
      <div v-for="round of raceSchedule" :key="round.id" :class="$style.roundInfo">
        <h4 :class="$style.tableTitle">Round {{ round.id }} - Distance: {{ round.distance }} m</h4>
        <BaseTable
          :columns="columns"
          :data="round.selectedHorses"
          :striped="true"
          :hoverable="true"
          empty-message="No race schedule available"
        >
        </BaseTable>
      </div>
    </div>

    <!-- Results Table -->
    <div :class="$style.tableSection">
      <h3 :class="$style.tableTitle">Results</h3>
      <div v-for="result of results" :key="result.id" :class="$style.roundInfo">
        <h4 :class="$style.tableTitle">Round {{ result.id }}</h4>
        <p>Distance: {{ result.distance }} m</p>
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
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { BaseTable } from '@/components/atoms/table'
import type { TableColumn } from '@/components/atoms/table'
import { raceViewModelKey } from '@/views/race/view-model/race.view-model'

const columns: TableColumn[] = [
  { key: 'position', label: 'Position', sortable: false },
  { key: 'name', label: 'Name', sortable: false },
]

// Results Table Configuration
const resultsColumns: TableColumn[] = [
  { key: 'position', label: 'Position', sortable: true, width: '100px' },
  { key: 'name', label: 'Horse Name', sortable: true },
  { key: 'time', label: 'Time', sortable: true, width: '120px' },
]

const store = useStore(raceViewModelKey)

const raceSchedule = computed(() => store.state.race.raceSchedule)
const results = computed(() => store.state.race.results)

// Results Table Data
const resultsTableData = computed(() => {
  const results = store.state.race.results
  const raceSchedule = store.state.race.raceSchedule

  const flatResults: any[] = []

  results.forEach((roundResult: any) => {
    const round = raceSchedule.find((r: any) => r.id === roundResult.roundId)
    if (!round) return

    roundResult.results.forEach((result: any) => {
      flatResults.push({
        id: `${roundResult.roundId}-${result.horse.id}`,
        position: result.position,
        horseName: result.horse.name,
        time: result.time,
      })
    })
  })
  console.log('Flat Results:', flatResults)
  return flatResults
})

console.log('Results Table Data:', resultsTableData.value)
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.container {
  display: flex;

  padding: tokens.$spacing-lg;
}

.tableSection {
  background: tokens.$color-bg-primary;
  border-radius: tokens.$border-radius-lg;
  border: 1px solid tokens.$color-border;
  overflow: hidden;
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
