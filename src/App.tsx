import { Link, Route, Routes } from 'react-router-dom'
import { Feedbacks, Hero, Skills, Works, Footer } from './sections'
import { cn } from './lib/utils'
import { buttonVariants } from './components'
import { Link1Icon } from '@radix-ui/react-icons'
import { useIsMobile } from './hooks/useIsMobile'
import { Preview } from './sections/Works/components'

export const App = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <Routes>
        <Route
          index
          path={'/'}
          element={
            <div
              id="wrapper"
              className="montserrat-lawand font-montserrat bg-background relative start-0 z-10 w-full overflow-x-clip"
            >
              <div
                id="content"
                className="relative z-10 h-full w-full overflow-x-clip"
              >
                <Hero />
                <div className="max-w-[1700px] mx-auto">
                  <Works />
                  <Skills />
                  <Feedbacks />
                </div>
                <Footer />
              </div>
            </div>
          }
        />

        <Route index path={'/works/:id'} element={<Preview />} />
      </Routes>
      <div className="fixed bottom-5 md:right-5 md:w-[200px] px-10 md:p-0">
        <div className="flex md:flex-col md:gap-5">
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
            {isMobile ? null : (
              <div className="border-b invisible md:visible w-10 items-start h-4" />
            )}
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
            {isMobile ? null : (
              <div className="border-b invisible md:visible w-10 items-start h-4" />
            )}
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
            {isMobile ? null : (
              <div className="border-b invisible md:visible w-10 items-start h-4" />
            )}
          </Link>
        </div>
      </div>
    </>
  )
}
