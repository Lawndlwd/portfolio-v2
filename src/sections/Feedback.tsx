// import { motion, useScroll, useTransform } from 'framer-motion'
// import { MutableRefObject, useRef } from 'react'
// import Francois from '@/assets/Franco.webp'
// import Sharanya from '@/assets/shar.webp'
// import Karim from '@/assets/Karim.webp'
// import { useIsMobile } from '@/hooks/useIsMobile'

// const feedbacks = [
//   {
//     title:
//       'Levende quickly gained proficiency in our Frontend stack (VueJS + Typescript + ServiceWorker), even within the dynamic context of our startup environment.',
//     id: '1',
//     owner: 'François Guérin',
//     potision: 'Backend Software Engineer',
//     scale: [
//       [0.2, 0.28, 0.9],
//       ['-0%', '-100%', '-200%'],
//     ],
//     scaleMobile: [
//       [0.2, 0.28, 0.9],
//       ['20%', '-100%', '-240%'],
//     ],
//     image: Francois,
//   },
//   {
//     title:
//       'Levende is an excellent team member who took a great interest in subjects that went far beyond his role and responsibilities.',
//     id: '2',
//     owner: 'Sharanya Thakur',
//     potision: 'Identity Verification | Authentication | Digital identity',
//     scale: [
//       [0.2, 0.28, 0.9],
//       ['-0%', '-100%', '-200%'],
//     ],
//     scaleMobile: [
//       [0.2, 0.28, 0.9],
//       ['20%', '-100%', '-240%'],
//     ],
//     image: Sharanya,
//   },
//   {
//     title:
//       'Levende was a brillant student of mine: a very quick learner, autonomous and very friendly.',
//     id: '3',
//     owner: 'Karim Makhloufi',
//     potision: 'Lead Instructor',
//     scale: [
//       [0.2, 0.28, 0.9],
//       ['-0%', '-100%', '-200%'],
//     ],
//     scaleMobile: [
//       [0.2, 0.28, 0.9],
//       ['20%', '-100%', '-240%'],
//     ],
//     image: Karim,
//   },
// ]
// type FeedbacksItemProps = {
//   title: string
//   id: string
//   potision: string
//   scale: (number[] | string[])[]
//   scaleMobile: (number[] | string[])[]
//   owner: string
//   targetRef: MutableRefObject<HTMLDivElement | null>
//   image: string
// }
// function FeedbacksItem({
//   title,
//   owner,
//   potision,
//   scale,
//   targetRef,
//   image,
//   scaleMobile,
// }: FeedbacksItemProps) {
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ['start end', 'end end'],
//   })
//   const isMobile = useIsMobile()
//   const textScale = useTransform(
//     scrollYProgress,
//     // @ts-expect-error type error
//     isMobile ? scaleMobile[0] : scale[0],
//     isMobile ? scaleMobile[1] : scale[1]
//   )

//   return (
//     <motion.div
//       style={{
//         y: '10%',
//         x: textScale,
//       }}
//       className="flex max-h-[100vh] md:max-h-[50vh] w-screen  flex-col md:flex-row  items-center gap-24   md:p-24  justify-center"
//     >
//       <div className=" md:max-w-[76vw] max-w-[80vw] ">
//         <p className="text-foreground md:text-[3vw] text-[6vw] font-bold md:leading-[7rem] -tracking-wide  ">
//           <b className="text-secondary-ts relative inline-block ">“</b>
//           {title}
//         </p>
//       </div>
//       <div className=" w-[80vw] flex  md:flex-col flex-row  md:gap-5 gap-5 ">
//         <img
//           src={image}
//           alt="levende"
//           className="rounded-full block md:w-[200px] w-16 "
//         />
//         <p className="md:text-xl w-1/2 font-bold   ">
//           {owner}
//           <p className="md:text-sm font-normal">{potision}</p>
//         </p>
//       </div>
//     </motion.div>
//   )
// }

// export const Feedbacks = () => {
//   const targetRef = useRef<HTMLDivElement | null>(null)

//   return (
//     <motion.section
//       ref={targetRef}
//       className="h-[300vh] max-w-[1700px] mx-auto  "
//     >
//       <div className="sticky top-1/2   md:mt-[80vh] mt-[140vh]    h-[80vh] max-w-[1700px]  -translate-y-1/2 ">
//         <h1 className="md:text-7xl text-3xl font-black mb-24 w-full   text-center ">
//           Feedbacks
//         </h1>
//         <div className="flex md:gap-1 gap-24">
//           {feedbacks.map(
//             ({ title, scale, owner, potision, id, image, scaleMobile }) => (
//               <FeedbacksItem
//                 image={image}
//                 targetRef={targetRef}
//                 key={id}
//                 title={title}
//                 id={id}
//                 potision={potision}
//                 scale={scale}
//                 scaleMobile={scaleMobile}
//                 owner={owner}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </motion.section>
//   )
// }

import Francois from '@/assets/Franco.webp'
import Sharanya from '@/assets/shar.webp'
import Karim from '@/assets/Karim.webp'
// import { useIsMobile } from '@/hooks/useIsMobile'

const feedbacks = [
  {
    title:
      'Levende quickly gained proficiency in our Frontend stack (VueJS + Typescript + ServiceWorker), even within the dynamic context of our startup environment.',
    id: '1',
    owner: 'François Guérin',
    potision: 'Backend Software Engineer',

    image: Francois,
  },
  {
    title:
      'Levende is an excellent team member who took a great interest in subjects that went far beyond his role and responsibilities.',
    id: '2',
    owner: 'Sharanya Thakur',
    potision: 'Identity Verification | Authentication | Digital identity',

    image: Sharanya,
  },
  {
    title:
      'Levende was a brillant student of mine: a very quick learner, autonomous and very friendly.',
    id: '3',
    owner: 'Karim Makhloufi',
    potision: 'Lead Instructor',

    image: Karim,
  },
]
type FeedbacksItemProps = {
  title: string
  id: string
  potision: string

  owner: string
  image: string
}
function FeedbacksItem({ title, owner, potision, image }: FeedbacksItemProps) {
  // const isMobile = useIsMobile()

  return (
    <div className="md:grid md:grid-cols-6  flex flex-col items-center gap-8   md:p-24  p-8 justify-center">
      <div className="   col-span-5 ">
        <p className="text-foreground md:text-[2.5vw] text-[6vw] font-bold md:leading-[5rem] -tracking-wide  ">
          <b className="text-secondary-ts relative inline-block ">“</b>
          {title}
        </p>
      </div>
      <div className=" w-[80vw] flex  md:flex-col flex-row  md:gap-5 gap-5 ">
        <img
          src={image}
          alt="levende"
          className="rounded-full block md:w-[100px] w-16 "
        />
        <p className="md:text-xl w-1/2 font-bold   ">
          {owner}
          <p className="md:text-sm font-normal">{potision}</p>
        </p>
      </div>
    </div>
  )
}

export const Feedbacks = () => {
  return (
    <section className="mt-[600px] md:mt-[400px] max-w-[1700px] mx-auto  ">
      <div className="max-w-[1700px]">
        <h1 className="md:text-7xl text-3xl font-black mb-24 w-full   text-center ">
          Feedbacks
        </h1>
        <div className="flex flex-col md:gap-1 gap-24">
          {feedbacks.map(({ title, owner, potision, id, image }) => (
            <FeedbacksItem
              image={image}
              key={id}
              title={title}
              id={id}
              potision={potision}
              owner={owner}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
