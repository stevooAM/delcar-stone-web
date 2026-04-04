import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="relative px-[10vw] py-[120px] overflow-hidden text-center" aria-labelledby="cta-heading">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 80%, rgba(139,109,31,0.15) 0%, transparent 55%), radial-gradient(ellipse 60% 80% at 80% 20%, rgba(27,43,94,0.2) 0%, transparent 55%), linear-gradient(160deg, #1a1208 0%, #0d0b08 100%)`
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(170deg, transparent 0, transparent 30px, rgba(255,255,255,0.012) 30px, rgba(255,255,255,0.012) 31px)' }} />
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-3 mb-6" aria-hidden="true">
          <div className="w-8 h-px bg-gold" /><span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold-bright">Experience The Material</span><div className="w-8 h-px bg-gold" />
        </div>
        <h2 className="font-display font-light text-white leading-[1.08] mb-5" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }} id="cta-heading">
          Feel the stone<br /><em className="text-gold-bright">before you specify.</em>
        </h2>
        <p className="text-base font-light text-white/55 max-w-[500px] mx-auto leading-[1.7] mb-12">
          Request physical samples of any series and colour variant, delivered directly to your project address.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="#contact"><Button variant="primary">Request a Sample <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg></Button></Link>
          <Link href="#contact"><Button variant="outline">Get a Quote</Button></Link>
        </div>
      </div>
    </section>
  )
}
