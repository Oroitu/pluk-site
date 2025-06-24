// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Unbounded } from 'next/font/google'
import { Fira_Sans } from 'next/font/google'

// 1. Fuentes ──────────────────────────────────────────
const headingFont = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['600', '700', '800'],
})

const bodyFont = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500'],
})

// 2. Metadatos globales ───────────────────────────────
export const metadata = {
  title: {
    default: 'PLUK | Metal / Rock / Nu-Metal',
    template: '%s | PLUK',
  },
  description:
    'Sitio oficial de PLUK — metal / rock / nu-metal desde Euskal Herria.',
  metadataBase: new URL('https://pluk.band'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pluk.band',
    title: 'PLUK | Metal / Rock / Nu-Metal',
    description:
      'Descubre la música, vídeos, fechas y merchandising oficiales de PLUK.',
    siteName: 'PLUK',
  },
}

// 3. RootLayout ───────────────────────────────────────
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${headingFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-pluk-bg text-pluk-light antialiased">
        {children}
      </body>
    </html>
  )
}
