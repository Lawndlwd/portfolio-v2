import { motion, useScroll, useTransform } from 'framer-motion'
import { MutableRefObject, useRef } from 'react'
import Francois from '@/assets/Franco.webp'
import Sharanya from '@/assets/shar.webp'
import Karim from '@/assets/Karim.webp'

const feedbacks = [
  {
    title:
      'Levende quickly gained proficiency in our Frontend stack (VueJS + Typescript + ServiceWorker), even within the dynamic context of our startup environment.',
    id: '1',
    owner: 'François Guérin',
    potision: 'Backend Software Engineer',
    scale: [
      [0.2, 0.28, 0.9],
      ['-32%', '-100%', '-232%'],
    ],
    image: Francois,
  },
  {
    title:
      'Levende is an excellent team member who took a great interest in subjects that went far beyond his role and responsibilities.',
    id: '2',
    owner: 'Sharanya Thakur',
    potision: 'Identity Verification | Authentication | Digital identity',
    scale: [
      [0.2, 0.28, 0.9],
      ['-32%', '-100%', '-232%'],
    ],
    image: Sharanya,
  },
  {
    title:
      'Levende was a brillant student of mine: a very quick learner, autonomous and very friendly.',
    id: '3',
    owner: 'Karim Makhloufi',
    potision: 'Lead Instructor',
    scale: [
      [0.2, 0.28, 0.9],
      ['-32%', '-100%', '-232%'],
    ],
    image: Karim,
  },
]
type FeedbacksItemProps = {
  title: string
  id: string
  potision: string
  scale: (number[] | string[])[]
  owner: string
  targetRef: MutableRefObject<HTMLDivElement | null>
  image: string
}
function FeedbacksItem({
  title,
  owner,
  potision,
  scale,
  targetRef,
  image,
}: FeedbacksItemProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  // @ts-expect-error type error
  const textScale = useTransform(scrollYProgress, scale[0], scale[1])

  return (
    <motion.div
      style={{
        y: '10%',
        x: textScale,
      }}
      className="flex   items-center gap-48  p-24 w-screen justify-center"
    >
      <div className="max-h-[50vh] max-w-[56vw] ">
        <p className="text-foreground text-[3vw] font-bold leading-[8rem] -tracking-wide  ">
          <b className="text-secondary-ts relative inline-block ">“</b>
          {title}
        </p>
      </div>
      <div className="  h-auto  w-[10vw]  flex-col items-center justify-center  gap-32  ">
        <img
          src={image}
          alt="levende"
          className="rounded-full block "
          width={300}
        />
        <p className="text-xl font-bold self-center  ">
          {owner}
          <p>{potision}</p>
        </p>
      </div>
    </motion.div>
  )
}

export const Feedbacks = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  return (
    <motion.section
      ref={targetRef}
      className=" h-[300vh] max-w-[1700px] mx-auto  "
    >
      <div className="sticky top-1/2   mt-[80vh]  flex  h-[80vh] max-w-[1700px]  -translate-y-1/2 ">
        <h1 className="text-7xl font-black mb-24 max-w-[700px]">Feedbacks</h1>
        <div className="flex">
          {feedbacks.map(({ title, scale, owner, potision, id, image }) => (
            <FeedbacksItem
              image={image}
              targetRef={targetRef}
              key={id}
              title={title}
              id={id}
              potision={potision}
              scale={scale}
              owner={owner}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
