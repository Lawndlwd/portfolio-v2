import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type WorksTitleProps = {
  children: ReactNode
  id: string
  date: string
}
export const WorksTitle = ({ children, id, date }: WorksTitleProps) => {
  return (
    <motion.div className="cursor-pointer" key={id}>
      <p
        className={cn(
          'superBold mt-6 transition-colors ',
          'text-transparent [-webkit-text-stroke:5px_hsl(var(--foreground))] hover:text-white'
        )}
      >
        {children}
        <span className="text-3xl font-mono font-thin">{date}</span>
      </p>
    </motion.div>
  )
}
