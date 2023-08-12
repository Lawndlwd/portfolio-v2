import { Dispatch, ReactNode } from 'react'
import { useWorksStrore } from '@/store/worksStrore'
import react from '@/assets/react.png'
import docker from '@/assets/docker.png'
import nx from '@/assets/nx.webp'
import jest from '@/assets/jest.png'
import github from '@/assets/github.png'
import gitlab from '@/assets/gitlab.png'
import vue from '@/assets/vue.png'
import tailwind from '@/assets/tailwind.svg'
import framer from '@/assets/framer.webp'
import { motion } from 'framer-motion'
import { useScopedI18n } from '@/locales'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const MotionImage = motion(Image)

type WorksCardsProps = {
  children: ReactNode
  id: string
  gradient: string
  setDialogOpen: Dispatch<React.SetStateAction<string | null>>
}
type WorksCardsItemProps = {
  id: string
  setDialogOpen: Dispatch<React.SetStateAction<string | null>>
  dialogOpen?: string | null
}

export const WorksCards = ({
  children,
  id,
  gradient,
  setDialogOpen,
}: WorksCardsProps) => {
  const scopedT = useScopedI18n('home.works')
  const inViewWorks = useWorksStrore(state => state.inViewWorks)

  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full rounded-2xl transition-opacity',
        `site-${inViewWorks}`,
        inViewWorks === id
          ? 'active-card opacity-100'
          : 'opacity-0 pointer-events-none',
      )}
    >
      <div
        className={cn(
          'gradient absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br origin-center',
          gradient,
        )}
      >
        {children}
        <button
          id={id}
          className={cn(
            'show-site-btn absolute bottom-6 right-6 rounded-xl bg-background z-10 px-4 py-2 ',
          )}
          onClick={() => {
            setDialogOpen(inViewWorks)
          }}
        >
          {scopedT('showModel.button')}
        </button>
      </div>
    </div>
  )
}
export const WorksOne = ({ id, setDialogOpen }: WorksCardsItemProps) => {
  return (
    <WorksCards
      setDialogOpen={setDialogOpen}
      gradient="from-[#f7f0ff] to-[#8afea1]"
      id={id}
    >
      <Image
        className="absolute w-[50%] bottom-[10%] right-[5%] "
        src={vue}
        alt={id}
      />
      <Image
        className="absolute w-[30%] top-[10%] left-[15%] "
        src={tailwind}
        alt={id}
      />
      {/* vercel / nuxt/ algolia */}
    </WorksCards>
  )
}
export const WorksTwo = ({
  id,
  setDialogOpen,
  dialogOpen,
}: WorksCardsItemProps) => {
  return (
    <WorksCards
      setDialogOpen={setDialogOpen}
      gradient="from-[#f7f0ff] to-[#fafe8a] "
      id={id}
    >
      <MotionImage
        layoutId={`${id}-vue`}
        className="absolute w-[50%] top-[5%] right-[15%] "
        src={vue}
        alt={id}
      />

      <MotionImage
        className="absolute w-[30%] top-[30%] left-[15%] "
        src={gitlab}
        alt={id}
      />
      <MotionImage
        className="absolute w-[40%] bottom-[20%] left-[45%] "
        src={docker}
        alt={id}
      />
    </WorksCards>
  )
}
export const WorksThree = ({ id, setDialogOpen }: WorksCardsItemProps) => {
  return (
    <WorksCards
      setDialogOpen={setDialogOpen}
      gradient="from-[#f7f0ff] to-[#a78afe]"
      id={id}
    >
      {/* scaleway ui / turporepo /  change react */}
      <Image
        className="absolute w-[50%] top-[5%] right-[15%] "
        src={react}
        alt={id}
      />
      <Image
        className="absolute w-[30%] top-[20%] right-[5%] "
        src={jest}
        alt={id}
      />

      <Image
        className="absolute w-[40%] bottom-[20%] left-[45%] "
        src={gitlab}
        alt={id}
      />
      <Image
        className="absolute w-[25%] top-[35%] left-[10%] "
        src={github}
        alt={id}
      />
      <Image
        className="absolute w-[40%] bottom-[40%] left-[45%] "
        src={docker}
        alt={id}
      />
    </WorksCards>
  )
}
export const WorksFour = ({ id, setDialogOpen }: WorksCardsItemProps) => {
  return (
    <WorksCards
      setDialogOpen={setDialogOpen}
      gradient="from-[#f7f0ff] to-[#8ad7fe]"
      id={id}
    >
      <Image
        className="absolute w-[50%] bottom-[10%] right-[5%] "
        src={react}
        alt={id}
      />

      <Image
        className="absolute w-[30%] top-[40%] right-[50%]"
        src={gitlab}
        alt={id}
      />
      <Image
        className="absolute w-[40%] top-[0%] left-[35%] "
        src={framer}
        alt={id}
      />
      <Image
        className="absolute w-[30%] top-[40%] right-[15%] "
        src={tailwind}
        alt={id}
      />
      <Image
        className="absolute w-[30%] bottom-[10%] left-[10%] "
        src={nx}
        alt={id}
      />
    </WorksCards>
  )
}
