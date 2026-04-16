'use client'

import { AnimatedMarqueeHero } from '@/components/ui/hero-3'
import { seriesGroups, products } from '@/lib/data/products'

const STONE_IMAGES = [
  '/images/delcar-stone-curated/hero-collection.png',
  '/images/delcar-stone-curated/hero-accent.png',
  '/images/delcar-stone-curated/stone-volantis.png',
  '/images/delcar-stone-curated/stone-travertino.png',
  '/images/delcar-stone-curated/stone-the-glade.png',
  '/images/delcar-stone-curated/stone-invicta.png',
  '/images/delcar-stone-curated/stone-lumumba.png',
  '/images/delcar-stone-curated/application-exterior.png',
  '/images/delcar-stone-curated/application-commercial.png',
]

export function HeroSection() {
  return (
    <AnimatedMarqueeHero
      tagline="Premium Architectural Stone Cladding"
      title={
        <>
          Timeless Stone.
          <br />
          <span className="font-display italic text-gold-bright">Architectural Luxury.</span>
        </>
      }
      description={`${seriesGroups.length} curated series. ${products.length} stone definitions. Delcar Stone cladding solutions curated for facades, feature walls, and architectural interiors across Ghana and beyond.`}
      ctaText="Explore Catalogue"
      ctaHref="/catalogue"
      secondaryCtaText="Request a Sample"
      secondaryCtaHref="#contact"
      images={STONE_IMAGES}
    />
  )
}
