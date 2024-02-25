// import { Box, Row, Stack } from '@portfolio/ui-components'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

import code from '@/assets/code.png'
import { Separator } from '@/components'
import { useIsMobile } from '@/hooks/useIsMobile'

export const Skills = () => {
  const extendedRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0.17, 0.35, 0.75, 0.99, 1],
    [0, 0.8, 0.9, 1, 0.9]
  )
  const isMobile = useIsMobile()

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.75],
    [isMobile ? 0.7 : 0.4, 0.9, 1]
  )

  return (
    <section id="exp" className="relative h-[800px]">
      <div className="">
        <h1 className="md:text-7xl text-3xl font-black md:mb-24 max-w-[700px] text-center">
          Expertises
        </h1>

        <motion.div
          style={{ scale, opacity }}
          ref={extendedRef}
          className="w-full h-full"
        >
          <div className="grid md:grid-flow-col grid-flow-row  gap-5">
            <div className="flex flex-col gap-10 p-10">
              <div className="grid grid-flow-col">
                <div />
                {/* <GoBug size={94} /> */}
                <p className="relative text-3xl mix-blend-difference 	">
                  <span className="blue">Frontend </span> <br /> Technologies
                </p>
                <div />
              </div>
              <div className="grid grid-flow-col">
                <div />
                <p className="relative px-5 text-xl flex flex-col gap-5">
                  <p> Expertise in React, Vue.js, and Next.js</p>
                  <p>Proficient in TypeScript for type-safe development</p>
                  <p>
                    Skilled in frontend testing using libraries like Jest,
                    Playwright, and Vitest
                  </p>
                </p>
              </div>
            </div>
            <Separator
              className="mb-10 "
              orientation={isMobile ? 'horizontal' : 'vertical'}
            />
            <div className="flex flex-col gap-10 p-10">
              <div className="grid grid-flow-col">
                <div />
                {/* <FiGitMerge size={94} /> */}
                <p className="relative text-3xl mix-blend-difference z-10	">
                  <span className="megenta">Design & </span> <br /> User
                  Experience
                </p>
                <div />
              </div>
              <div className="grid grid-flow-col">
                <div />
                <p className="relative px-5 text-xl flex flex-col gap-5">
                  <p>Strong eye for design and user experience</p>
                  <p>Familiarity with UI/UX principles</p>
                  <p>
                    Ability to create visually appealing and intuitive
                    interfaces
                  </p>
                </p>
              </div>
            </div>
            <Separator
              className="mb-10 "
              orientation={isMobile ? 'horizontal' : 'vertical'}
            />

            <div className="flex flex-col gap-10 p-10">
              <div className="grid grid-flow-col">
                <div />
                {/* <FaReact size={94} /> */}
                <p className="relative text-3xl mix-blend-difference z-10	">
                  <span className="yellow">Deployment &</span> <br /> Version
                  Control
                </p>
                <div />
              </div>
              <div className="grid grid-flow-col">
                <div />
                <p className="relative px-5 text-xl flex flex-col gap-5">
                  <p>Experience in Continuous Deployment (CD) using GitLab</p>
                  <p>Proficiency in version control with Git</p>
                  <p>
                    Knowledgeable insetting up automated deployment pipelines
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className=" invisible md:visible w-[900px] mx-auto mt-[-20px] opacity-70  ">
            <img src={code} alt="code" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
