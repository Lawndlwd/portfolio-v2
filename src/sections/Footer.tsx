import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'

export const Footer = () => {
  const isMobile = useIsMobile()

  return (
    <div className="md:h-[500px] bg-slate-200 rounded-3xl mt-48   md:w-[1700px] mx-auto mb-56  shadow-lg p-5">
      <p
        className={cn(
          'text-black  text-center    font-black  ',
          isMobile ? 'text-[15vw]' : 'superBold'
        )}
      >
        Front <br />
        things
      </p>
    </div>
  )
}
