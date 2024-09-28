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
    className: { control: 'text' },
    count: { control: 'number' },
    backgroundColor: { control: 'color' },
    highlightColor: { control: 'color' },
    height: { control: 'text' },
    width: { control: 'text' },
    borderRadius: { control: 'text' },
    isText: { control: 'boolean' },
    display: { control: 'text' },
    style: { control: 'object' },
  },
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const SimpleSkeleton: Story = {
  render: (args) => (
    <div className="h-5 w-20 rounded-full">
      <Skeleton
        backgroundColor={args.backgroundColor}
        highlightColor={args.highlightColor}
        height={args.height}
        width={args.width}
        borderRadius={args.borderRadius}
        isText={args.isText}
        display={args.display}
        className={args.className}
        count={args.count}
      />
    </div>
  ),
}

export const TextSkeleton: Story = {
  render: (args) => (
    <div>
      <div className="text-3 leading-9">
        addapting the height
        <Skeleton
          display="inline-block"
          backgroundColor={args.backgroundColor}
          highlightColor={args.highlightColor}
          height={args.height}
          width={args.width || 60}
          borderRadius={args.borderRadius}
          isText
        />
        based on text line-height
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
          display=""
          isText
        />{' '}
        inline-block
      </div>
    </div>
  ),
}

export const WithFlex: Story = {
  render: () => (
    <div className="flex h-full w-full max-w-62 flex-col bg-white-primary px-4 py-6">
      <div className="flex h-10 items-center gap-4">
        <Skeleton className="h-10 w-10 flex-shrink-0 rounded-full" />
        <div className="font-poppins text-4 font-semibold leading-4 -tracking-0.2 text-black-dark">
          <Skeleton width={100} isText />
        </div>
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

export const UsingStyle: Story = {
  render: () => (
    <Skeleton
      height="10px"
      width="20px"
      borderRadius="20px"
      style={{ height: '40px', width: '100px' }}
    />
  ),
}
