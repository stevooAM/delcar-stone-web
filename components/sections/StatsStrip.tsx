export function StatsStrip() {
  const stats = [
    { num: '7', label: 'Signature Collections' },
    { num: '30+', label: 'Stone Products' },
    { num: '20+', label: 'Colour Variants' },
    { num: '✓', label: 'Corner Modules Available' },
  ]

  return (
    <section className="bg-navy relative overflow-hidden" aria-label="Key statistics">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ num, label }) => (
          <div key={label} className="text-center px-8 border-r border-white/[0.08] last:border-r-0">
            <span className="font-display text-5xl font-semibold text-gold-bright leading-none block">{num}</span>
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/55 mt-2 block">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
