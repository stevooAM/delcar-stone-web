export function ContactSection() {
  return (
    <section className="bg-stone px-[10vw] py-24" id="contact" aria-labelledby="contact-heading">
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-9 h-px bg-gold flex-shrink-0" aria-hidden="true" />
        <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">Get in Touch</span>
      </div>
      <h2 className="font-display font-light leading-[1.1] text-navy mb-14" style={{ fontSize: 'clamp(36px, 4vw, 60px)' }} id="contact-heading">
        Start your <em className="text-gold">project</em> today.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <p className="text-base font-light leading-[1.75] text-grey max-w-[560px] mb-9">
            Whether you&apos;re specifying for a residential renovation or a large commercial development, our team is ready to advise on the right collection, colour, and quantity for your project.
          </p>
          {[
            { label: 'Enquiries', value: 'info@delcarstone.com' },
            { label: 'Sample Requests', value: 'samples@delcarstone.com' },
            { label: 'Location', value: 'Accra, Ghana' },
          ].map(({ label, value }) => (
            <div key={label} className="py-5 border-b border-stone-dark">
              <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-1">{label}</div>
              <div className="text-[15px] text-charcoal font-light">{value}</div>
            </div>
          ))}
        </div>

        {/* Right — Form */}
        <form className="flex flex-col gap-4" noValidate aria-label="Enquiry form">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-[11px] font-medium tracking-[0.2em] uppercase text-grey">Full Name *</label>
              <input id="fullName" name="fullName" type="text" required placeholder="David Mensah" autoComplete="name"
                className="bg-white border border-gold/20 rounded-[2px] px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-[11px] font-medium tracking-[0.2em] uppercase text-grey">Company</label>
              <input id="company" name="company" type="text" placeholder="Studio Name" autoComplete="organization"
                className="bg-white border border-gold/20 rounded-[2px] px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[11px] font-medium tracking-[0.2em] uppercase text-grey">Email *</label>
              <input id="email" name="email" type="email" required placeholder="you@studio.com" autoComplete="email"
                className="bg-white border border-gold/20 rounded-[2px] px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[11px] font-medium tracking-[0.2em] uppercase text-grey">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+233 XX XXX XXXX" autoComplete="tel"
                className="bg-white border border-gold/20 rounded-[2px] px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="collection" className="text-[11px] font-medium tracking-[0.2em] uppercase text-grey">Collection of Interest</label>
            <select id="collection" name="collection" className="bg-white border border-gold/20 rounded-[2px] px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
              <option value="">Select a collection...</option>
              <optgroup label="Modular Series"><option value="volantis">Volantis</option><option value="roldos">Roldos</option><option value="mujica">Mujica</option><option value="maya">Maya</option></optgroup>
              <optgroup label="Natural Stone"><option value="paterno">Paterno</option><option value="gravenwood">Gravenwood</option><option value="mount-leuser">Mount Leuser</option><option value="travertino">Travertino</option></optgroup>
              <optgroup label="Irregular Series"><option value="herrera">Herrera</option><option value="lumumba">Lumumba</option><option value="atacama">Atacama</option></optgroup>
              <optgroup label="Brick Series"><option value="the-glade">The Glade</option><option value="java">Java</option><option value="kalahari">Kalahari</option></optgroup>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[11px] font-medium tracking-[0.2em] uppercase text-grey">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..."
              className="bg-white border border-gold/20 rounded-[2px] px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors resize-vertical" />
          </div>
          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="privacy" name="privacy" required className="mt-0.5 accent-gold" />
            <label htmlFor="privacy" className="text-[13px] text-grey leading-relaxed cursor-pointer">
              I agree to the processing of my personal data in accordance with Delcar Stone&apos;s Privacy Policy.
            </label>
          </div>
          <button type="submit"
            className="self-start inline-flex items-center gap-2.5 bg-navy text-white font-body text-[13px] font-medium tracking-[0.1em] uppercase px-9 py-4 rounded-[2px] hover:bg-navy-light transition-colors cursor-pointer border-none">
            Send Enquiry
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </form>
      </div>
    </section>
  )
}
