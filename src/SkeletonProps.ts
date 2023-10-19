import { ReactNode } from 'react'

export interface SkeletonProps {
  children?: ReactNode | undefined
  count?: number
  backgroundColor?: string
  highlightColor?: string
  height?: string | number
  width?: string | number
  borderRadius?: string | number
  isText?: boolean
  display?: string
  className?: string
}

export interface SkeletonStyleProps {
  backgroundColor: string
  backgroundImage: string
  height?: string | number
  width?: string | number
  borderRadius?: string | number
  display?: string
}
