import type { Product } from '../../types/product'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

const formatPrice = (price: number) =>
  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const previousPrice = product.price * 1.07
  const installmentPrice = product.price / 2

  return (
    <article className="product-card">
      <button type="button" className="product-card__content" onClick={() => onSelect(product)}>
        <img className="product-card__image" src={product.imageUrl} alt={product.name} />
        <h3 className="product-card__title">{product.name}</h3>
        <span className="product-card__previous-price">{formatPrice(previousPrice)}</span>
        <strong className="product-card__price">{formatPrice(product.price)}</strong>
        <span className="product-card__installments">ou 2x de {formatPrice(installmentPrice)} sem juros</span>
        <span className="product-card__shipping">Frete grátis</span>
      </button>
      <button type="button" className="product-card__action" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}
