import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/useIsMobile'

type WorksTitleProps = {
  children: ReactNode
  id: string
  date: string
}
export const WorksTitle = ({ children, id, date }: WorksTitleProps) => {
  const isMobile = useIsMobile()

  return (
    <motion.div className="cursor-pointer" key={id}>
      <p
        className={cn(
          'mt-6 transition-colors gap-2 flex items-end',
          isMobile
            ? 'font-bold text-[2.6rem]'
            : 'superBold text-transparent [-webkit-text-stroke:5px_hsl(var(--foreground))] hover:text-white'
        )}
      >
        {children}
        <span className="md:text-3xl text-[1rem] font-mono font-thin">
          {date}
        </span>
      </p>
    </motion.div>
  )
}
