import type { Meta, StoryObj } from '@storybook/vue3'
import BaseHorse from './base-horse.component.vue'

const meta: Meta<typeof BaseHorse> = {
  title: 'Atoms/Horse',
  component: BaseHorse,
  argTypes: {
    color: { control: 'color' },
  },
}
export default meta

type Story = StoryObj<typeof BaseHorse>

export const Default: Story = {
  args: {
    color: '#8B4513',
  },
}
