import styled from '@emotion/styled'
import { MotionProps, motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

type StackProps = {
  gap?: number
  direction?: 'row' | 'column'
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  wrap?: boolean | CSSProperties['flexWrap']
  className?: string
  children: ReactNode
  'data-testid'?: string
} & MotionProps

export const Stack = styled(motion.div, {
  shouldForwardProp: prop =>
    !['gap', 'direction', 'alignItems', 'justifyContent', 'wrap'].includes(
      prop,
    ),
})<StackProps>`
  display: flex;

  ${({
    gap = 0,
    direction = 'column',
    alignItems = 'normal',
    justifyContent = 'normal',
    wrap = 'nowrap',
  }) => `
    gap: ${gap}px;
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${typeof wrap === 'boolean' ? 'wrap' : wrap};
  `}
`
