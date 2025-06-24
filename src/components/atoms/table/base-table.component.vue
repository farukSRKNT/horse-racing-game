<template>
  <div :class="$style.tableContainer">
    <div :class="$style.tableHead">
      <table :class="$style.table">
        <thead :class="$style.header">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              :class="[$style.headerCell, { [$style.sortable]: column.sortable }]"
              @click="column.sortable ? handleSort(column.key) : null"
            >
              <div :class="$style.headerContent">
                {{ column.label }}
                <span v-if="column.sortable" :class="$style.sortIcon">
                  {{ getSortIcon(column.key) }}
                </span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div :class="$style.tableBody">
      <table :class="$style.table">
        <tbody :class="$style.body">
          <tr
            v-for="(row, index) in sortedData"
            :key="getRowKey(row, index)"
            :class="[
              $style.row,
              { [$style.striped]: striped && index % 2 === 1 },
              { [$style.hoverable]: hoverable },
            ]"
            @click="$emit('row-click', row, index)"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              :class="[$style.cell, column.cellClass]"
            >
              <slot
                :name="`cell-${column.key}`"
                :row="row"
                :value="getCellValue(row, column.key)"
                :index="index"
              >
                {{ getCellValue(row, column.key) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="data.length === 0" :class="$style.emptyState">
      <slot name="empty">
        <p :class="$style.emptyText">{{ emptyMessage }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TableColumn, TableData, SortDirection } from './base-table.abstract'

interface Props {
  columns: TableColumn[]
  data: TableData[]
  striped?: boolean
  hoverable?: boolean
  emptyMessage?: string
  defaultSort?: {
    key: string
    direction: SortDirection
  }
}

interface Emits {
  (e: 'row-click', row: TableData, index: number): void
  (e: 'sort-change', key: string, direction: SortDirection): void
}

const props = withDefaults(defineProps<Props>(), {
  striped: true,
  hoverable: true,
  emptyMessage: 'No data available',
})

const emit = defineEmits<Emits>()

const sortKey = ref<string>(props.defaultSort?.key || '')
const sortDirection = ref<SortDirection>(props.defaultSort?.direction || 'asc')

const sortedData = computed(() => {
  if (!sortKey.value) return props.data

  return [...props.data].sort((a, b) => {
    const aValue = getCellValue(a, sortKey.value)
    const bValue = getCellValue(b, sortKey.value)

    if (aValue === null || aValue === undefined) return 1
    if (bValue === null || bValue === undefined) return -1

    const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    return sortDirection.value === 'asc' ? comparison : -comparison
  })
})

const getCellValue = (row: TableData, key: string): unknown => {
  return key.split('.').reduce((obj: unknown, k: string) => {
    return obj && typeof obj === 'object' && k in obj
      ? (obj as Record<string, unknown>)[k]
      : undefined
  }, row)
}

const getRowKey = (row: TableData, index: number): string => {
  return row.id?.toString() || index.toString()
}

const handleSort = (key: string): void => {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDirection.value = 'asc'
  }

  emit('sort-change', key, sortDirection.value)
}

const getSortIcon = (key: string): string => {
  if (sortKey.value !== key) return '↕'
  return sortDirection.value === 'asc' ? '↑' : '↓'
}
</script>

<style module lang="scss">
@use '../../../styles/design-tokens.scss' as tokens;

.tableContainer {
  width: 100%;
  border-radius: tokens.$border-radius-medium;
  border: 1px solid tokens.$color-border;
  background: tokens.$color-bg-primary;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tableHead {
  background: tokens.$color-bg-secondary;
  border-bottom: 1px solid tokens.$color-border;
}

.tableBody {
  flex: 1;
  overflow-y: auto;
  background: tokens.$color-bg-primary;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: tokens.$font-family-primary;
  font-size: tokens.$font-size-sm;
}

.header {
  background: tokens.$color-bg-secondary;
  border-bottom: 2px solid tokens.$color-border;
}

.headerCell {
  padding: tokens.$spacing-md tokens.$spacing-lg;
  text-align: left;
  font-weight: tokens.$font-weight-semibold;
  color: tokens.$color-text-primary;
  white-space: nowrap;

  &.sortable {
    cursor: pointer;
    user-select: none;

    &:hover {
      background: tokens.$color-bg-hover;
    }
  }
}

.headerContent {
  display: flex;
  align-items: center;
  gap: tokens.$spacing-sm;
}

.sortIcon {
  color: tokens.$color-text-secondary;
  font-size: tokens.$font-size-xs;
}

.body {
  background: tokens.$color-bg-primary;
}

.row {
  border-bottom: 1px solid tokens.$color-border-light;

  &.striped {
    background: tokens.$color-bg-secondary;
  }

  &.hoverable:hover {
    background: tokens.$color-bg-hover;
  }

  &:last-child {
    border-bottom: none;
  }
}

.cell {
  padding: tokens.$spacing-md tokens.$spacing-lg;
  color: tokens.$color-text-primary;
  vertical-align: middle;
}

.emptyState {
  padding: tokens.$spacing-xl;
  text-align: center;
  border-top: 1px solid tokens.$color-border-light;
}

.emptyText {
  color: tokens.$color-text-secondary;
  font-style: italic;
  margin: 0;
}
</style>
