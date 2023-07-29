import { useEffect, useRef } from 'react'
import { HeroAnimation } from '@portfolio/helpers/matter'

export const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    HeroAnimation(canvasRef.current)
  }, [])

  return (
    <div className="w-full h-full overflow-scroll">
      <canvas ref={canvasRef} className="absolute h-screen  w-full  " />
    </div>
  )
}
