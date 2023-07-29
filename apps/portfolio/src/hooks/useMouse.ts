import { useEffect, useState } from 'react'

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null
    y: number | null
    movementX: number | null
    movementY: number | null
    clientX: number | null
    clientY: number | null
  }>({
    x: null,
    y: null,
    movementX: null,
    movementY: null,
    clientX: null,
    clientY: null,
  })

  useEffect(() => {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
        movementX: event.movementX,
        movementY: event.movementY,
        clientX: event.clientX,
        clientY: event.clientY,
      })
    })
  })
  return mousePosition
}
