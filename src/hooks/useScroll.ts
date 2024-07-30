import { useState, useEffect } from 'react'

const useScroll = (): { scrollPosition: number } => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollPosition }
}

export default useScroll
