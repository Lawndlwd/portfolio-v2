import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
    }

    window.addEventListener('resize', handleResize)

    handleResize() // Call initially to set state on component mount

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
