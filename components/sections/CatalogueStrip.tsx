import Link from 'next/link'
import { products } from '@/lib/data/products'
import { Button } from '@/components/ui/Button'

export function CatalogueStrip() {
  return (
    <div className="bg-navy px-[10vw] py-16" aria-label="Product catalogue">
      <div className="flex items-center justify-between gap-8 flex-wrap">
        <div>
          <h3 className="font-display font-light text-white leading-[1.2]" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
            30+ products.<br /><em className="text-gold-bright">One catalogue.</em>
          </h3>
          <p className="text-sm text-white/40 mt-3 font-light">Browse the complete Pangolin 2026 collection.</p>
        </div>
        <div className="hidden lg:flex gap-6 flex-wrap">
          {products.slice(0, 12).map(p => (
            <span key={p.slug} className="text-[12px] tracking-[0.12em] uppercase text-white/45 hover:text-gold-bright transition-colors cursor-pointer">{p.name}</span>
          ))}
        </div>
        <Link href="#contact">
          <Button variant="primary">
            Download Catalogue
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 15V3M19 15v5H5v-5M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Button>
        </Link>
      </div>
    </div>
  )
}
