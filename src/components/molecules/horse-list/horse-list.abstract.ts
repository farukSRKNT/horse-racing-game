// src/components/molecules/horse-list/horse-list.abstract.ts
export interface HorseData {
  id: string
  name: string
  condition: number
  color: string
}

export interface HorseTableData extends HorseData {
  // Additional properties for table display if needed
}

// export interface HorseListProps {
//   // Props for the horse list component if needed
// }

export type HorseCondition = number // 1-100 range
export type HorseColor = string // Hex color code
