import { ReactNode } from 'react'
import classnames from 'classnames'
import { useWorksStrore } from '@portfolio/stores/worksStrore'

type WorksCardsProps = {
  children: ReactNode
  id: string
  gradient: string
}

export const WorksCards = ({ children, id, gradient }: WorksCardsProps) => {
  const inViewWorks = useWorksStrore(state => state.inViewWorks)

  return (
    <div
      className={classnames(
        'absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity',
        gradient,
        inViewWorks === id ? 'opacity-100' : 'opacity-0',
      )}
    >
      {children}
    </div>
  )
}
