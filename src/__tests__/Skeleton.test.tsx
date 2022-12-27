import React from 'react'
import { it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Skeleton } from '../Skeleton'

afterEach(cleanup)

describe('test skeleton', () => {
  beforeEach(() => {
    render(<Skeleton />)
  })

  it('should render a skeleton', () => {
    expect(screen.getAllByText('Hello, World!')).toBeDefined()
  })
})
