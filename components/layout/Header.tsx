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
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] transition-all duration-300 bg-white ${
          scrolled
            ? 'shadow-[0_2px_24px_rgba(27,43,94,0.10)]'
            : 'shadow-[0_1px_0_rgba(27,43,94,0.08)]'
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
              className="text-[13px] font-medium tracking-[0.08em] uppercase text-navy/65 hover:text-navy transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-[12px] font-medium tracking-[0.12em] uppercase text-white bg-navy px-6 py-2 rounded-sm hover:bg-navy-light transition-all duration-200"
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
              className={`block w-6 h-[1.5px] bg-navy transition-all duration-300 ${
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
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Gold accent line at top */}
        <div className="absolute top-[72px] left-[10vw] right-[10vw] h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
        {navItems.map(item => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-light text-navy hover:text-gold transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-[12px] font-medium tracking-[0.12em] uppercase text-white bg-navy px-8 py-3 rounded-sm hover:bg-navy-light transition-all"
        >
          Request a Sample
        </Link>
      </div>
    </>
  )
}
