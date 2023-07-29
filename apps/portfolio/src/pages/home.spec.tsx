import { render } from '@portfolio/helpers/test/test-utils'

import Home from './home'

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />)
    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Home />)
    expect(getByText(/home.title/gi)).toBeTruthy()
  })
})
