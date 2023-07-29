import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { PageWrapper } from './jestHelpers'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: PageWrapper, ...options })

// eslint-disable-next-line no-restricted-syntax
export * from '@testing-library/react'
export { customRender as render }
