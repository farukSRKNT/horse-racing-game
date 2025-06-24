import type { Meta, StoryObj } from '@storybook/vue3'
import BaseHorse from './base-horse.component.vue'

const meta: Meta<typeof BaseHorse> = {
  title: 'Atoms/Horse',
  component: BaseHorse,
  argTypes: {
    color: { control: 'color' },
    speed: { control: { type: 'number', min: 1, max: 10, step: 0.5 } },
    name: { control: 'text', description: 'Name of the horse' },
  },
}
export default meta

type Story = StoryObj<typeof BaseHorse>

export const Default: Story = {
  args: {
    color: '#8B4513',
    speed: 4,
    name: 'Thunderbolt',
  },
}
