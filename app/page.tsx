import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { CollectionsSection } from '@/components/sections/CollectionsSection'
import { FeaturedSection } from '@/components/sections/FeaturedSection'
import { WhySection } from '@/components/sections/WhySection'
import { ApplicationsSection } from '@/components/sections/ApplicationsSection'
import { CatalogueStrip } from '@/components/sections/CatalogueStrip'
import { CTASection } from '@/components/sections/CTASection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsStrip />
        <CollectionsSection />
        <FeaturedSection />
        <WhySection />
        <ApplicationsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
