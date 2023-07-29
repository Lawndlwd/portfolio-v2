import { Box, Row, Stack } from '@portfolio/ui-components'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { FaReact } from 'react-icons/fa'
import { GoBug } from 'react-icons/go'
import code from '@portfolio/assets/code.png'
import { FiGitMerge } from 'react-icons/fi'

export const Expertise = () => {
  const extendedRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0.17, 0.35, 0.75, 0.99, 1],
    [0, 0.8, 0.9, 1, 0.9],
  )
  const scale = useTransform(scrollYProgress, [0.01, 0.35, 0.75], [0.4, 0.9, 1])

  return (
    <section className="relative mt-[58vh] h-[120vh]">
      <div className="">
        <motion.div
          // style={{ scale, opacity }}
          ref={extendedRef}
          className="w-full h-full"
        >
          <Row templateColumns="1fr 1fr 1fr">
            <Box className="px-6 py-8 border-2 border-white">
              <Stack gap={48}>
                <Row
                  className="justify-center"
                  templateColumns="1fr 2fr 2fr 1fr"
                  alignItems="center"
                >
                  <div />
                  <FiGitMerge size={94} />
                  <p className="relative text-3xl">
                    <span className="megenta">Activity</span> <br /> Data
                  </p>
                  <div />
                </Row>
                <Row
                  className="justify-center divide-x"
                  templateColumns="1fr 2fr"
                  alignItems="center"
                >
                  <div />
                  <p className="relative px-5 text-xl">
                    Experienced in both functional and OOP: Dart, Python, Java,
                    JavaScript, TypeScript.
                  </p>
                </Row>
              </Stack>
            </Box>
            <Box className="px-6 py-8 border-2 border-white">
              <Stack gap={48}>
                <Row
                  className="justify-center"
                  templateColumns="1fr 2fr 2fr 1fr"
                  alignItems="center"
                >
                  <div />
                  <GoBug size={94} />
                  <p className="relative text-3xl">
                    <span className="blue">Activity</span> <br /> Data
                  </p>
                  <div />
                </Row>
                <Row
                  className="justify-center divide-x"
                  templateColumns="1fr 2fr"
                  alignItems="center"
                >
                  <div />
                  <p className="relative px-5 text-xl">
                    Experienced in both functional and OOP: Dart, Python, Java,
                    JavaScript, TypeScript.
                  </p>
                </Row>
              </Stack>
            </Box>
            <Box className="px-6 py-8 border-2 border-white">
              <Stack gap={48}>
                <Row
                  className="justify-center"
                  templateColumns="1fr 2fr 2fr 1fr"
                  alignItems="center"
                >
                  <div />
                  <FaReact size={94} />
                  <p className="relative text-3xl">
                    <span className="yellow">Activity</span> <br /> Data
                  </p>
                  <div />
                </Row>
                <Row
                  className="justify-center divide-x"
                  templateColumns="1fr 2fr"
                  alignItems="center"
                >
                  <div />
                  <p className="relative px-5 text-xl">
                    Experienced in both functional and OOP: Dart, Python, Java,
                    JavaScript, TypeScript.
                  </p>
                </Row>
              </Stack>
            </Box>
          </Row>
          <div className="w-[600px] mx-auto mt-[-4vh] opacity-30">
            <img src={code} alt="code" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
