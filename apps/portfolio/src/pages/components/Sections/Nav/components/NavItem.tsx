import styled from '@emotion/styled'
import { FiCode } from 'react-icons/fi'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { MotionProps, Variants, motion, useAnimation } from 'framer-motion'
import { Stack } from '@portfolio/ui-components'

const BoxStyled = styled(Stack)`
  width: 100%;
  max-height: 250px;
  height: 100%;
  padding: 12px;
  position: relative;
  border-radius: 7px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-size: 0.9em;
  font-weight: 700;
  cursor: pointer;
`

type NavProps = {
  title?: string
  icon?: React.ReactNode
  subtitle?: string
  children?: ReactNode
  handleMouseEnter?: () => void
  handleMouseLeave?: () => void
} & React.ComponentProps<'div'> &
  MotionProps
const variants: (widthSubtitleContainer: number) => Variants = (
  widthSubtitleContainer: number,
) => ({
  hover: {
    x: [0, -widthSubtitleContainer * 1.6],
    scale: [0.9, 1],
    opacity: 1,
    transition: {
      duration: 1,
      opacity: { duration: 0.3 },
      x: { duration: 7, repeat: Infinity },
      ease: 'linear',
    },
  },
  hoverLeave: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
})

export const NavItem = ({
  title = 'test',
  icon = <FiCode />,
  subtitle,
  children,
  className,
  handleMouseEnter,
  handleMouseLeave,
  onClick,
}: NavProps) => {
  const subtitleContainerRef = useRef<HTMLDivElement | null>(null)
  const [widthSubtitleContainer, setWidthSubtitleContainer] = useState(0)
  const controls = useAnimation()
  function handleMouseEnterControls() {
    controls.start('hover')
  }

  function handleMouseLeaveControls() {
    controls.start('hoverLeave')
  }

  useEffect(() => {
    if (subtitleContainerRef.current) {
      setWidthSubtitleContainer(subtitleContainerRef.current.offsetWidth)
    }
  }, [])

  return (
    <BoxStyled
      layoutId={`heading-${title}`}
      layout="position"
      className={`${className}`}
      ref={subtitleContainerRef}
      whileHover={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
        ease: 'linear',
      }}
      onMouseEnter={() => {
        handleMouseEnter?.()
        handleMouseEnterControls()
      }}
      onClick={onClick}
      onMouseLeave={() => {
        handleMouseLeave?.()
        handleMouseLeaveControls()
      }}
    >
      {subtitle ? (
        <div className="absolute flex items-center justify-center w-full h-full overflow-hidden whitespace-nowrap">
          <motion.div className="z-10 flex items-start justify-start h-20 ">
            <motion.p
              animate={controls}
              variants={variants(widthSubtitleContainer)}
              className="text-6xl opacity-0"
            >
              {subtitle}.{' '}
            </motion.p>
            <motion.p
              animate={controls}
              variants={variants(widthSubtitleContainer)}
              className="text-6xl opacity-0"
            >
              {subtitle}.
            </motion.p>
          </motion.div>
        </div>
      ) : null}
      <div></div>
      {children}

      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        className="w-11/12 px-4 py-2"
      >
        <h4 className="text-3xl ">{title}</h4>
        {icon}
      </Stack>
    </BoxStyled>
  )
}
