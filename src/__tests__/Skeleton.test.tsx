import React from 'react'
import { it, expect, afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import Skeleton from '../Skeleton'
import '../stories/main.css'

afterEach(cleanup)

describe('test skeleton', () => {
  it('should render a skeleton', () => {
    const { container } = render(
      <div className="h-5 w-20 rounded-full">
        <Skeleton />
      </div>
    )
    const skeleton = container.getElementsByClassName('base-skeleton-styles')

    expect(skeleton).toBeDefined()
  })
})
