import './PartnerBanners.scss'

export function PartnerBanners() {
  return (
    <section className="partner-banners page-container" aria-label="Parceiros Econverse">
      <a className="partner-banners__link" href="#produtos" aria-label="Confira os produtos dos parceiros">
        <img
          src={`${import.meta.env.BASE_URL}partner-banners.png`}
          alt="Parceiros: duas vitrines de loja com o botão Confira"
        />
      </a>
    </section>
  )
}
