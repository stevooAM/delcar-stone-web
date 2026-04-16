'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

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
        <Link href="/" aria-label="Delcar Stone Home">
          <Image
            src="/images/logo.jpeg"
            alt="Delcar Stone"
            width={110}
            height={44}
            className="object-contain rounded-sm"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/75 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-bright group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/#contact"
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
        {navItems.map(item => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-light text-white hover:text-gold-bright transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  )
}
