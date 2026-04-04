const cards = [
  {
    num: '01',
    title: 'Precision Engineering',
    text: 'Modular dimensions engineered for seamless installation and visual continuity. Every panel is precisely proportioned to ensure design freedom across projects of any scale.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
        <path d="M8 40L8 24L24 8L40 24L40 40"/><path d="M18 40V30H30V40"/><path d="M4 24H44"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Natural Aesthetics',
    text: 'Each surface carries the authentic character of natural stone — textural variations, organic colour transitions, and the quiet beauty of materials formed over millennia.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" width="48" height="48" aria-hidden="true">
        <circle cx="24" cy="24" r="16"/><path d="M12 24C12 17.4 17.4 12 24 12"/><path d="M24 8V12M24 36V40M40 24H36M12 24H8"/><circle cx="24" cy="24" r="4"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Easy Installation',
    text: 'Corner modules available across most series. Lightweight veneers with standardised joints ensure rapid, reliable installation for residential and commercial projects alike.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
        <path d="M8 40H40M16 40V24M24 40V16M32 40V28"/><path d="M8 16L24 8L40 16"/>
      </svg>
    ),
  },
]

export function WhySection() {
  return (
    <section className="bg-dark px-[10vw] py-24" aria-labelledby="why-heading">
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
        <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold-bright">Why Delcar Stone</span>
      </div>
      <h2 className="font-display font-light leading-[1.1] text-white mb-14" style={{ fontSize: 'clamp(36px, 4vw, 60px)' }} id="why-heading">
        Crafted for <em className="text-gold-bright italic">architecture.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {cards.map(({ num, title, text, icon }) => (
          <div key={num} className="relative bg-dark-2 p-12 overflow-hidden group hover:bg-[#1a1510] transition-colors duration-300">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            <div className="mb-7">{icon}</div>
            <h3 className="font-display text-2xl font-medium text-white mb-4">{title}</h3>
            <p className="text-sm font-light leading-[1.75] text-white/50">{text}</p>
            <div className="absolute bottom-6 right-7 font-mono text-[64px] text-white/[0.03] leading-none pointer-events-none" aria-hidden="true">{num}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
