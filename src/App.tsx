import { Link, Route, Routes } from "react-router-dom";
import { Feedbacks, Hero, Skills, Works, Footer } from "./sections";
import { cn } from "./lib/utils";
import { buttonVariants } from "./components";
import { Link1Icon } from "@radix-ui/react-icons";
import { useIsMobile } from "./hooks/useIsMobile";
import { Preview } from "./sections/Preview";

export const App = () => {
  const isMobile = useIsMobile();

  return (
    <div
      id="wrapper"
      className="montserrat-lawand font-montserrat bg-background relative start-0 z-10 w-full overflow-x-clip"
    >
      <Routes>
        <Route
          index
          path="/"
          element={
            <div
              id="content"
              className="relative z-10 h-full w-full overflow-x-clip"
            >
              <Hero />
              <div className="max-w-[1700px] flex flex-col gap-24 mx-auto px-4 ">
                <Works />
                <Skills />
                <Feedbacks />
              </div>
              <Footer />
            </div>
          }
        />
        <Route index path="/works/:id" element={<Preview />} />
      </Routes>
      <div className="fixed bottom-5 md:right-5 md:w-[200px] px-10 md:p-0 z-10">
        <div className="flex md:flex-col md:gap-5">
          <Link
            to="https://twitter.com/levende_"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex gap-1 font-bold text-[#00BFFF]"
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
              buttonVariants({ variant: "link" }),
              "flex gap-1 font-bold text-[#00BFFF]"
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
              buttonVariants({ variant: "link" }),
              "flex gap-1 font-bold text-[#00BFFF]"
            )}
          >
            GitHub <Link1Icon />
            {isMobile ? null : (
              <div className="border-b invisible md:visible w-10 items-start h-4" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
