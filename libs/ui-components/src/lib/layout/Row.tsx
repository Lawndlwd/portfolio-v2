import styled from '@emotion/styled'
import { MotionProps, motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

type StyledRowProps = Pick<RowProps, 'gap' | 'templateColumns' | 'alignItems'> &
  MotionProps
export const StyledRow = styled(motion.div, {
  shouldForwardProp: prop =>
    !['templateColumns', 'gap', 'alignItems'].includes(prop),
})<StyledRowProps>`
  display: grid;
  ${({ gap, alignItems = 'normal', templateColumns }) => `
    grid-template-columns: ${templateColumns};
    ${gap ? `gap: ${gap}px;` : ''}
    align-items: ${alignItems};
  `}
`

type RowProps = {
  className?: string
  'data-testid'?: string
  children: ReactNode
  templateColumns: string
  gap?: number
  alignItems?: CSSProperties['alignItems']
}

export const Row = ({
  className,
  'data-testid': dataTestId,
  children,
  templateColumns,
  alignItems,
  gap,
}: RowProps) => (
  <StyledRow
    className={className}
    data-testid={dataTestId}
    gap={gap}
    templateColumns={templateColumns}
    alignItems={alignItems}
  >
    {children}
  </StyledRow>
)
