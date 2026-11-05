import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

// Font setup
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

// Comprehensive Metadata & OpenGraph
export const metadata: Metadata = {
  title: {
    default: 'FAOS COMMUNITY — White-Label SaaS Platform',
    template: '%s | FAOS COMMUNITY',
  },
  description: 'Self-Hosted Community & FAOS TECH Platform. Modular white-label community platform designed for creators, SaaS startups, and global networks.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://community.faos-tech.asia'),
  openGraph: {
    title: 'FAOS COMMUNITY',
    description: 'Empowering global communities with real-time analytics, spaces, and subscriptions.',
    siteName: 'FAOS COMMUNITY',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FAOS Community Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark h-full ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c10] text-white antialiased selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}