import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden" aria-label="Hero">
      {/* Real hero photo */}
      <Image
        src="/images/hero.jpg"
        alt="Premium stone-clad architectural exterior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 85%, rgba(139,109,31,0.25) 0%, transparent 55%),
            radial-gradient(ellipse 70% 80% at 85% 20%, rgba(27,43,94,0.5) 0%, transparent 60%),
            linear-gradient(168deg, rgba(26,18,8,0.88) 0%, rgba(13,11,8,0.75) 50%, rgba(22,18,10,0.82) 100%)`
        }}
        aria-hidden="true"
      />

      {/* Gold mineral vein */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block"
        style={{
          left: '38%',
          width: '1px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(139,109,31,0.4) 20%, rgba(201,168,76,0.6) 50%, rgba(139,109,31,0.4) 80%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-[10vw] max-w-[1400px] w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-7">
          <div className="w-12 h-px bg-gold" aria-hidden="true" />
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold-bright">
            Premium Architectural Stone Cladding
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-light leading-[1.06] text-white mb-8" style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}>
          <span className="block">Where Stone</span>
          <span className="block italic text-gold-bright">Meets Architecture.</span>
          <span className="block">Meets Precision.</span>
        </h1>

        <p className="text-base font-light text-white/60 max-w-[420px] leading-[1.75] mb-12">
          Seven signature collections. Thirty-plus products. Natural stone panels crafted for facades, feature walls, and architectural interiors.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link href="#collections">
            <Button variant="primary">
              Explore Collections
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Request a Sample</Button>
          </Link>
        </div>
      </div>

      {/* Right stats */}
      <div className="absolute right-[8vw] bottom-20 hidden lg:flex flex-col gap-7" aria-hidden="true">
        {[['7', 'Collections'], ['30+', 'Products'], ['20+', 'Colour Variants']].map(([num, label]) => (
          <div key={label} className="text-right">
            <div className="font-display text-4xl font-semibold text-gold-bright leading-none">{num}</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-white/45 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/80 to-transparent" />
      </div>
    </section>
  )
}
