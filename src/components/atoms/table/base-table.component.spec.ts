import type { TableColumn, TableData } from './base-table.abstract'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseTable from './base-table.component.vue'

const mockColumns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'email', label: 'Email', sortable: false },
]

const mockData: TableData[] = [
  { id: '1', name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
]

describe('BaseTable', () => {
  it('renders table with correct headers', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: mockData,
      },
    })

    const headers = wrapper.findAll('th')
    expect(headers).toHaveLength(3)
    expect(headers[0].text()).toContain('Name')
    expect(headers[1].text()).toContain('Age')
    expect(headers[2].text()).toContain('Email')
  })

  it('renders table rows with correct data', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: mockData,
      },
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(3)

    const firstRowCells = rows[0].findAll('td')
    expect(firstRowCells[0].text()).toBe('John Doe')
    expect(firstRowCells[1].text()).toBe('30')
    expect(firstRowCells[2].text()).toBe('john@example.com')
  })

  it.skip('shows empty state when no data', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: [],
      },
    })

    expect(wrapper.find('.emptyState').exists()).toBe(true)
    expect(wrapper.text()).toContain('No data available')
  })

  it('shows custom empty message', () => {
    const customMessage = 'No horses found'
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: [],
        emptyMessage: customMessage,
      },
    })

    expect(wrapper.text()).toContain(customMessage)
  })

  it('handles sorting correctly', async () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: mockData,
      },
    })

    // Click on sortable header
    const nameHeader = wrapper.find('th')
    await nameHeader.trigger('click')

    // Check if sort-change event was emitted
    expect(wrapper.emitted('sort-change')).toBeTruthy()
    expect(wrapper.emitted('sort-change')?.[0]).toEqual(['name', 'asc'])
  })

  it.skip('applies striped styling when enabled', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: mockData,
        striped: true,
      },
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows[1].classes()).toContain('striped')
  })

  it('emits row-click event when row is clicked', async () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: mockData,
      },
    })

    const firstRow = wrapper.find('tbody tr')
    await firstRow.trigger('click')

    expect(wrapper.emitted('row-click')).toBeTruthy()
    expect(wrapper.emitted('row-click')?.[0]).toEqual([mockData[0], 0])
  })

  it('handles nested object properties', () => {
    const nestedColumns: TableColumn[] = [
      { key: 'user.name', label: 'Name', sortable: true },
      { key: 'user.profile.age', label: 'Age', sortable: true },
    ]

    const nestedData: TableData[] = [
      {
        id: '1',
        user: {
          name: 'John',
          profile: { age: 30 },
        },
      },
    ]

    const wrapper = mount(BaseTable, {
      props: {
        columns: nestedColumns,
        data: nestedData,
      },
    })

    const cells = wrapper.findAll('td')
    expect(cells[0].text()).toBe('John')
    expect(cells[1].text()).toBe('30')
  })

  it('handles default sorting', () => {
    const wrapper = mount(BaseTable, {
      props: {
        columns: mockColumns,
        data: mockData,
        defaultSort: { key: 'age', direction: 'desc' },
      },
    })

    // Check if data is sorted by age descending
    const rows = wrapper.findAll('tbody tr')
    const firstRowAge = rows[0].findAll('td')[1].text()
    expect(firstRowAge).toBe('35') // Bob Johnson with age 35
  })
})
