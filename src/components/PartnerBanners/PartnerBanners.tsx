import './PartnerBanners.scss'

const banners = [1, 2]

// Figma: dois banners de 634 × 350 com texto e botão em HTML sobre a foto.
export function PartnerBanners() {
  return (
    <section className="partner-banners" aria-label="Parceiros Econverse">
      {banners.map((banner) => (
        <article key={banner} className="partner-banner">
          <img
            className="partner-banner__image"
            src={`${import.meta.env.BASE_URL}partner-banner-bg.webp`}
            alt=""
            loading="lazy"
          />
          <div className="partner-banner__content">
            <h2 className="partner-banner__title">Parceiros</h2>
            <p className="partner-banner__text">Lorem ipsum dolor sit amet, consectetur</p>
            <a className="partner-banner__button" href="#produtos">Confira</a>
          </div>
        </article>
      ))}
    </section>
  )
}
