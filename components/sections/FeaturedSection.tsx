import { products } from '@/lib/data/products'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export function FeaturedSection() {
  const volantis = products.find(p => p.slug === 'volantis')!
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]" id="about" aria-labelledby="featured-heading">
      {/* Visual */}
      <div className="relative overflow-hidden min-h-[360px]">
        <Image
          src="/images/volantis.jpg"
          alt="Volantis horizontal stone block wall — Delcar Stone flagship series"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-navy-deep/50" aria-hidden="true" />
        <div className="absolute top-10 left-10 bg-gold text-white text-[10px] font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-[1px]">Flagship Series</div>
        <div className="absolute bottom-10 left-10 font-display text-[72px] font-light text-white/[0.08] leading-none pointer-events-none">Volantis</div>
      </div>

      {/* Content */}
      <div className="bg-navy-deep px-16 py-18 flex flex-col justify-center">
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-9 h-px bg-gold-bright flex-shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold-bright">Modular Series · Volantis</span>
        </div>
        <h2 className="font-display font-light leading-[1.1] text-white mb-4" style={{ fontSize: 'clamp(28px, 2.8vw, 44px)' }} id="featured-heading">
          Architecture in <em className="text-gold-bright">every block.</em>
        </h2>
        <p className="text-base font-light leading-[1.75] text-white/55 mb-9">
          Composed of regular horizontal stone blocks, Volantis&apos; modular structure enables fast installation while delivering a bold, confident wall presence. Available in 11 colours with corner modules.
        </p>

        {/* Spec grid */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] mb-9" role="table" aria-label="Volantis specifications">
          {[
            ['Size Range', '75 – 600 cm²'],
            ['Thickness', '3.5 – 5.5 cm'],
            ['M² per Box', '0.70 m²'],
            ['Weight / m²', '45 kg'],
          ].map(([label, value]) => (
            <div key={label} className="px-6 py-5 bg-navy-deep" role="row">
              <div className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/35 mb-2" role="rowheader">{label}</div>
              <div className="font-mono text-[15px] text-gold-bright" role="cell">{value}</div>
            </div>
          ))}
        </div>

        {/* Colour swatches */}
        <div className="flex flex-wrap gap-2 mb-9" role="group" aria-label="Available colours">
          {volantis.colours.map(c => (
            <span key={c.slug} className="px-3 py-1 border border-white/12 text-[11px] text-white/60 tracking-[0.08em] rounded-[1px] hover:border-gold hover:text-gold-bright hover:bg-gold/10 transition-all cursor-pointer">{c.name}</span>
          ))}
        </div>

        <Link href="#contact">
          <Button variant="primary">
            Request a Sample
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Button>
        </Link>
      </div>
    </section>
  )
}
