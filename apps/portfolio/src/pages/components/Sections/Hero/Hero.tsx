// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore no type exist for it
import baffle from 'baffle'
import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Stack } from '@portfolio/ui-components'
import { useWorksStrore } from '@portfolio/stores/worksStrore'

export const Hero = () => {
  const inViewHeader = useWorksStrore(state => state.inViewHeader)
  const setInViewHeader = useWorksStrore(state => state.setInViewHeader)

  useEffect(() => {
    const target = baffle('.levende')
    target.set({
      characters: '[{</>[{}].;/>}]',
      speed: 120,
    })
    target.start()
    target.reveal(1000, 100)
  })
  const targetRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const updateMousePosition = (ev: MouseEvent) => {
  //     if (!targetRef.current) return
  //     const { clientX, clientY } = ev
  //     targetRef.current.style.setProperty('--x', `${clientX}px`)
  //     targetRef.current.style.setProperty('--y', `${clientY}px`)
  //   }

  //   window.addEventListener('mousemove', updateMousePosition)

  //   return () => {
  //     window.removeEventListener('mousemove', updateMousePosition)
  //   }
  // }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0])

  const inView = useInView(targetRef, {
    margin: '-61% 0px -39% 0px',
  })
  useEffect(() => {
    if (inView) setInViewHeader(true)
    if (!inView) setInViewHeader(false)
  }, [inView, setInViewHeader])

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      // className="relative w-full h-screen overflow-hidden text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {inViewHeader && (
        <motion.div className="fixed justify-center w-full h-screen -translate-x-1/2 left-1/2 top-10 ">
          <Stack
            gap={18}
            justifyContent="center"
            alignItems="center"
            className="mx-auto my-20 w-96"
          >
            <motion.h1
              layoutId="heading-title"
              layout="position"
              className="z-10 font-bold select-none levende text-7xl"
            >
              Levende
            </motion.h1>
            <motion.h2
              layoutId="heading-subtitle"
              layout="position"
              className="z-10 text-2xl select-none font-extralight"
            >
              Full Stack JavaScript{' '}
              <span role="img" aria-label="robot">
                🤖
              </span>
              . React, Vue, TypeScript, Node.
            </motion.h2>
          </Stack>
        </motion.div>
      )}
    </motion.div>
  )
}
