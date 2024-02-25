import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Separator } from '@/components'
import { Link1Icon, ArrowLeftIcon } from '@radix-ui/react-icons'
import works from './Works'
import { useIsMobile } from '@/hooks/useIsMobile'

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

  const lg = useTransform(scrollYProgress, [0, 1], ['40%', '-100%'])
  const xl = useTransform(scrollYProgress, [0, 1], ['40%', '-150%'])
  const isMobile = useIsMobile()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!work) return null

  return (
    <div
      className={cn(
        'inset-0 flex h-full w-full items-center  justify-center  rounded-xl'
      )}
    >
      <div className="relative">
        <div
          className="fixed  z-50 md:top-10 top-3 md:right-10 right-3 border border-white rounded-full md:p-5 p-2 bg-black hover:bg-gray-950 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <ArrowLeftIcon className="w-4 h-4 md:w-8 md:h-8" />
        </div>
        <img
          src={work.images.find(({ name }) => name === 'heading')?.src ?? ''}
          className="rounded-b-2xl  filter brightness-[35%] object-cover	 md:h-auto h-96 "
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

        <div className="md:w-[1200px] p-8 md:p-2 mx-auto flex flex-col gap-10 ">
          <div className="md:grid md:grid-cols-12 flex flex-col items-start gap-2  md:mt-48">
            <div className="flex flex-col gap-5 col-span-2 md:order-last">
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
            <Separator
              orientation={isMobile ? 'horizontal' : 'vertical'}
              className="md:order-2 md:my-0 my-5"
            />
            <div className="col-span-9 flex flex-col gap-10 ">
              <h2 className="text-[2rem] font-bold">
                {work.projectOverview.name}
              </h2>

              <div className="flex flex-col gap-5">
                {work.projectOverview.desc.map((desc) => (
                  <p key={desc} className="md:text-xl   ">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-10">
            {/* <h2 className="text-[2rem] font-bold   ">
              {work.problemStatement.name}
            </h2>
            {work.problemStatement.desc.map((desc) => (
              <p key={desc} className="md:text-2xl">
                {desc}
              </p>
            ))} */}

            <ul className=" flex md:flex-row flex-col gap-5   ">
              {work.projectOverview.features.map(({ name, desc }) => (
                <li key={name} className="md:text-xl   p-5">
                  <p className="font-bold mb-5">{name}</p>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <h2 className="text-[2rem] font-bold mb-16  ">
              Screenshots and Demos:
            </h2>

            <div ref={container} className="md:block flex flex-col gap-2">
              {work.images.map(({ name, src }) =>
                name !== 'heading' ? (
                  <motion.div
                    key={name}
                    style={{
                      y:
                        name === 'landing' || isMobile
                          ? undefined
                          : name === 'mobile'
                          ? lg
                          : xl,
                    }}
                  >
                    <motion.img
                      src={src}
                      className={cn(
                        name === 'landing' && !isMobile
                          ? 'rounded-xl '
                          : undefined,
                        name === 'mobile' && !isMobile
                          ? '-mt-[10%] -ml-[20%] top rounded-xl w-[400px]'
                          : undefined,
                        name === 'section' && !isMobile
                          ? '-mt-[70%] ml-[20%] rounded-xl w-full '
                          : undefined,
                        ''
                      )}
                    />
                  </motion.div>
                ) : null
              )}
            </div>
          </div>
          <div className="mt-[40%] md:mt-0">
            <h2 className="text-[2rem] font-bold my-16">
              Challenges & Lessons Learned:
            </h2>

            <motion.ul className=" flex md:flex-row flex-col gap-5   ">
              {work.learning.map(({ title, desc }) => (
                <motion.li
                  key={title}
                  variants={fadeInVariants}
                  initial="initial"
                  whileInView="animate"
                  className="md:text-xl border border-white p-5"
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
