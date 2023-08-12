import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { onHover } from '@/helpers/onHover'
import { useScopedI18n } from '@/locales'
import Image from 'next/image'
import { useMouseStore } from '@/store/worksStrore'

const MotionImage = motion(Image)
export default function Skills({ mask = false }: { mask?: boolean }) {
  const scopedT = mask ? useScopedI18n('mask.home') : useScopedI18n('home')
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.09, 0.3, 0.35],
    [0, 1, 1, 0],
  )

  const finalTextScale = useTransform(scrollYProgress, [0.33, 0.38], [1, 0])
  const finalTextOpacitys = useTransform(
    scrollYProgress,
    [0.35, 0.42, 0.65, 0.66],
    [0, 1, 1, 0],
  )

  const finalTextScales = useTransform(scrollYProgress, [0.65, 0.69], [1, 0])
  const finalTextOpacityss = useTransform(
    scrollYProgress,
    [0.66, 0.73, 0.98, 0.99],
    [0, 1, 1, 0],
  )

  const finalTextScaless = useTransform(scrollYProgress, [0.92, 0.99], [1, 0.7])
  const setHovered = useMouseStore(state => state.setHovered)

  return (
    <motion.section ref={targetRef} className=" h-[300vh] w-screen ">
      <div className="sticky top-1/2  flex  h-full w-full  -translate-y-1/2 flex-col items-center justify-center ">
        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: '-50%',
            x: '-50%',
          }}
          {...onHover({ mask, setHovered })}
          className="text-foreground absolute left-1/2 top-1/2  text-center text-[8.8rem] leading-tight"
        >
          {scopedT('expertise.skill.front.title')}
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacitys,
            scale: finalTextScales,
            y: '-50%',
            x: '-50%',
          }}
          {...onHover({ mask, setHovered })}
          className="text-foreground absolute left-1/2 top-1/2  text-center text-[8.8rem] leading-tight"
        >
          {scopedT('expertise.skill.back.title')}
        </motion.p>
        <motion.p
          style={{
            opacity: finalTextOpacityss,
            scale: finalTextScaless,
            y: '-50%',
            x: '-50%',
          }}
          {...onHover({ mask, setHovered })}
          className="text-foreground absolute left-1/2 top-1/2  text-center text-[8.8rem] leading-tight"
        >
          {scopedT('expertise.skill.ci.title')}
        </motion.p>
      </div>
    </motion.section>
  )
}
