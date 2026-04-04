import Link from 'next/link'

const collections = ['Volantis', 'Paterno', 'Gravenwood', 'Mount Leuser', 'Irregular Series', 'Brick Series']
const company = ['About Delcar Stone', 'Projects Gallery', 'Request a Sample', 'Get a Quote', 'Technical Downloads']

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 px-[10vw]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M6 4L6 36L22 36C31 36 36 30 36 20C36 10 31 4 22 4Z" stroke="#c9a84c" strokeWidth="2"/>
              <path d="M13 28L13 20L20 14L27 20L27 28" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M17 28L17 22L23 22L23 28" stroke="#c9a84c" strokeWidth="1.5"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[16px] font-semibold tracking-[0.12em] text-white">DELCAR</span>
              <span className="font-body text-[9px] font-medium tracking-[0.35em] uppercase text-gold-bright mt-0.5">Stone</span>
            </div>
          </div>
          <p className="text-sm font-light leading-7 text-white/40 max-w-[280px]">
            Premium architectural stone cladding panels for residential and commercial applications.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold-bright mb-5">Collections</p>
          <ul className="space-y-3">
            {collections.map(c => (
              <li key={c}><Link href="#collections" className="text-sm text-white/40 hover:text-white transition-colors">{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold-bright mb-5">Company</p>
          <ul className="space-y-3">
            {company.map(c => (
              <li key={c}><Link href="#contact" className="text-sm text-white/40 hover:text-white transition-colors">{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold-bright mb-5">Contact</p>
          <ul className="space-y-3">
            <li><a href="mailto:info@delcarstone.com" className="text-sm text-white/40 hover:text-white transition-colors">info@delcarstone.com</a></li>
            <li><a href="mailto:samples@delcarstone.com" className="text-sm text-white/40 hover:text-white transition-colors">samples@delcarstone.com</a></li>
            <li><span className="text-sm text-white/40">Accra, Ghana</span></li>
          </ul>
        </div>
      </div>

      <div className="pt-7 flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-white/25 tracking-[0.05em]">© 2026 Delcar Stone. All rights reserved.</p>
        <p className="font-display text-sm italic text-white/20">Timeless Stone. Precision Engineering.</p>
      </div>
    </footer>
  )
}
