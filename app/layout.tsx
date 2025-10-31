import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProCraft Closets | Custom Closet Organization Solutions in Seattle, WA',
  description: 'Professional custom closet design and installation services in Seattle, Washington. Transform your storage with expertly crafted closet organization systems, walk-in closets, and home storage solutions.',
  keywords: 'custom closets Seattle, closet organization, walk-in closets, closet design, storage solutions, Seattle WA, closet installation',
  authors: [{ name: 'ProCraft Closets' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ProCraft Closets | Custom Closet Solutions in Seattle',
    description: 'Professional custom closet design and installation services in Seattle, WA. Expert storage solutions for your home.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ProCraft Closets'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://procraftclosets.com" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}