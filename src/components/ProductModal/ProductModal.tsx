import { useEffect, useRef, useState } from 'react'
import type { Product } from '../../types/product'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const formatPrice = (price: number) =>
  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!product) {
      return undefined
    }

    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, product])

  if (!product) {
    return null
  }

  return (
    <div className="product-modal-backdrop" onMouseDown={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="product-modal__close"
          aria-label="Fechar detalhes do produto"
          onClick={onClose}
        >
          ×
        </button>
        <div className="product-modal__image-wrapper">
          <img className="product-modal__image" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-modal__details">
          <h2 id="product-modal-title">{product.name}</h2>
          <strong>{formatPrice(product.price)}</strong>
          <p>{product.description}</p>
          <a className="product-modal__details-link" href="#produtos">
            Veja mais detalhes do produto &gt;
          </a>
          <div className="product-modal__purchase">
            <div className="product-modal__quantity" aria-label={`Quantidade: ${quantity}`}>
              <button
                type="button"
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
                onClick={() => setQuantity((currentQuantity) => currentQuantity - 1)}
              >
                −
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
              >
                +
              </button>
            </div>
            <button type="button" className="product-modal__action">Comprar</button>
          </div>
        </div>
      </section>
    </div>
  )
}
