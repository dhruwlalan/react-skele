import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '../Skeleton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {}
