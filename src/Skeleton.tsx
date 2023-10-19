import React from 'react'
import { SkeletonProps, SkeletonStyleProps } from './SkeletonProps'
import './skeleton.css'

const Skeleton = ({
  children = null,
  count = 1,
  backgroundColor = '#f4f4f4',
  highlightColor = '#e8e8e8',
  className = '',
  height,
  width,
  borderRadius,
  display = 'block',
  isText = false,
}: SkeletonProps) => {
  let parsedCount = 1

  if (count < 1) {
    parsedCount = 1
  } else {
    parsedCount = count
  }

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

  const renderSkeleton = (
    <div
      className={`react-skele-base-skeleton-styles react-skele-base-border-radius${
        isText ? '-text' : ''
      }${className ? ` ${className}` : ''}`}
      style={style}
    >
      {isText ? <>&zwnj;</> : children}
    </div>
  )

  return new Array(parsedCount)
    .fill('')
    .map((_, index) => (
      <React.Fragment key={index}>{renderSkeleton}</React.Fragment>
    ))
}

export default Skeleton
