import levende from '@portfolio/assets/levende2.png'
import { useEffect, useRef } from 'react'
import {
  Variants,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Row, Stack } from '@portfolio/ui-components'
import { useWorksStrore } from '@portfolio/stores/worksStrore'
import styled from '@emotion/styled'
import { NavItem } from './components'
import { FiCode, FiGlobe, FiPenTool, FiSend } from 'react-icons/fi'

const ImageStyled = styled.div`
  background-image: url(${levende});
`

const variants: (background?: string, fill?: boolean) => Variants = (
  background?: string,
  fill?: boolean,
) => ({
  hover: {
    scale: [1.1, 1],
    rotate: 360,
    background: fill ? 'transparent' : background,
    fill: fill ? background : undefined,
    transition: {
      duration: 0.3,
      ease: 'linear',
      rotate: { duration: 5, repeat: Infinity },
    },
  },
  hoverLeave: {
    scale: 1,
    rotate: 360,
    background: fill ? 'transparent' : 'rgb(100 116 139)',
    fill: fill ? 'rgb(100 116 139)' : undefined,
    transition: {
      duration: 0.4,
      ease: 'linear',
      rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
  },
})
export const Hero = () => {
  const inViewHeader = useWorksStrore(state => state.inViewHeader)
  const setInViewHeader = useWorksStrore(state => state.setInViewHeader)
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0.4, 0.59], [1, 0])
  const scale = useTransform(scrollYProgress, [0.47, 0.6], [1, 0])
  const x = useTransform(scrollYProgress, [0.4, 0.6], ['0vw', '-70vw'])
  const navScale = useTransform(
    scrollYProgress,
    [0.64, 0.75, 0.89],
    [1, 0.7, 0],
  )
  const leftX = useTransform(
    scrollYProgress,
    [0.45, 0.67, 0.79],
    ['0vw', '-70vw', '-100vw'],
  )
  const rightX = useTransform(
    scrollYProgress,
    [0.55, 0.67, 0.86],
    ['0vw', '70vw', '100vw'],
  )
  const inView = useInView(targetRef, {
    margin: '-29% 0px -61% 0px',
  })

  useEffect(() => {
    if (inView) setInViewHeader(true)
    if (!inView) setInViewHeader(false)
  }, [inView, setInViewHeader])

  const controls = useAnimation()
  useEffect(() => {
    if (controls) controls.start('hoverLeave')
  }, [controls])

  function handleMouseEnterControls() {
    controls.start('hover')
  }

  function handleMouseLeaveControls() {
    controls.start('hoverLeave')
  }
  return (
    <Stack>
      <motion.div ref={targetRef} style={{ opacity, scale }}>
        <Row
          templateColumns="5fr 7fr"
          className="relative h-[500px] overflow-hidden text-white"
        >
          <motion.div className="relative h-full w-full" style={{ x, scale }}>
            <div className="absolute h-[500px] w-1/2  bg-indigo-200 rounded-l-3xl" />
            <ImageStyled className="h-full w-full bg-no-repeat mix-blend-luminosity bg-contain" />
          </motion.div>
          {inViewHeader && (
            <div className="relative h-full w-full">
              <motion.div className="fixed justify-center w-full left-3/5  ">
                <Stack gap={48} className="text-left my-20 ">
                  <motion.h1
                    layoutId="heading-title"
                    layout="position"
                    className="font-bold select-none levende text-8xl"
                  >
                    Levende
                  </motion.h1>
                  <motion.h2
                    layoutId="heading-subtitle"
                    layout="position"
                    className="text-3xl select-none font-extralight"
                  >
                    Full Stack JavaScript{' '}
                    <span role="img" aria-label="robot">
                      🤖
                    </span>
                    . React, Vue, TypeScript, Node.
                  </motion.h2>
                </Stack>
              </motion.div>
            </div>
          )}
        </Row>
      </motion.div>

      <Row templateColumns="1fr 1fr" gap={8} className="w-full  h-[300px]">
        <Row templateColumns="1fr" gap={8}>
          <motion.div className="z-10" style={{ x: leftX, scale: navScale }}>
            <NavItem
              className="relative border-8 cursor-pointer border-sky-600 text-sky-300"
              title="About"
              icon={<FiGlobe size={36} />}
              subtitle="Who I'm, what i do"
              handleMouseEnter={handleMouseEnterControls}
              handleMouseLeave={handleMouseLeaveControls}
            >
              <motion.div
                animate={{ rotate: 360 }}
                className="absolute top-8 w-52 h-52 "
                transition={{
                  ease: 'linear',
                  duration: 7,
                  repeat: Infinity,
                }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    variants={variants('#1f46f0')}
                    animate={controls}
                    className="absolute w-16 h-16 top-4 left-4 rounded-s-lg bg-slate-500"
                  />
                  <motion.div
                    animate={controls}
                    variants={variants('#e6e606')}
                    className="absolute w-16 h-16 rounded-full top-4 right-4 bg-slate-500"
                  />
                  <svg
                    className="absolute w-20 h-24 bottom-8 left-12"
                    viewBox="0 0 274 202"
                  >
                    <motion.path
                      animate={controls}
                      variants={variants('#743de1', true)}
                      d="M137 0L273.832 201.75H0.167984L137 0Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </div>
              </motion.div>
            </NavItem>
          </motion.div>
        </Row>
        <Stack gap={8} style={{ x: rightX, scale: navScale }}>
          <NavItem
            className="border-8 cursor-pointer border-emerald-600 text-emerald-300"
            title="Works"
            icon={<FiCode size={36} />}
          />
          <Row templateColumns="1fr 1fr" gap={8}>
            <NavItem
              className="text-indigo-300 border-8 border-indigo-600 cursor-pointer"
              title="Blog"
              icon={<FiPenTool size={36} />}
            />
            <NavItem
              className="text-yellow-200 border-8 border-yellow-600 cursor-pointer "
              title="Contact"
              icon={<FiSend size={36} />}
            />
          </Row>
        </Stack>
      </Row>
    </Stack>
  )
}
