import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Delcar Stone — Premium Architectural Stone Cladding',
  description: 'Delcar Stone supplies premium architectural stone cladding panels for residential and commercial projects. Seven collections, 30+ products, 20+ colour variants.',
  keywords: 'stone cladding panels, architectural stone facade, exterior stone cladding Ghana, stone feature wall',
  openGraph: {
    title: 'Delcar Stone — Where Stone Meets Architecture',
    description: 'Premium architectural stone cladding panels for facades, feature walls, and exterior cladding.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-body bg-stone text-charcoal antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
