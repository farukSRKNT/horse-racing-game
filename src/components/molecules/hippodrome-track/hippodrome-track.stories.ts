import type { Meta, StoryObj } from '@storybook/vue3'
import HippodromeTrack from './hippodrome-track.component.vue'

const meta: Meta<typeof HippodromeTrack> = {
  title: 'Molecules/HippodromeTrack',
  component: HippodromeTrack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A race track component showing horse position with finish line indicator.',
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template:
        '<div style="width: 600px; height: 200px; position: relative;">' + '<story />' + '</div>',
    }),
  ],
  argTypes: {
    position: {
      control: 'number',
      description: 'Current position of the horse on the track (0-100)',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: 1,
  },
}

// export const StartPosition: Story = {
//   args: {
//     position: 0,
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Horse at the starting position',
//       },
//     },
//   },
// }

// export const MidRace: Story = {
//   args: {
//     position: 75,
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Horse approaching the finish line',
//       },
//     },
//   },
// }

// export const FinishLine: Story = {
//   args: {
//     position: 100,
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Horse crossing the finish line',
//       },
//     },
//   },
// }

// export const EarlyRace: Story = {
//   args: {
//     position: 25,
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Horse in early stages of the race',
//       },
//     },
//   },
// }
