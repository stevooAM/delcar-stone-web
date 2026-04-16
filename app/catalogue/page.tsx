import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { products } from '@/lib/data/products'

export default function CataloguePage() {
  return (
    <>
      <Header />
      <main className="bg-stone pt-28">
        <section className="px-[10vw] py-14 border-b border-stone-dark/60">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">Standalone Catalogue</span>
          </div>
          <h1 className="font-display font-light leading-[1.05] text-navy" style={{ fontSize: 'clamp(42px, 5vw, 74px)' }}>
            Stone definitions,
            <br />
            <em className="text-gold">shown beside real housing projects.</em>
          </h1>
          <p className="text-base font-light leading-[1.8] text-grey max-w-[760px] mt-6">
            Browse the full Delcar Stone range with each stone&apos;s definition, specifications, and a matching installed example so clients can compare the technical story with the finished architectural result.
          </p>
        </section>

        <section className="px-[5vw] py-14" aria-label="Full stone catalogue">
          <div className="space-y-8">
            {products.map((product) => (
              <article
                key={product.slug}
                className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] overflow-hidden rounded-[2px] border border-stone-dark bg-[#f6f1e9] shadow-[0_24px_80px_rgba(15,13,10,0.08)]"
              >
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-5 flex-wrap mb-5">
                    <div>
                      <span className="inline-block text-[9px] font-medium tracking-[0.3em] uppercase text-gold border border-gold/40 px-2 py-0.5 rounded-[1px] mb-3">
                        {product.seriesGroup}
                      </span>
                      <h2 className="font-display text-[clamp(30px,3vw,48px)] font-medium text-navy leading-[1.05]">{product.name}</h2>
                    </div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-grey text-right">
                      {product.cornersAvailable ? 'Corners Available' : 'Straight Runs'}
                    </span>
                  </div>

                  <p className="text-[13px] text-grey leading-relaxed mb-3">{product.tagline}</p>
                  <p className="text-[15px] text-charcoal/80 leading-[1.85] mb-7">{product.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
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

                <div className="relative min-h-[360px] lg:min-h-full bg-white">
                  <Image
                    src={product.projectImage}
                    alt={`${product.name} installed in a housing project`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" aria-hidden="true" />
                  <div className="absolute left-6 bottom-6 right-6">
                    <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold-bright mb-2">Project Sample</p>
                    <p className="font-display text-[28px] font-light text-white leading-[1.1]">{product.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-[10vw] pb-20">
          <div className="rounded-[2px] border border-gold/30 bg-navy-deep px-8 py-10 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold-bright mb-3">Next Step</p>
              <h2 className="font-display text-[clamp(28px,3vw,42px)] font-light text-white leading-[1.1]">
                Need the complete product conversation with your client?
              </h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-gold text-white text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-gold-bright transition-colors"
              >
                Request a Sample
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm border border-gold text-gold-bright text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-gold hover:text-white transition-colors"
              >
                Back Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
