import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Skeleton from '../Skeleton'
import '../skeleton.css'
import './main.css'

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    highlightColor: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
    borderRadius: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const SimpleSkeleton: Story = {
  render: (args) => (
    <div className="h-5 w-20 rounded-1">
      <Skeleton
        backgroundColor={args.backgroundColor}
        highlightColor={args.highlightColor}
        height={args.height}
        width={args.width}
        borderRadius={args.borderRadius}
        isText={args.isText}
      />
    </div>
  ),
}

export const TextSkeleton: Story = {
  render: (args) => (
    <div>
      <div className="text-3 leading-3">
        addapting the height
        <Skeleton
          backgroundColor={args.backgroundColor}
          highlightColor={args.highlightColor}
          height={args.height}
          width={args.width || 60}
          borderRadius={args.borderRadius}
          isText
        />
        based on text height
      </div>
      <br />
      <div className="text-6 leading-6">
        using display{' '}
        <Skeleton
          backgroundColor={args.backgroundColor}
          highlightColor={args.highlightColor}
          height={args.height}
          width={args.width || 60}
          borderRadius={args.borderRadius}
          display="inline-block"
          isText
        />{' '}
        inline-block
      </div>
    </div>
  ),
}

export const UsingClassNames: Story = {
  render: (args) => (
    <Skeleton
      className="h-10 w-20 rounded-full"
      backgroundColor={args.backgroundColor}
      highlightColor={args.highlightColor}
      height={args.height}
      width={args.width}
      borderRadius={args.borderRadius}
      isText={args.isText}
    />
  ),
}
