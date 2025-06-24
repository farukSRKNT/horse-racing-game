<template>
  <div :class="$style.horseListContainer">
    <h3 :class="$style.title">Horse List</h3>
    <BaseTable
      :columns="columns"
      :data="horses"
      :striped="true"
      :hoverable="true"
      :default-sort="{ key: 'condition', direction: 'desc' }"
      :empty-message="'No horses available for racing'"
    >
      <template #cell-color="{ value }">
        <div :class="$style.colorCell">
          <div :class="$style.colorCircle" :style="{ backgroundColor: value as string }"></div>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import BaseTable from '../../atoms/table/base-table.component.vue'
import type { TableColumn } from '../../atoms/table/base-table.abstract'
import { raceViewModelKey } from '@/views/race/view-model/race.view-model'

const store = useStore(raceViewModelKey)

const horses = computed(() => store.state.race.horses)

// Define table columns
const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'condition', label: 'Condition', sortable: true },
  { key: 'color', label: 'Color', sortable: false },
]

onMounted(() => {
  store.commit('race/GENERATE_HORSE_NAMES')
})
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.horseListContainer {
  width: 100%;
  padding: tokens.$spacing-lg;
  min-height: 0;
}

.colorCell {
  display: flex;
  justify-content: center;
  align-items: center;
}

.colorCircle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid tokens.$color-border;
  display: inline-block;
}

.title {
  background: tokens.$color-bg-secondary;
  margin: 0;
  padding: tokens.$spacing-md tokens.$spacing-lg;
  font-size: tokens.$font-size-lg;
  font-weight: tokens.$font-weight-semibold;
  color: tokens.$color-text-primary;
  border-bottom: 1px solid tokens.$color-border;
}
</style>
