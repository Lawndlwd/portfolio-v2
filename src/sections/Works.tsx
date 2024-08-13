import { useNavigate } from "react-router-dom";
import { Link2Icon } from "@radix-ui/react-icons";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

const works = [
  {
    title: "Levobnb ",
    date: "August 2020",
  },
  {
    title: "Taccuinu",
    date: "February 2024",
  },
  {
    title: "Portfolio",
    date: "February 2024",
  },
];
export const Works = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="mt-[-20%]">
      <h1 className="md:text-3xl text-2xl mb-24 font-thin uppercase">
        _001_Works___
      </h1>
      <div className="flex w-full items-center gap-40">
        <ul className="gap-18 flex flex-col w-full">
          {works.map(({ title, date }) => (
            <li
              className="border-y-2 border-foreground py-4 flex items-center justify-between cursor-pointer"
              key={title}
              onClick={() => navigate(`/works/${title}`)}
            >
              <p
                className={cn(
                  "mt-6 transition-colors gap-2 flex items-end",
                  isMobile ? "font-bold text-[2.6rem]" : "superBold"
                )}
              >
                {title}
                <span className="md:text-3xl text-[1rem] font-mono font-thin">
                  {date}
                </span>
              </p>
              <Link2Icon width={40} height={40} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
