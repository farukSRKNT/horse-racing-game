// layout.component.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import RaceTemplate from './race-template.component.vue'

const meta: Meta<typeof RaceTemplate> = {
  title: 'Templates/Layout',
  component: RaceTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Dashboard',
  },
  render: (args) => ({
    components: { RaceTemplate },
    setup() {
      return { args }
    },
    template: `
      <RaceTemplate
     v-bind="args">
        <template #actions>
          <button>Save</button>
          <button>Export</button>
        </template>

        <template #left>
          <div style="background: #f0f0f0; padding: 1rem; height: 200px;">
            Left Panel Content
          </div>
        </template>

        <template #center>
          <div style="background: #e0e0e0; padding: 1rem; height: 200px;">
            Main Content Area
          </div>
        </template>

        <template #right>
          <div style="background: #f0f0f0; padding: 1rem; height: 200px;">
            Right Panel Content
          </div>
        </template>
      </RaceTemplate
    >
    `,
  }),
}

export const WithoutActions: Story = {
  args: {
    title: 'Simple Layout',
  },
  render: (args) => ({
    components: { RaceTemplate },
    setup() {
      return { args }
    },
    template: `
      <RaceTemplate
     v-bind="args">
        <template #left>Left Content</template>
        <template #center>Center Content</template>
        <template #right>Right Content</template>
      </RaceTemplate
    >
    `,
  }),
}

export const Empty: Story = {
  args: {
    title: 'Empty Layout',
  },
}
