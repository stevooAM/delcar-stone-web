'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { AnimatePresence, motion, type Transition } from 'motion/react'

/* ─── types ────────────────────────────────────────────────────────────── */

export type TextRotateRef = {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

type SplitBy = 'character' | 'word' | 'line'
type StaggerFrom = 'first' | 'last' | 'center' | 'random' | number

interface TextRotateProps {
  texts: string[]
  rotationInterval?: number   // ms between auto-rotations (0 = manual only)
  staggerDuration?: number    // seconds between each character/word stagger
  staggerFrom?: StaggerFrom
  splitBy?: SplitBy
  transition?: Transition
  loop?: boolean
  auto?: boolean
  className?: string
  elementLevelClassName?: string
  splitLevelClassName?: string
  charLevelClassName?: string
}

/* ─── helpers ──────────────────────────────────────────────────────────── */

function splitText(text: string, by: SplitBy): string[] {
  switch (by) {
    case 'character': return text.split('')
    case 'word':      return text.split(' ')
    case 'line':      return text.split('\n')
  }
}

function getStaggerDelay(
  index: number,
  total: number,
  from: StaggerFrom,
  duration: number,
): number {
  if (from === 'first')  return index * duration
  if (from === 'last')   return (total - 1 - index) * duration
  if (from === 'center') return Math.abs(index - Math.floor(total / 2)) * duration
  if (from === 'random') return Math.random() * total * duration
  // number: treat as pivot index
  return Math.abs(index - from) * duration
}

/* ─── component ─────────────────────────────────────────────────────────── */

export const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      rotationInterval = 3000,
      staggerDuration = 0.03,
      staggerFrom = 'first',
      splitBy = 'character',
      transition = { type: 'spring', damping: 20, stiffness: 300 },
      loop = true,
      auto = true,
      className,
      elementLevelClassName,
      splitLevelClassName,
      charLevelClassName,
    },
    ref,
  ) => {
    const [index, setIndex] = useState(0)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const next = useCallback(() => {
      setIndex(i => loop ? (i + 1) % texts.length : Math.min(i + 1, texts.length - 1))
    }, [texts.length, loop])

    const previous = useCallback(() => {
      setIndex(i => loop ? (i - 1 + texts.length) % texts.length : Math.max(i - 1, 0))
    }, [texts.length, loop])

    const jumpTo = useCallback((i: number) => {
      setIndex(Math.max(0, Math.min(i, texts.length - 1)))
    }, [texts.length])

    const reset = useCallback(() => setIndex(0), [])

    useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }))

    useEffect(() => {
      if (!auto || rotationInterval <= 0) return
      timerRef.current = setTimeout(next, rotationInterval)
      return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    }, [index, auto, rotationInterval, next])

    const currentText  = texts[index]
    const parts        = useMemo(() => splitText(currentText, splitBy), [currentText, splitBy])
    const isCharSplit  = splitBy === 'character'
    const separator    = splitBy === 'word' ? ' ' : splitBy === 'line' ? '\n' : ''

    return (
      <span className={className}>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className={`inline-flex flex-wrap ${elementLevelClassName ?? ''}`}
            aria-label={currentText}
            aria-live="polite"
          >
            {parts.map((part, i) => {
              const delay = getStaggerDelay(i, parts.length, staggerFrom, staggerDuration)
              return (
                <span key={i} className={`overflow-hidden inline-block ${splitLevelClassName ?? ''}`}>
                  <motion.span
                    className={`inline-block ${charLevelClassName ?? ''}`}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ ...transition, delay }}
                  >
                    {part === ' ' ? '\u00a0' : part}
                  </motion.span>
                  {!isCharSplit && i < parts.length - 1 && separator === ' ' && '\u00a0'}
                </span>
              )
            })}
          </motion.span>
        </AnimatePresence>
      </span>
    )
  },
)

TextRotate.displayName = 'TextRotate'
