// import { Hero, Expertise, Works, Nav } from './components'
// import { Stack } from '@portfolio/ui-components'
import { motion as m } from 'framer-motion'
import Skills from '@/components/homeSections/skills'
import Hero from '@/components/homeSections/Hero'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Works } from '@/components/homeSections/Works'
import { useMouse } from '@/hooks/useMouse'
import { useState } from 'react'
import { useMouseStore } from '@/store/worksStrore'

export default function Home() {
  const { clientX, clientY } = useMouse()
  const hoverd = useMouseStore(state => state.hoverd)
  const mouseSize = hoverd ? 400 : 40

  return (
    <div className="bg-background relative start-0 z-10 w-full overflow-x-clip">
      <ThemeToggle />
      <m.div
        className="mask z-10  h-full w-full"
        animate={{
          WebkitMaskSize: `${mouseSize}px`,
          WebkitMaskPosition: `${clientX - mouseSize / 2}px ${
            clientY - mouseSize / 2
          }px`,
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
      >
        <Hero mask />
        <Skills mask />
        {/* <Works mask /> */}
      </m.div>
      <div className="  h-full w-full">
        <Hero />
        <Skills />
        <Works />
      </div>
      {/* <Works /> */}
      {/* <Nav /> */}
      {/* <Hero /> */}
      {/* <Expertise />
      <Works /> */}
    </div>
  )
}
