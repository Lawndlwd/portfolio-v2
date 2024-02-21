import { Link } from 'react-router-dom'
import { Feedbacks, Hero, Skills, Works, Footer } from './sections'
import { cn } from './lib/utils'
import { buttonVariants } from './components'
import { Link1Icon } from '@radix-ui/react-icons'

export const App = () => {
  return (
    <div
      id="wrapper"
      className="montserrat-lawand font-montserrat bg-background relative start-0 z-10 w-full overflow-x-clip"
    >
      <div id="content" className="relative z-10 h-full w-full overflow-x-clip">
        <Hero />
        <div className="max-w-[1700px] mx-auto">
          <Works />
          <Skills />
          <Feedbacks />
        </div>
        <Footer />
        <div className="fixed bottom-5 right-5 w-[200px]">
          <div className="flex flex-col gap-5">
            <Link
              to="https://twitter.com/levende_"
              target="_blank"
              className={cn(
                'flex gap-1 font-bold',
                buttonVariants({ variant: 'link' })
              )}
            >
              X / Twitter
              <Link1Icon />
              <div className="border-b w-10 items-start h-4" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/levend-mohammad/"
              target="_blank"
              className={cn(
                'flex gap-1 font-bold',
                buttonVariants({ variant: 'link' })
              )}
            >
              LinkedIn <Link1Icon />
              <div className="border-b w-10 items-start h-4" />
            </Link>
            <Link
              to="https://github.com/Lawndlwd"
              target="_blank"
              className={cn(
                'flex gap-1 font-bold',
                buttonVariants({ variant: 'link' })
              )}
            >
              GitHub <Link1Icon />
              <div className="border-b w-10 items-start h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
