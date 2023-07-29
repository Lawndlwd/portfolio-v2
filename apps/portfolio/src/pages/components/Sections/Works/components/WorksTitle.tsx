import { useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { useWorksStrore } from '@portfolio/stores/worksStrore'

type WorksTitleProps = {
  children: ReactNode
  id: string
}
export const WorksTitle = ({ children, id }: WorksTitleProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, {
    margin: '-50% 0px -50% 0px',
  })
  const setInView = useWorksStrore(state => state.setInViewWorks)
  const inViewWorks = useWorksStrore(state => state.inViewWorks)

  useEffect(() => {
    if (inView) setInView(id)
    if (!inView && inViewWorks === id) setInView(null)
  }, [id, inView, inViewWorks, setInView])

  return (
    <p
      ref={ref}
      key={id}
      className={classnames(
        'text-5xl py-20 font-bold transition-colors',
        inView ? 'text-white' : 'text-gray-500',
      )}
    >
      {children}
    </p>
  )
}
