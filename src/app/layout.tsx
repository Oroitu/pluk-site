/**
 * Root layout of the PLUK website (Next.js 14 App Router).
 * - Loads custom fonts (Unbounded & Fira Sans).
 * - Sets global <html> / <body> classes for color scheme and typography.
 * - Wraps every route with common providers (i18n in future).
 */

import './globals.css'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

// Local font files stored in /public/fonts
const unbounded = localFont({
  src: [
    {
      path: '../public/fonts/Unbounded-SemiExpanded.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-heading',
})

const fira = localFont({
  src: [
    {
      path: '../public/fonts/FiraSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FiraSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-body',
})

export const metadata = {
  title: {
    template: '%s | PLUK',
    default: 'PLUK — Official Site',
  },
  description:
    'Sitio oficial de la banda PLUK (metal/rock/nu‑metal): música, conciertos y merchandising.',
  metadataBase: new URL('https://pluk.band'),
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${unbounded.variable} ${fira.variable} scroll-smooth`}
    >
      <body className="font-body bg-pluk-bg text-pluk-light antialiased">
        {/* Global Site Header / Navigation vendrá más adelante */}
        {children}
        {/* Footer global vendrá aquí */}
      </body>
    </html>
  )
}
