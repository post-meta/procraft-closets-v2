import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProCraft Closets - Custom Closet Solutions in Seattle, WA',
  description: 'Transform your home with custom closet designs from ProCraft Closets. Professional closet organization and storage solutions serving Seattle, Washington and surrounding areas.',
  keywords: 'custom closets, closet organization, storage solutions, Seattle, Washington, home organization, walk-in closets, reach-in closets',
  authors: [{ name: 'ProCraft Closets' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ProCraft Closets - Custom Closet Solutions in Seattle, WA',
    description: 'Transform your home with custom closet designs from ProCraft Closets. Professional closet organization and storage solutions serving Seattle, Washington.',
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}