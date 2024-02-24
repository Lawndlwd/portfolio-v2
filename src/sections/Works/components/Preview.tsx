import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Separator } from '@/components'
import { Link1Icon, ArrowLeftIcon } from '@radix-ui/react-icons'
import works from './Works'

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {},
  },
}

type PreviewRouteProps = { id: string | undefined }

export const Preview = () => {
  const { id: dialogOpen } = useParams<PreviewRouteProps>()
  const work = works.find(({ id }) => id === dialogOpen)
  const container = useRef(null)
  const navigate = useNavigate()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const lg = useTransform(scrollYProgress, [0, 1], ['0%', '-200%'])
  const xl = useTransform(scrollYProgress, [0, 1], ['0%', '-350%'])

  if (!work) return null

  return (
    <div
      className={cn(
        'inset-0 flex h-full w-full items-center  justify-center  rounded-xl'
      )}
    >
      <div className="relative">
        <div
          className="fixed  z-50 top-10 right-10 border border-white rounded-full p-5 bg-black hover:bg-gray-950 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <ArrowLeftIcon width={44} height={44} />
        </div>
        <img
          src={work.images.find(({ name }) => name === 'heading')?.src ?? ''}
          className="rounded-xl filter brightness-[35%]"
        />
        <div className="  mx-auto relative ">
          <p
            ref={ref}
            id="preview-title"
            data-text={work.name}
            className={cn(
              'text-black superBold -mt-[5%] text-center text-transparent bg-clip-text size'
            )}
          >
            {work.name}
          </p>
        </div>

        <div className="w-[1200px] mx-auto flex flex-col gap-10 ">
          <div className="grid grid-cols-12 items-start gap-2  mt-48">
            <div className="col-span-9 flex flex-col gap-10 ">
              <h2 className="text-[2rem] font-bold">
                {work.projectOverview.name}
              </h2>

              <div className="flex flex-col gap-5">
                {work.projectOverview.desc.map((desc) => (
                  <p key={desc} className="text-2xl   ">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
            <Separator orientation="vertical" />

            <div className="flex flex-col gap-5 col-span-2">
              <div>
                <h2 className="font-bold">Website</h2>

                <Button variant="link" className="flex gap-1 items-center p-0">
                  <Link to={work.link} target="_blank">
                    {work.link}
                  </Link>
                  <Link1Icon />
                </Button>
              </div>
              <div>
                <h2 className="font-bold">Technologies</h2>
                <p className="font-semibold ">
                  {work.technologies.map((technologie, index) => (
                    <span key={technologie}>
                      {technologie}
                      <span>
                        {work.technologies.length - 1 === index ? '.' : ', '}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-10">
            <h2 className="text-[2rem] font-bold   ">
              {work.problemStatement.name}
            </h2>
            {work.problemStatement.desc.map((desc) => (
              <p key={desc} className="text-2xl">
                {desc}
              </p>
            ))}
          </div>
          <div className="relative">
            <h2 className="text-[2rem] font-bold mb-40  ">
              Screenshots and Demos:
            </h2>

            <div ref={container}>
              {work.images.map(({ name, src }) =>
                name !== 'heading' ? (
                  <motion.div
                    key={name}
                    style={{
                      y:
                        name === 'landing'
                          ? undefined
                          : name === 'mobile'
                          ? lg
                          : xl,
                    }}
                  >
                    <motion.img
                      src={src}
                      className={cn(
                        name === 'landing' ? 'rounded-xl scale-125' : undefined,
                        name === 'mobile'
                          ? 'mt-[10%] -ml-[30%] top rounded-xl w-[400px]'
                          : undefined,
                        name === 'section'
                          ? '-mt-[30%] ml-[40%] rounded-xl w-full '
                          : undefined,
                        ''
                      )}
                    />
                  </motion.div>
                ) : null
              )}
            </div>
          </div>
          <div className="-mt-[40%]">
            <h2 className="text-[2rem] font-bold my-16">
              Challenges & Lessons Learned:
            </h2>

            <motion.ul className=" flex gap-5">
              {work.learning.map(({ title, desc }) => (
                <motion.li
                  key={title}
                  variants={fadeInVariants}
                  initial="initial"
                  whileInView="animate"
                  className="text-2xl border border-white p-5"
                  viewport={{ once: true }}
                >
                  <p className="font-bold mb-5">{title}</p>
                  {desc}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="text-end h-[30rem]" />
      </div>
    </div>
  )
}
