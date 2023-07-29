import styled from '@emotion/styled'
import { Stack } from '../layout'
import { ReactNode, forwardRef, ForwardedRef } from 'react'

const BoxStyled = styled(Stack)`
  width: 100%;
  height: 100%;
`

type BoxProps = {
  children?: ReactNode
  className?: string
  ref: React.Ref<HTMLDivElement> | undefined
} & React.ComponentProps<'div'>

export const Box = forwardRef(
  (
    { children, className }: BoxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): React.JSX.Element => {
    return (
      <BoxStyled ref={ref} className={className}>
        {children}
      </BoxStyled>
    )
  },
)
