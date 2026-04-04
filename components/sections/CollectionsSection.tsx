import Link from 'next/link'
import Image from 'next/image'
import { featuredProducts } from '@/lib/data/products'

const cardImages: Record<string, string> = {
  volantis:  '/images/volantis.jpg',
  paterno:   '/images/paterno.jpg',
  gravenwood:'/images/gravenwood.jpg',
}
const cardFallbacks: Record<string, string> = {
  volantis: 'linear-gradient(160deg, #2a3240 0%, #3d4d62 40%, #1e2a38 100%)',
  paterno: 'linear-gradient(145deg, #4a3828 0%, #6b5040 40%, #3a2c1e 100%)',
  gravenwood: 'linear-gradient(155deg, #3d2d1e 0%, #5a3f2c 35%, #2e2015 100%)',
}

export function CollectionsSection() {
  return (
    <section className="bg-stone py-24 px-[5vw]" id="collections" aria-labelledby="collections-heading">
      <div className="px-[5vw] mb-14 flex justify-between items-end flex-wrap gap-6">
        <div>
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">Our Collections</span>
          </div>
          <h2 className="font-display font-light leading-[1.1] text-navy" style={{ fontSize: 'clamp(36px, 4vw, 60px)' }} id="collections-heading">
            Seven series.<br /><em className="text-gold">Endless possibilities.</em>
          </h2>
        </div>
        <Link href="#contact" className="inline-flex items-center gap-2.5 text-[13px] font-medium tracking-[0.1em] uppercase text-navy border-b border-gold pb-1 hover:text-gold hover:gap-4 transition-all duration-200">
          View All Collections
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {featuredProducts.map((product, i) => (
          <article
            key={product.slug}
            className={`relative overflow-hidden cursor-pointer group ${i === 0 ? 'lg:row-span-2 aspect-auto min-h-[500px]' : 'aspect-[3/4]'}`}
            tabIndex={0}
            aria-label={`${product.name} collection`}
          >
            {/* Real product photo */}
            {cardImages[product.slug] ? (
              <Image
                src={cardImages[product.slug]}
                alt={`${product.name} stone collection`}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                style={{ background: cardFallbacks[product.slug] || cardFallbacks.paterno }}
                aria-hidden="true"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85 group-hover:to-black/70 transition-all duration-300" aria-hidden="true" />

            {/* Arrow */}
            <div className="absolute top-6 right-6 w-9 h-9 border border-white/20 rounded-full flex items-center justify-center opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-gold transition-all duration-300 group-hover:bg-gold/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block text-[9px] font-medium tracking-[0.3em] uppercase text-gold-bright border border-gold/40 px-2 py-0.5 rounded-[1px] mb-2">{product.seriesGroup}</span>
              <span className="font-display text-[28px] font-medium text-white leading-[1.1] block">{product.name}</span>
              <p className="text-[13px] text-white/65 mt-1.5 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-16 opacity-0 group-hover:opacity-100 transition-all duration-300">{product.tagline}</p>
              <div className="mt-3">
                <span className="font-mono text-[12px] text-gold-bright">{product.colours.length} Colours</span>
                <span className="text-[11px] text-white/35 ml-1">— {product.colours.slice(0,4).map(c => c.name).join(', ')}{product.colours.length > 4 ? ` +${product.colours.length - 4}` : ''}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
