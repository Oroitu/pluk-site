import { Unbounded } from 'next/font/google'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
})
const fira = Fira_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
})

export const metadata = {
  title: 'PLUK — Official Site',
  description: 'Sitio oficial de la banda PLUK (metal/rock/nu-metal) — descubre música, fechas y merch.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${unbounded.variable} ${fira.variable}`}>
      <body className="font-body bg-pluk-bg text-pluk-light antialiased">
        {children}
      </body>
    </html>
  )
}
