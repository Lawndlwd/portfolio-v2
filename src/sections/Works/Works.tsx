import { motion } from 'framer-motion'
import { WorksTitle } from './components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import levobnb from '@/assets/levo.png'
import taccuinu from '@/assets/tacc.png'

import portfolio from '@/assets/prot.png'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/useIsMobile'

const works = [
  {
    title: 'Levobnb ',
    id: 'bnb',
    img: levobnb,
    date: '2020/8',
  },
  {
    title: 'Taccuinu',
    id: 'taccuinu',
    img: taccuinu,
    date: '2024/2',
  },
  {
    title: 'Portfolio',
    id: 'portfolio',
    img: portfolio,
    date: '2024/2',
  },
]
export const Works = () => {
  const navigate = useNavigate()
  const [item, setItem] = useState<string | undefined>(undefined)
  const isMobile = useIsMobile()

  return (
    <div className="mx-auto mt-[-40%] max-w-[1700px]">
      <h1 className="md:text-7xl text-3xl text-center font-black">Works</h1>
      <div className="flex w-full items-center gap-40">
        <div className="flex w-[80%] flex-col py-[14%]">
          <ul
            className={cn(
              'gap-18 flex flex-col',
              isMobile ? 'list-transform-mobile' : 'list-transform'
            )}
          >
            {works.map(({ title, id, date }) => (
              <li
                className="work-title  border-t-2"
                key={id}
                onClick={() => navigate(`/works/${id}`, { replace: true })}
                onMouseOver={() => setItem(id)}
                onMouseLeave={() => setItem(undefined)}
              >
                <WorksTitle date={date} id={id}>
                  {title}
                </WorksTitle>
              </li>
            ))}
          </ul>
        </div>
        {item ? (
          <motion.div className=" relative  w-full">
            {works.map(({ id, img, title }) => (
              <div className="absolute rounded-3xl -top-[15rem] right-0  w-[600px] h-[600px] border">
                {item === id ? (
                  <div className="absolute text-[7rem] font-bold bottom-0 left-1/2 -translate-x-1/2   bg-black bg-opacity-50 w-full text-center ">
                    {title}
                  </div>
                ) : null}
                <motion.img
                  className="object-cover rounded-3xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: item === id ? 1 : 0,
                    scale: item === id ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.2 }}
                  src={img}
                  alt="screen"
                />
              </div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}
