import { useEffect, useRef, useState } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/format'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!product) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
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
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5" stroke="#707070" strokeWidth="2" />
          </svg>
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
                <svg width="20" height="20" viewBox="0 0 20.3077 19.6364" fill="none" aria-hidden="true">
                  <path d="M4.23047 9.81818H16.0766" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
              >
                <svg width="20" height="20" viewBox="0 0 20.3077 19.6364" fill="none" aria-hidden="true">
                  <path d="M10.1543 4.09091V15.5455" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                  <path d="M4.23047 9.81818H16.0766" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <button type="button" className="product-modal__action">Comprar</button>
          </div>
        </div>
      </section>
    </div>
  )
}
