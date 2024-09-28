import React from 'react'
import { SkeletonProps, SkeletonStyleProps } from './SkeletonProps'
import './skeleton.css'

const Skeleton = ({
  children = null,
  el = 'div',
  isText = false,
  count = 1,
  backgroundColor = '#f4f4f4',
  highlightColor = '#e8e8e8',
  className = '',
  height,
  width,
  borderRadius,
  display = 'block',
  style = {},
}: SkeletonProps) => {
  let parsedCount = 1

  if (count < 1) {
    parsedCount = 1
  } else {
    parsedCount = count
  }

  let renderedStyle: SkeletonStyleProps = {
    backgroundColor: `${backgroundColor}`,
    backgroundImage: `linear-gradient(90deg, ${backgroundColor}, ${highlightColor}, ${backgroundColor})`,
  }

  if (height) {
    renderedStyle.height = height
  }

  if (width) {
    renderedStyle.width = width
  }

  if (borderRadius) {
    renderedStyle.borderRadius = borderRadius
  }

  if (display) {
    renderedStyle.display = display
  }

  if (style) {
    renderedStyle = { ...renderedStyle, ...style }
  }

  const Tag = el as keyof JSX.IntrinsicElements

  const renderSkeleton = (
    <Tag
      className={`react-skele-base-skeleton-styles react-skele-base-border-radius${
        isText ? '-text' : ''
      }${className ? ` ${className}` : ''}`}
      style={renderedStyle}
    >
      {isText ? <>&zwnj;</> : children}
    </Tag>
  )

  return (
    <>
      {new Array(parsedCount).fill('').map((_, index) => (
        <React.Fragment key={index}>{renderSkeleton}</React.Fragment>
      ))}
    </>
  )
}

export default Skeleton
