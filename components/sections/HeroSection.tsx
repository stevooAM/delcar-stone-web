'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { TextRotate } from '@/components/ui/text-rotate'
import { Floating, FloatingElement } from '@/components/ui/parallax-floating'

/* ─── stone photography from Unsplash ────────────────────────────────── */
const floatingImages = [
  {
    src: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=600&q=80',
    alt: 'Natural stone facade detail',
    depth: 0.8,
    className: 'absolute top-[8%] left-[4%] w-36 h-48 md:w-48 md:h-64 rounded-lg shadow-2xl overflow-hidden',
  },
  {
    src: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=600&q=80',
    alt: 'Stone cladding architectural exterior',
    depth: 0.5,
    className: 'absolute top-[5%] right-[5%] w-44 h-32 md:w-64 md:h-44 rounded-lg shadow-2xl overflow-hidden',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Interior stone wall feature',
    depth: 1,
    className: 'absolute top-[35%] left-[1%] w-28 h-40 md:w-40 md:h-56 rounded-lg shadow-2xl overflow-hidden',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    alt: 'Luxury stone interior design',
    depth: 0.6,
    className: 'absolute top-[32%] right-[2%] w-32 h-44 md:w-44 md:h-60 rounded-lg shadow-2xl overflow-hidden',
  },
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    alt: 'Stone texture closeup',
    depth: 0.4,
    className: 'absolute bottom-[12%] left-[6%] w-40 h-28 md:w-56 md:h-36 rounded-lg shadow-2xl overflow-hidden',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    alt: 'Modern architecture with stone elements',
    depth: 0.7,
    className: 'absolute bottom-[10%] right-[4%] w-36 h-36 md:w-52 md:h-52 rounded-lg shadow-2xl overflow-hidden',
  },
]

const rotatingPhrases = [
  'Timeless Stone.',
  'Precision Crafted.',
  'Architectural Luxury.',
  'Natural Elegance.',
  'Built to Last.',
]

/* ─── component ─────────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0f0d0a]"
      aria-label="Hero"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,109,31,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Parallax floating images */}
      <Floating sensitivity={0.6} className="absolute inset-0 pointer-events-none">
        {floatingImages.map((img, i) => (
          <FloatingElement key={i} depth={img.depth} className={img.className}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 180px, 260px"
              className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
            />
            {/* Gold border accent */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.25)' }}
              aria-hidden="true"
            />
          </FloatingElement>
        ))}
      </Floating>

      {/* Centre content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-10 h-px bg-gold" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-gold-bright">
            Premium Architectural Stone Cladding
          </span>
          <div className="w-10 h-px bg-gold" aria-hidden="true" />
        </div>

        {/* Static brand name */}
        <h1
          className="font-display font-light text-white leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(44px, 6vw, 82px)' }}
        >
          Delcar Stone
        </h1>

        {/* Rotating tagline */}
        <div
          className="font-display italic text-gold-bright leading-none mb-8 h-[1.15em] flex items-center justify-center"
          style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
          aria-label="Rotating tagline"
        >
          <TextRotate
            texts={rotatingPhrases}
            rotationInterval={2800}
            staggerDuration={0.04}
            staggerFrom="first"
            splitBy="character"
            transition={{ type: 'spring', damping: 18, stiffness: 280 }}
          />
        </div>

        {/* Sub-copy */}
        <p className="text-sm font-light text-white/55 leading-[1.8] mb-10 max-w-sm">
          Seven signature collections. Thirty-plus products. Natural stone panels crafted for facades, feature walls, and architectural interiors across Ghana and beyond.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="#collections">
            <Button variant="primary">
              Explore Collections
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Request a Sample</Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/35">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  )
}
