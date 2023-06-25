import React from 'react'
import { SkeletonProps, SkeletonStyleProps } from './SkeletonProps'
import './skeleton.css'

const Skeleton = ({
  children = null,
  backgroundColor = '#f4f4f4',
  highlightColor = '#e8e8e8',
  height,
  width,
  borderRadius,
  isText = false,
  display = 'block',
  className = '',
}: SkeletonProps) => {
  const style: SkeletonStyleProps = {
    backgroundColor: `${backgroundColor}`,
    backgroundImage: `linear-gradient(90deg, ${backgroundColor}, ${highlightColor}, ${backgroundColor})`,
  }

  if (height) {
    style.height = height
  }

  if (width) {
    style.width = width
  }

  if (borderRadius) {
    style.borderRadius = borderRadius
  }

  if (display) {
    style.display = display
  }

  return (
    <div
      className={`react-skele-base-skeleton-styles react-skele-base-border-radius${
        isText ? '-text' : ''
      }${className ? ` ${className}` : ''}`}
      style={style}
    >
      {isText ? <>&zwnj;</> : children}
    </div>
  )
}

export default Skeleton
