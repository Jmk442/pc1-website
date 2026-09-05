import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import UtmCapture from '@/components/UtmCapture'
import { seo } from '@/data/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: seo.homeTitle,
  description: seo.homeDescription,
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: seo.homeTitle,
    description: seo.homeDescription,
    type: 'website',
    locale: 'en',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd />
        <UtmCapture />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
