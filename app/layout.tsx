import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Playfair_Display } from 'next/font/google';
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pink Lotus Hotel - Luxury Hospitality',
  description: 'Experience unparalleled luxury at Pink Lotus Hotel. World-class amenities, fine dining, and exceptional service in the heart of the city.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}
const playfair = Playfair_Display({
  weight: ['400', '700'], // light and bold
  subsets: ['latin'],
  variable: '--font-playfair',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body 
              className={`font-sans  ${playfair.variable} antialiased`}

      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
