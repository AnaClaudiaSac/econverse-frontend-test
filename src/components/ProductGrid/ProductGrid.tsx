import { useId } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import type { Product } from '../../types/product'
import './ProductGrid.scss'

interface ProductGridProps {
  products: Product[]
  title: string
  onSelect: (product: Product) => void
}

export function ProductGrid({ products, title, onSelect }: ProductGridProps) {
  const titleId = useId()

  return (
    <section className="product-grid-section" aria-labelledby={titleId}>
      <div className="product-grid-section__heading">
        <span aria-hidden="true" />
        <div>
          <h2 id={titleId}>{title}</h2>
          <a href="#produtos">Ver todos</a>
        </div>
        <span aria-hidden="true" />
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
