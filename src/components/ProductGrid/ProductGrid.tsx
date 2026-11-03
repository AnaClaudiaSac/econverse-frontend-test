import { useId, useRef, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import type { Product } from '../../types/product'
import './ProductGrid.scss'

interface ProductGridProps {
  products: Product[]
  title: string
  onSelect: (product: Product) => void
  showTabs?: boolean
  showViewAll?: boolean
}

const tabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export function ProductGrid({ products, title, onSelect, showTabs = true, showViewAll = !showTabs }: ProductGridProps) {
  const titleId = useId()
  const tabListId = useId()
  const [activeTab, setActiveTab] = useState(tabs[0])
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'next' | 'previous') => {
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.scrollBy({ left: direction === 'next' ? carousel.clientWidth : -carousel.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="product-grid-section" aria-labelledby={titleId}>
      <div className="product-grid-section__heading">
        <span aria-hidden="true" />
        <div>
          <h2 id={titleId}>{title}</h2>
          {showViewAll ? <a href="#produtos">Ver todos</a> : null}
        </div>
        <span aria-hidden="true" />
      </div>
      {showTabs ? (
        <div className="product-grid__tabs" role="tablist" aria-label="Tipos de produtos">
          {tabs.map((tab) => <button key={tab} id={`${tabListId}-${tab}`} role="tab" type="button" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</button>)}
        </div>
      ) : null}
      <div className="product-carousel">
        <button type="button" className="product-carousel__control product-carousel__control--previous" aria-label="Produtos anteriores" onClick={() => scrollCarousel('previous')}>‹</button>
        <div ref={carouselRef} className="product-grid" role="tabpanel" aria-labelledby={showTabs ? `${tabListId}-${activeTab}` : titleId}>
          {products.map((product) => <ProductCard key={product.id} product={product} onSelect={onSelect} />)}
        </div>
        <button type="button" className="product-carousel__control product-carousel__control--next" aria-label="Próximos produtos" onClick={() => scrollCarousel('next')}>›</button>
      </div>
    </section>
  )
}
