import Image from 'next/image'
import Link from 'next/link'
import { featuredProducts } from '@/lib/data/products'

const previewProducts = featuredProducts.slice(0, 4)

export function CollectionsSection() {
  return (
    <section className="bg-stone py-24 px-[5vw]" id="collections" aria-labelledby="collections-heading">
      <div className="px-[5vw] mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">Catalogue Preview</span>
          </div>
          <h2
            className="font-display font-light leading-[1.1] text-navy"
            style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
            id="collections-heading"
          >
            Four standout stones,
            <br />
            <em className="text-gold">with the full catalogue beyond.</em>
          </h2>
        </div>
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2.5 text-[13px] font-medium tracking-[0.1em] uppercase text-navy border-b border-gold pb-1 hover:text-gold hover:gap-4 transition-all duration-200"
        >
          See more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="px-[5vw] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {previewProducts.map((product) => (
          <article
            key={product.slug}
            className="overflow-hidden rounded-[2px] border border-stone-dark bg-[#f6f1e9] shadow-[0_20px_60px_rgba(15,13,10,0.08)]"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={product.projectImages[0].src}
                alt={product.projectImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </div>

            <div className="p-7">
              <span className="inline-block text-[9px] font-medium tracking-[0.3em] uppercase text-gold border border-gold/40 px-2 py-0.5 rounded-[1px] mb-3">
                {product.seriesGroup}
              </span>
              <h3 className="font-display text-[26px] font-medium text-navy leading-[1.1]">{product.name}</h3>
              <p className="text-[13px] text-grey leading-relaxed mt-2 mb-3">{product.tagline}</p>
              <p className="text-[14px] text-charcoal/80 leading-[1.75] mb-5">{product.description}</p>

              <div className="flex items-center justify-between gap-4 text-[11px] tracking-[0.12em] uppercase">
                <span className="text-grey">{product.colours.length} colour options</span>
                <Link href="/catalogue" className="text-gold hover:text-navy transition-colors">
                  See more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
