import './PartnerBanners.scss'

export function PartnerBanners() {
  return <section className="partner-banners page-container" aria-label="Parceiros Econverse">
    {[1, 2].map((partner) => <article key={partner} className="partner-banners__item">
      <h2>Parceiros</h2><p>Conheça ofertas especiais dos nossos parceiros.</p><a href="#produtos">Confira</a>
    </article>)}
  </section>
}
