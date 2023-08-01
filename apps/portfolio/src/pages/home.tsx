import { motion, useScroll, scroll } from 'framer-motion'
import '../styles/main.css'
import { Hero, Expertise, Works } from './components'
import { Row, Stack } from '@portfolio/ui-components'
import { useWorksStrore } from '@portfolio/stores/worksStrore'
import { useRef } from 'react'
// add glass
export const Home = () => {
  const inViewHeader = useWorksStrore(state => state.inViewHeader)
  const section = useWorksStrore(state => state.section)
  const setSection = useWorksStrore(state => state.setSection)
  const { scrollXProgress, scrollY } = useScroll()

  const refHero = useRef<HTMLDivElement>(null)
  const refSections = useRef<HTMLDivElement>(null)

  scroll(progress => {
    const elmnt = document.getElementById('exp')

    if (progress.y.current > 100 && elmnt) {
      console.log('elmnt', elmnt)
      elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      })
    }
  })

  return (
    <>
      <div className="back fixed opacity-10   w-full h-full pointer-events-none " />
      <div className="max-w-[1218px] mx-auto">
        <Stack gap={200}>
          {!inViewHeader && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'circInOut' }}
              className="fixed top-0 flex justify-between w-[1220px] h-20 z-50 opacity-0"
            >
              <Row
                gap={36}
                templateColumns="6fr 5fr"
                alignItems="center"
                className="relative w-full mx-auto bg-[#1e1e1e]"
              >
                <motion.h1
                  layoutId="heading-title"
                  layout="position"
                  className="z-10 text-3xl font-bold select-none"
                >
                  Levende
                </motion.h1>
                <motion.h2
                  layoutId="heading-subtitle"
                  layout="position"
                  className="z-10 text-xl select-none font-extralight"
                >
                  Full Stack JavaScript
                  <span role="img" aria-label="robot">
                    🤖
                  </span>
                  . React, Vue, TypeScript, Node.
                </motion.h2>
              </Row>
            </motion.div>
          )}
          <Hero />
          <Expertise />
          <Works />
        </Stack>
      </div>
      {/* <Canvas shadows camera={{ position: [0, 3, 10], fov: 30 }}>
        <color attach="background" args={['#1e1e1e']} />
        <ScrollControls pages={5} damping={0.2}>
          <Sphere />
          <Scroll html>YOOO</Scroll>
        </ScrollControls>
      </Canvas> */}
    </>
  )
}

export default Home
