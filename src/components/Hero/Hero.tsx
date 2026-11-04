import './Hero.scss'

export function Hero() {
  return (
    <section className="hero" aria-label="Ofertas Black Friday">
      <div className="page-container hero__content">
        <h1>Venha conhecer nossas<br />promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <a href="#produtos">Ver produto</a>
      </div>
    </section>
  )
}
