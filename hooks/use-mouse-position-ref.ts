'use client'

import { useEffect, useRef } from 'react'

export function useMousePositionRef(containerRef?: React.RefObject<HTMLElement>) {
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        position.current = {
          x: (e.clientX - rect.left - rect.width / 2) / (rect.width / 2),
          y: (e.clientY - rect.top - rect.height / 2) / (rect.height / 2),
        }
      } else {
        position.current = {
          x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
          y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        position.current = {
          x: (touch.clientX - rect.left - rect.width / 2) / (rect.width / 2),
          y: (touch.clientY - rect.top - rect.height / 2) / (rect.height / 2),
        }
      } else {
        position.current = {
          x: (touch.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
          y: (touch.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [containerRef])

  return position
}
