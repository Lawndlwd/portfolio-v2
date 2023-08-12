import { useEffect, useState } from 'react'

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null
    y: number | null
    movementX: number | null
    movementY: number | null
    clientX: number
    clientY: number
  }>({
    x: null,
    y: null,
    movementX: null,
    movementY: null,
    clientX: 0,
    clientY: 0,
  })
  const updateMouse = (event: MouseEvent) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
      movementX: event.movementX,
      movementY: event.movementY,
      clientX: event.clientX,
      clientY: event.clientY,
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', updateMouse)
    return () => {
      document.addEventListener('mousemove', updateMouse)
    }
  })
  return mousePosition
}
