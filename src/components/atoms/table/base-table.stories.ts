// src/components/atoms/base-table/base-table.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTable from './base-table.component.vue'
import type { TableColumn, TableData } from './base-table.abstract'

const meta: Meta<typeof BaseTable> = {
  title: 'Atoms/BaseTable',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: BaseTable as any,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable base table component with sorting, custom cells, and responsive design.',
      },
    },
  },
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Apply alternating row colors',
    },
    hoverable: {
      control: 'boolean',
      description: 'Enable hover effects on rows',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message shown when no data is available',
    },
    'onRow-click': { action: 'row-clicked' },
    'onSort-change': { action: 'sort-changed' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data
const basicColumns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: false },
]

const basicData: TableData[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
]

const horseColumns: TableColumn[] = [
  { key: 'name', label: 'Horse Name', sortable: true },
  { key: 'condition', label: 'Condition', sortable: true },
  { key: 'color', label: 'Color', sortable: false },
  { key: 'speed', label: 'Speed', sortable: true },
]

const horseData: TableData[] = [
  { id: '1', name: 'Thunder', condition: 85, color: '#FF6B6B', speed: '45 km/h' },
  { id: '2', name: 'Lightning', condition: 92, color: '#4ECDC4', speed: '48 km/h' },
  { id: '3', name: 'Storm', condition: 78, color: '#45B7D1', speed: '42 km/h' },
  { id: '4', name: 'Blaze', condition: 88, color: '#F9CA24', speed: '46 km/h' },
  { id: '5', name: 'Shadow', condition: 95, color: '#6C5CE7', speed: '50 km/h' },
]

// Basic Stories
export const Default: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    hoverable: true,
  },
}

export const WithoutStriping: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    striped: false,
    hoverable: true,
  },
}

export const NotHoverable: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    hoverable: false,
  },
}

export const EmptyState: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found',
  },
}

export const CustomEmptyMessage: Story = {
  args: {
    columns: horseColumns,
    data: [],
    emptyMessage: 'No horses available for racing',
  },
}

// Horse Racing Context
export const HorseTable: Story = {
  args: {
    columns: horseColumns,
    data: horseData,
    striped: true,
    hoverable: true,
    defaultSort: { key: 'condition', direction: 'desc' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing horse racing data with condition-based sorting',
      },
    },
  },
}

// Large Dataset
const generateLargeDataset = (count: number): TableData[] => {
  const roles = ['Developer', 'Designer', 'Manager', 'QA Engineer', 'DevOps']
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
  }))
}

export const LargeDataset: Story = {
  args: {
    columns: basicColumns,
    data: generateLargeDataset(50),
    striped: true,
    hoverable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with 50 rows to test performance and scrolling',
      },
    },
  },
}

// Nested Data
const nestedColumns: TableColumn[] = [
  { key: 'user.name', label: 'Name', sortable: true },
  { key: 'user.profile.age', label: 'Age', sortable: true },
  { key: 'user.contact.email', label: 'Email', sortable: false },
  { key: 'department.name', label: 'Department', sortable: true },
]

const nestedData: TableData[] = [
  {
    id: '1',
    user: {
      name: 'Alice Cooper',
      profile: { age: 29 },
      contact: { email: 'alice@company.com' },
    },
    department: { name: 'Engineering' },
  },
  {
    id: '2',
    user: {
      name: 'Bob Wilson',
      profile: { age: 34 },
      contact: { email: 'bob@company.com' },
    },
    department: { name: 'Design' },
  },
]

export const NestedObjectData: Story = {
  args: {
    columns: nestedColumns,
    data: nestedData,
    striped: true,
    hoverable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table displaying nested object properties using dot notation',
      },
    },
  },
}

// Sorting Examples
export const DefaultSorting: Story = {
  args: {
    columns: horseColumns,
    data: horseData,
    defaultSort: { key: 'condition', direction: 'desc' },
    striped: true,
    hoverable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with default sorting by condition (descending)',
      },
    },
  },
}

// Custom Column Widths
const customWidthColumns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true, width: '80px' },
  { key: 'name', label: 'Full Name', sortable: true, width: '200px' },
  { key: 'email', label: 'Email Address', sortable: true, width: '250px' },
  { key: 'role', label: 'Role', sortable: false, width: '120px' },
]

export const CustomColumnWidths: Story = {
  args: {
    columns: customWidthColumns,
    data: basicData.map((item, index) => ({ ...item, id: index + 1 })),
    striped: true,
    hoverable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom column widths specified',
      },
    },
  },
}

// Race Results Context
const raceResultColumns: TableColumn[] = [
  { key: 'position', label: 'Position', sortable: true },
  { key: 'horseName', label: 'Horse', sortable: true },
  { key: 'jockey', label: 'Jockey', sortable: true },
  { key: 'time', label: 'Time', sortable: true },
  { key: 'odds', label: 'Odds', sortable: false },
]

const raceResultData: TableData[] = [
  {
    id: '1',
    position: 1,
    horseName: 'Thunder',
    jockey: 'M. Johnson',
    time: '2:05.32',
    odds: '3:1',
  },
  {
    id: '2',
    position: 2,
    horseName: 'Lightning',
    jockey: 'S. Williams',
    time: '2:05.89',
    odds: '5:2',
  },
  { id: '3', position: 3, horseName: 'Storm', jockey: 'R. Davis', time: '2:06.12', odds: '7:2' },
  { id: '4', position: 4, horseName: 'Blaze', jockey: 'T. Brown', time: '2:06.45', odds: '4:1' },
]

export const RaceResults: Story = {
  args: {
    columns: raceResultColumns,
    data: raceResultData,
    defaultSort: { key: 'position', direction: 'asc' },
    striped: true,
    hoverable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Race results table sorted by finishing position',
      },
    },
  },
}

// Minimal Configuration
export const Minimal: Story = {
  args: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'value', label: 'Value' },
    ],
    data: [
      { id: '1', name: 'Item 1', value: 'Value 1' },
      { id: '2', name: 'Item 2', value: 'Value 2' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table configuration without sorting or styling options',
      },
    },
  },
}
