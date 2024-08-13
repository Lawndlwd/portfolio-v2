import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <div className="md:h-[400px] bg-slate-200 rounded-3xl mt-48   md:max-w-[1700px] mx-auto mb-26  shadow-lg p-5 mx-10">
      <p
        className={cn(
          "text-black  text-center    font-black  ",
          isMobile ? "text-[15vw]" : " text-[6vw] uppercase"
        )}
      >
        Front <br />
        things
      </p>
    </div>
  );
};
