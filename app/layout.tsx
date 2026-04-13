import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const cormorant = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Delcar Stone — Premium Architectural Stone Cladding',
  description: 'Delcar Stone supplies brochure-backed Pangolin stone cladding solutions for residential and commercial projects, from feature walls to architectural facades.',
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
