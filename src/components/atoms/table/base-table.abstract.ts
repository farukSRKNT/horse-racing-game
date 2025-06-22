export type SortDirection = 'asc' | 'desc'

export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  cellClass?: string
  width?: string
}

export interface TableData {
  id?: string | number
  [key: string]: unknown
}

export interface SortConfig {
  key: string
  direction: SortDirection
}

// Horse-specific table data types
export interface HorseTableData extends TableData {
  id: string
  name: string
  condition: number
  color: string
  position?: number
  time?: string
}

export interface RaceResultTableData extends TableData {
  id: string
  position: number
  horseName: string
  horseColor: string
  time: string
  round: number
  distance: number
}
