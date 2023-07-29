import { motion } from 'framer-motion'
import '../styles/main.css'
import { Hero, Expertise, Works, Nav } from './components'
import { Row, Stack } from '@portfolio/ui-components'
import { useWorksStrore } from '@portfolio/stores/worksStrore'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls, Sphere } from '@react-three/drei'

export const Home = () => {
  const inViewHeader = useWorksStrore(state => state.inViewHeader)

  return (
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 30 }}>
      <color attach="background" args={['#272727']} />
      <ScrollControls pages={5} damping={0.2}>
        <Sphere />
        <Scroll html>
          <Stack gap={40}>
            <div>
              {!inViewHeader && (
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'circInOut' }}
                  className="fixed top-0 flex justify-center w-[1200px] h-20 z-10 opacity-0"
                >
                  <Row
                    gap={36}
                    templateColumns="2fr 3fr 4fr"
                    alignItems="center"
                    className="w-full mx-auto bg-[#1e1e1e]"
                  >
                    <motion.h1
                      layoutId="heading-title"
                      layout="position"
                      className="z-10 text-3xl font-bold select-none"
                    >
                      Levende
                    </motion.h1>
                    <Row templateColumns="1fr 1fr 1fr 1fr" gap={8}>
                      <motion.div
                        layoutId="heading-About"
                        layout="position"
                        layoutDependency={{ duration: 3 }}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer border-sky-600 text-sky-300"
                      >
                        about
                      </motion.div>
                      <motion.div
                        layoutId="heading-Works"
                        layout="size"
                        className="px-4 py-2 border-2 rounded-full cursor-pointer border-emerald-600 text-emerald-300"
                      >
                        works
                      </motion.div>
                      <motion.div
                        layoutId="heading-Blog"
                        layout="preserve-aspect"
                        className="px-4 py-2 text-indigo-300 border-2 border-indigo-600 rounded-full cursor-pointer"
                      >
                        Blog
                      </motion.div>
                      <motion.div
                        layoutId="heading-Contact"
                        layout="preserve-aspect"
                        className="px-4 py-2 text-yellow-200 border-2 border-yellow-600 rounded-full cursor-pointer"
                      >
                        contact
                      </motion.div>
                    </Row>
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
              {/* <Nav /> */}
              <Expertise />
              <Works />
              <div className="h-screen">new</div>
            </div>
          </Stack>
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

export default Home
