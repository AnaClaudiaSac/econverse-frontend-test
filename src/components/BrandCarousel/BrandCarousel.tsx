import { useRef } from 'react'
import './BrandCarousel.scss'

const brandCount = 7

export function BrandCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'next' | 'previous') => {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.scrollBy({
      left: direction === 'next' ? carousel.clientWidth : -carousel.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="section-title">Navegue por marcas</h2>
      <div className="brand-carousel">
        <button
          type="button"
          className="brand-carousel__control brand-carousel__control--previous"
          aria-label="Marcas anteriores"
          onClick={() => scrollCarousel('previous')}
        >
          ‹
        </button>
        <div ref={carouselRef} className="brands__list">
          {Array.from({ length: brandCount }, (_, index) => (
            <a key={index} href="#produtos" className="brand-chip" aria-label="Marca Econverse">
              <img src={`${import.meta.env.BASE_URL}econverse-logo.svg`} alt="Econverse" />
            </a>
          ))}
        </div>
        <button
          type="button"
          className="brand-carousel__control brand-carousel__control--next"
          aria-label="Próximas marcas"
          onClick={() => scrollCarousel('next')}
        >
          ›
        </button>
      </div>
    </section>
  )
}
