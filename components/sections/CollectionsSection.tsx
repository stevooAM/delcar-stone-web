import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data/products'

export function CollectionsSection() {
  return (
    <section className="bg-stone py-24 px-[5vw]" id="collections" aria-labelledby="collections-heading">
      <div className="px-[5vw] mb-14 flex justify-between items-end flex-wrap gap-6">
        <div>
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">Brochure Catalogue</span>
          </div>
          <h2
            className="font-display font-light leading-[1.1] text-navy"
            style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
            id="collections-heading"
          >
            Every stone definition,
            <br />
            <em className="text-gold">in one place.</em>
          </h2>
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2.5 text-[13px] font-medium tracking-[0.1em] uppercase text-navy border-b border-gold pb-1 hover:text-gold hover:gap-4 transition-all duration-200"
        >
          Request the full range
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="px-[5vw] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <article
            key={product.slug}
            className="overflow-hidden rounded-[2px] border border-stone-dark bg-[#f6f1e9] shadow-[0_20px_60px_rgba(15,13,10,0.08)]"
            aria-label={`${product.name} brochure definition`}
          >
            <div className="relative aspect-[4/5] bg-white">
              <Image
                src={product.brochureImage}
                alt={`${product.name} brochure stone definition`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="inline-block text-[9px] font-medium tracking-[0.3em] uppercase text-gold border border-gold/40 px-2 py-0.5 rounded-[1px] mb-2">
                    {product.seriesGroup}
                  </span>
                  <h3 className="font-display text-[28px] font-medium text-navy leading-[1.1]">{product.name}</h3>
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-grey text-right">
                  {product.cornersAvailable ? 'Corners Available' : 'Straight Runs'}
                </span>
              </div>

              <p className="text-[13px] text-grey leading-relaxed mb-3">{product.tagline}</p>
              <p className="text-[14px] text-charcoal/80 leading-[1.75] mb-6">{product.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="border border-stone-dark/70 bg-white/80 px-4 py-3">
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-grey mb-1">Size Range</div>
                  <div className="text-[14px] text-charcoal">{product.specs.sizeCm2} cm²</div>
                </div>
                <div className="border border-stone-dark/70 bg-white/80 px-4 py-3">
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-grey mb-1">Thickness</div>
                  <div className="text-[14px] text-charcoal">{product.specs.thicknessCm} cm</div>
                </div>
                <div className="border border-stone-dark/70 bg-white/80 px-4 py-3">
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-grey mb-1">Coverage</div>
                  <div className="text-[14px] text-charcoal">{product.specs.m2PerBox.toFixed(2)} m² / box</div>
                </div>
                <div className="border border-stone-dark/70 bg-white/80 px-4 py-3">
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-grey mb-1">Weight</div>
                  <div className="text-[14px] text-charcoal">{product.specs.weightPerM2Kg} kg / m²</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.colours.map((colour) => (
                  <span
                    key={colour.slug}
                    className="px-3 py-1 border border-stone-dark/70 text-[11px] text-grey tracking-[0.08em] rounded-[1px] bg-white"
                  >
                    {colour.name}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
