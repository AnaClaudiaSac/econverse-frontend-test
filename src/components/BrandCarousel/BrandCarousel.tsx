import './BrandCarousel.scss'

// Figma: 5 marcas de 211px com 42px entre elas, sem setas.
const brandCount = 5

export function BrandCarousel() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="section-title">Navegue por marcas</h2>
      <div className="brands__list">
        {Array.from({ length: brandCount }, (_, index) => (
          <a key={index} href="#produtos" className="brand-chip" aria-label="Marca Econverse">
            <img src={`${import.meta.env.BASE_URL}econverse-logo.svg`} alt="Econverse" />
          </a>
        ))}
      </div>
    </section>
  )
}
