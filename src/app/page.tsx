// app/page.tsx
// Página de inicio (Landing) — Next.js 14 / App Router
// Importa componentes que iremos creando paso a paso.

import { Suspense } from 'react'
import HeroWater from '@/components/HeroWater'

// ——— Placeholders (se irán reemplazando por componentes reales) ———
// Puedes comentar estas importaciones si prefieres escribir el markup
// directamente en este archivo al inicio.
import NextSingle from '@/components/NextSingle'
import UpcomingShows from '@/components/UpcomingShows'
import VideoCarousel from '@/components/VideoCarousel'
import MerchPreview from '@/components/MerchPreview'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'PLUK • Official Site',
  description:
    'Metal / Rock / Nu Metal desde Euskadi – escucha nuestro último single, fechas de gira y merchandising.',
  openGraph: {
    title: 'PLUK • Official Site',
    images: ['/assets/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      {/* HERO — efecto "emergiendo del agua" */}
      <Suspense fallback={<div className="h-screen w-full bg-pluk-bg" />}>
        <HeroWater />
      </Suspense>

      {/* MAIN CONTENT */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 font-body text-pluk-light">
        {/* Último single */}
        <section id="single" className="py-24 md:py-32">
          {/* `NextSingle` mostrará portada, player y CTA */}
          <NextSingle />
        </section>

        {/* Próximas fechas (limit 3) */}
        <section id="fechas" className="py-24 md:py-32">
          <UpcomingShows limit={3} />
        </section>

        {/* Vídeos */}
        <section id="videos" className="py-24 md:py-32">
          <VideoCarousel />
        </section>

        {/* Merch */}
        <section id="merch" className="py-24 md:py-32">
          <MerchPreview limit={3} />
        </section>
      </main>

      {/* Footer con selector ES/EU, redes y créditos */}
      <Footer />
    </>
  )
}
