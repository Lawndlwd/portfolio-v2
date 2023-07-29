import {
  type Variants,
  motion,
  useAnimation,
  useTransform,
  useScroll,
} from 'framer-motion'
import { FiCode, FiGlobe, FiSend, FiPenTool } from 'react-icons/fi'
import { useEffect, useRef } from 'react'
import { Stack, Row } from '@portfolio/ui-components'
import { NavItem } from './components'

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

export const Nav = () => {
  const extendedRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  })
  const scale = useTransform(scrollYProgress, [0.74, 0.75, 0.8], [1, 0.7, 0])
  const x = useTransform(
    scrollYProgress,
    [0.57, 0.77, 0.85],
    ['0vw', '-70vw', '-100vw'],
  )
  const rightX = useTransform(
    scrollYProgress,
    [0.69, 0.77, 1],
    ['0vw', '70vw', '100vw'],
  )

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
    <section className="relative z-10 mt-[-65vh] h-[50vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[120vh] w-full">
        <div className="sticky top-[10vh]">
          <Row
            templateColumns="1fr 1fr "
            gap={8}
            className="relative w-full h-full"
          >
            <Row templateColumns="1fr" gap={8}>
              <motion.div style={{ x, scale }} className="z-10 min-h-full">
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
                    className="absolute top-0 w-40 h-40"
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
                        className="absolute w-10 h-10 top-8 left-8 rounded-s-lg bg-slate-500"
                      />
                      <motion.div
                        animate={controls}
                        variants={variants('#e6e606')}
                        className="absolute w-10 h-10 rounded-full top-8 right-8 bg-slate-500"
                      />
                      <svg
                        className="absolute w-12 h-16 bottom-8 left-12"
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
            <Stack gap={8} style={{ x: rightX }}>
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
        </div>
      </div>
    </section>
  )
}
