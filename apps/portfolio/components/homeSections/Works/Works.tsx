// import { Container, Stack } from '@portfolio/ui-components'
import {
  WorksFour,
  WorksOne,
  WorksThree,
  WorksTwo,
  WorksTitle,
} from './components'
import { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { useWorksStrore } from '@/store/worksStrore'
// import Test from '../skills'
import { animateWorkIn, animateWorkOut } from './animation'
import { useScopedI18n } from '@/locales'

const works = [
  {
    title:
      'Levo BNB | copy of Airbnb | away to find good stay in all the world.',
    id: 'bnb',
    card: WorksOne,
    gradient: 'from-[#f7f0ff] to-[#8afea1]',
  },
  {
    title:
      'Levo BNB | copy of Airbnb | away to find good stay in all the world.',
    id: 'gravity',
    card: WorksTwo,
    gradient: 'from-[#f7f0ff] to-[#fafe8a]',
  },
  {
    title: 'Scaleway Console | Cloud provider',
    id: 'scaleway',
    card: WorksThree,
    gradient: 'from-[#f7f0ff] to-[#a78afe]',
  },
  {
    title: 'Personal portfolio | V2 ',
    id: 'portfolio',
    card: WorksFour,
    gradient: 'from-[#f7f0ff] to-[#8ad7fe]',
  },
]
export const Works = () => {
  const scopedT = useScopedI18n('home.works')

  const inViewWorks = useWorksStrore(state => state.inViewWorks)
  const setGradient = useWorksStrore(state => state.setGradient)

  const [dialogOpen, setDialogOpen] = useState<string | null>(null)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (dialogOpen !== null && dialogOpen === inViewWorks) {
      document.body.classList.add('modal-open')
      animate(animateWorkIn(inViewWorks))

      setGradient(works.find(({ id }) => id === inViewWorks)?.gradient ?? null)
    }
    if (dialogOpen !== inViewWorks) {
      document.body.classList.remove('modal-open')
      animate(animateWorkOut(inViewWorks))
    }
  }, [animate, dialogOpen, inViewWorks, setGradient])

  return (
    <div className="max-w-[1400px] mx-auto ">
      <div ref={scope} className=" flex w-full items-start gap-40">
        <div className=" flex flex-col w-full py-[700px]">
          <h1 className=" font-barriecito text-7xl font-black  mt-[-30%]">
            My Works
          </h1>

          <ul>
            {works.map(({ title, id }) => (
              <li key={id}>
                <WorksTitle id={id}>{title}</WorksTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex w-full h-screen items-center ">
          <motion.div className="relative w-full aspect-square bg-muted [&:has(>.active-card)]:bg-transparent rounded-2xl">
            {works.map(({ id, card: Cards }) => (
              <Cards
                setDialogOpen={setDialogOpen}
                dialogOpen={dialogOpen}
                key={id}
                id={id}
              />
            ))}
          </motion.div>
        </div>
        <button
          className=" z-40 opacity-0 back-to-site-btn fixed bottom-6 right-1/2 rounded-xl bg-foreground text-background   px-4 py-2 "
          onClick={() => setDialogOpen(null)}
        >
          {scopedT('hideModel.button')}
        </button>

        {/* <Test dialogOpen={dialogOpen} /> */}
      </div>
    </div>
  )
}
