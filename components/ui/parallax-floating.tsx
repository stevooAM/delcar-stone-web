'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from 'react'
import { useAnimationFrame } from 'motion/react'
import { useMousePositionRef } from '@/hooks/use-mouse-position-ref'

/* ─── context ─────────────────────────────────────────────────────────── */

type FloatingElement = {
  ref: RefObject<HTMLElement>
  depth: number
}

type FloatingContextType = {
  registerElement: (id: string, ref: RefObject<HTMLElement>, depth: number) => void
  unregisterElement: (id: string) => void
}

const FloatingContext = createContext<FloatingContextType>({
  registerElement: () => {},
  unregisterElement: () => {},
})

/* ─── Floating (container) ────────────────────────────────────────────── */

interface FloatingProps {
  children: ReactNode
  sensitivity?: number   // multiplier – higher = more movement
  className?: string
}

export function Floating({ children, sensitivity = 1, className }: FloatingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePositionRef = useMousePositionRef(containerRef as RefObject<HTMLElement>)
  const elements = useRef<Map<string, FloatingElement>>(new Map())

  const registerElement = useCallback(
    (id: string, ref: RefObject<HTMLElement>, depth: number) => {
      elements.current.set(id, { ref, depth })
    },
    [],
  )

  const unregisterElement = useCallback((id: string) => {
    elements.current.delete(id)
  }, [])

  useAnimationFrame(() => {
    const { x, y } = mousePositionRef.current
    elements.current.forEach(({ ref, depth }) => {
      if (!ref.current) return
      const moveX = x * depth * 30 * sensitivity
      const moveY = y * depth * 30 * sensitivity
      ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  })

  return (
    <FloatingContext.Provider value={{ registerElement, unregisterElement }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </FloatingContext.Provider>
  )
}

/* ─── FloatingElement (child) ─────────────────────────────────────────── */

interface FloatingElementProps {
  children: ReactNode
  depth?: number          // 0 = no movement, 1 = full movement
  className?: string
}

let idCounter = 0

export function FloatingElement({
  children,
  depth = 0.5,
  className,
}: FloatingElementProps) {
  const id = useRef<string>(`floating-${++idCounter}`)
  const ref = useRef<HTMLDivElement>(null)
  const { registerElement, unregisterElement } = useContext(FloatingContext)

  useEffect(() => {
    const currentId = id.current
    registerElement(currentId, ref as RefObject<HTMLElement>, depth)
    return () => unregisterElement(currentId)
  }, [depth, registerElement, unregisterElement])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
