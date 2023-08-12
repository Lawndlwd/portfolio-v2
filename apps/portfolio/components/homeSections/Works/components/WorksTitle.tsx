import { useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import { useWorksStrore } from '@/store/worksStrore'
import { cn } from '@/lib/utils'

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
      className={cn(
        'text-5xl py-28 font-sans  font-bold transition-colors work-title',
        inView ? 'text-foreground' : 'text-muted  ',
      )}
    >
      {children}
    </p>
  )
}
