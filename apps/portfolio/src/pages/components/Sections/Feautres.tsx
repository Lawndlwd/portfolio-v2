import { Box, Container, Stack, Row } from '@portfolio/ui-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type FeautresBoxProps = {
  text: string
  discription: string
  leftStyle: any
  rightStyle: any
}
const MotionBox = motion(Box)

export const FeautresBox = ({
  text,
  discription,
  leftStyle,
  rightStyle,
}: FeautresBoxProps) => {
  return (
    <Stack direction="row" className="relative ">
      <MotionBox
        style={{ x: leftStyle }}
        transition={{ ease: 'linear' }}
        className="bg-red-400 min-h-[199px] p-0"
      >
        {text}
      </MotionBox>
      <MotionBox
        style={{ x: rightStyle }}
        transition={{ ease: 'linear' }}
        className="bg-yellow-400  min-h-[199px] p-0"
      >
        {discription}
      </MotionBox>
    </Stack>
  )
}

export const Feautres = () => {
  const extendedRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  })
  const x = useTransform(
    scrollYProgress,
    [0.0, 0.15, 1],
    ['25vw', '5vw', '5vw'],
  )
  const xl = useTransform(
    scrollYProgress,
    [0.05, 0.15, 1],
    ['-25vw', '-5vw', '-5vw'],
  )
  return (
    <section className="relative">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <Container>
          <Stack gap={12} className="h-full w-full m-0">
            <FeautresBox
              text="dsfasd"
              discription="dsadsfasd"
              leftStyle={x}
              rightStyle={xl}
            />
            <FeautresBox
              text="jasdhjfnbsdhjfa"
              discription="dksjfnajsdnfaj"
              leftStyle={x}
              rightStyle={xl}
            />
            <FeautresBox
              text="akjdsnfjasndf"
              discription="akjdsnfjandsfnahjsdhf"
              leftStyle={x}
              rightStyle={xl}
            />
          </Stack>
        </Container>
      </div>
    </section>
  )
}
