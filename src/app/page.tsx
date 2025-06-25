import HeroWater from '@/components/HeroWater'

export const metadata = {
  title: 'PLUK — Official Site',
  description: 'Sitio oficial de la banda PLUK (metal/rock/nu‑metal) — descubre música, fechas y merch.',
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-pluk-bg">
      {/* Hero "emergiendo del agua"  */}
      <HeroWater />

      {/* Placeholder de contenido de la landing */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-5xl md:text-6xl text-pluk-light mb-6">
          ¡Bienvenid@ al universo&nbsp;
          <span className="text-pluk-main">PLUK</span>!
        </h1>
        <p className="font-body text-lg md:text-xl text-pluk-light/90 max-w-3xl mx-auto">
          Descubre nuestra música, próximos conciertos y merchandising exclusivo. Desplázate o
          navega por el menú para sumergirte en nuestra energía.
        </p>
      </section>
    </main>
  )
}
