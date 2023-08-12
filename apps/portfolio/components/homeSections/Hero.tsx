import { stylesWithCssVar } from '@/helpers/motion'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import levende from '@/assets/levende2.webp'
import { useScopedI18n } from '@/locales'
import Image from 'next/image'
import { useMouseStore } from '@/store/worksStrore'
import { onHover } from '@/helpers/onHover'

const MotionImage = motion(Image)
export default function Hero({ mask = false }: { mask?: boolean }) {
  const scopedT = mask ? useScopedI18n('mask.home') : useScopedI18n('home')
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })
  const textX = useTransform(scrollYProgress, [0.44, 0.8], ['100%', '-200%'])
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [1, 0.7])
  const imageX = useTransform(scrollYProgress, [0.5, 0.8], ['-10%', '-200%'])

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.5, 0.51, 0.82],
    [1, 1, 0],
  )

  const setHovered = useMouseStore(state => state.setHovered)
  const hoverd = useMouseStore(state => state.hoverd)

  return (
    <motion.section
      style={stylesWithCssVar({
        '--scale': scale,
        '--opacity-border': opacityBorder,
      })}
      ref={targetRef}
      className="flex h-[200vh] items-start justify-start"
    >
      <MotionImage
        alt="levende"
        src={levende}
        style={{ x: imageX, y: '-50%' }}
        className="sticky top-1/2  h-[83rem]    w-[83rem] -translate-y-1/2 bg-contain bg-no-repeat mix-blend-luminosity grayscale  filter"
      />

      <div className="before:border-secondary dark:before:border-primary sticky left-1/2 top-1/2 min-h-[40rem] min-w-[40rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem]  before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: '-50%' }}
          {...onHover({ mask, setHovered })}
          className="whitepspace-nowrap   min-w-screen text-foreground absolute  left-[calc(-50vw+25rem)] top-1/2 text-[23rem] font-bold"
        >
          {scopedT('hero.name')}
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: '-50%' }}
          {...onHover({ mask, setHovered })}
          className="whitepspace-nowrap min-w-screen absolute left-[calc(-50vw+25rem)] top-1/2 z-[11] text-[23rem] font-bold text-transparent [-webkit-text-stroke:1px_hsl(var(--secondary))] dark:[-webkit-text-stroke:1px_hsl(var(--primary))] "
        >
          {scopedT('hero.name')}
        </motion.p>
        <span className="bg-background absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[70vw] origin-left scale-[var(--scale)]    opacity-[var(--opacity-border)]" />
        <span className="border-secondary dark:border-primary absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[1] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem]  opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  )
}
