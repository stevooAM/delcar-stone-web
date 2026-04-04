'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] transition-all duration-300 ${
          scrolled ? 'bg-dark/95 backdrop-blur-md shadow-[0_1px_0_rgba(139,109,31,0.3)]' : ''
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Delcar Stone Home">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M6 4L6 36L22 36C31 36 36 30 36 20C36 10 31 4 22 4Z" stroke="#c9a84c" strokeWidth="2"/>
            <path d="M13 28L13 20L20 14L27 20L27 28" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M17 28L17 22L23 22L23 28" stroke="#c9a84c" strokeWidth="1.5"/>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[18px] font-semibold tracking-[0.12em] text-white">DELCAR</span>
            <span className="font-body text-[9px] font-medium tracking-[0.35em] uppercase text-gold-bright mt-0.5">Stone</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          {['Collections', 'Projects', 'About', 'Contact'].map(item => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/75 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-bright group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-[12px] font-medium tracking-[0.12em] uppercase text-gold-bright border border-gold px-6 py-2 rounded-sm hover:bg-gold hover:text-white transition-all duration-200"
          >
            Request a Sample
          </Link>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen
                  ? i === 0 ? 'translate-y-[6.5px] rotate-45' : i === 1 ? 'opacity-0' : '-translate-y-[6.5px] -rotate-45'
                  : ''
              }`}
            />
          ))}
        </button>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {['Collections', 'Projects', 'About', 'Contact'].map(item => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-light text-white hover:text-gold-bright transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  )
}
