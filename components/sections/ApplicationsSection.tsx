import Image from 'next/image'

const apps = [
  {
    id: 'exterior',
    image: '/images/exterior.jpg',
    title: 'Exterior Facades',
    subtitle: 'Weather-resistant cladding for architectural exteriors',
    series: ['Volantis', 'Paterno', 'Herrera'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><path d="M3 21V9l9-7 9 7v12"/><path d="M9 21V12h6v9"/></svg>,
  },
  {
    id: 'interior',
    image: '/images/interior.jpg',
    title: 'Interior Feature Walls',
    subtitle: 'Statement surfaces for living spaces and lobbies',
    series: ['Gravenwood', 'Roldos', 'Travertino'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18" strokeLinecap="round"/></svg>,
  },
  {
    id: 'commercial',
    image: '/images/irregular.jpg',
    title: 'Commercial & Hospitality',
    subtitle: 'Bold, enduring presence for public spaces',
    series: ['Maya', 'Persia', 'Atacama'],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true"><path d="M2 22V8l10-6 10 6v14"/><path d="M6 22V14h4v8M14 22V14h4v8"/><path d="M2 12h20"/></svg>,
  },
]

export function ApplicationsSection() {
  return (
    <section className="bg-stone py-24 overflow-hidden" id="projects" aria-labelledby="applications-heading">
      <div className="px-[10vw] mb-14">
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">Applications</span>
        </div>
        <h2 className="font-display font-light leading-[1.1] text-navy mb-5" style={{ fontSize: 'clamp(36px, 4vw, 60px)' }} id="applications-heading">
          Stone in every <em className="text-gold">context.</em>
        </h2>
        <p className="text-base font-light leading-[1.75] text-grey max-w-[560px]">
          From dramatic exterior facades to refined interior feature walls and landmark commercial spaces.
        </p>
      </div>

      <div className="flex gap-0.5 px-[10vw] overflow-x-auto snap-x snap-mandatory scrollbar-none">
        {apps.map(app => (
          <article
            key={app.id}
            className="relative flex-none w-[380px] aspect-[3/4] overflow-hidden snap-start cursor-pointer group"
            tabIndex={0}
            aria-label={`${app.title} applications`}
          >
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              sizes="380px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-10 h-10 border border-gold/40 rounded-[2px] flex items-center justify-center mb-4" aria-hidden="true">{app.icon}</div>
              <h3 className="font-display text-[28px] font-medium text-white">{app.title}</h3>
              <p className="text-[13px] text-white/50 mt-1.5">{app.subtitle}</p>
              <div className="flex gap-2 mt-3.5 flex-wrap">
                {app.series.map(s => (
                  <span key={s} className="text-[10px] tracking-[0.15em] uppercase text-gold-bright border border-gold/30 px-2 py-0.5 rounded-[1px]">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
