import { useEffect, useState } from 'react'
import { BrandCarousel } from './components/BrandCarousel/BrandCarousel'
import { CategoryNav } from './components/CategoryNav/CategoryNav'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Newsletter } from './components/Newsletter/Newsletter'
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners'
import { ProductGrid } from './components/ProductGrid/ProductGrid'
import { ProductModal } from './components/ProductModal/ProductModal'
import { getProducts } from './services/products'
import type { Product } from './types/product'
import './App.scss'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setProducts(await getProducts())
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Ocorreu um erro inesperado.')
      }
    }

    void loadProducts()
  }, [])

  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />

        <CategoryNav />

        <div className="page-container">
          {error ? <p className="feedback feedback--error">{error}</p> : null}
          {!error && products.length === 0 ? <p className="feedback">Carregando produtos...</p> : null}
          {products.length > 0 ? (
            <div id="produtos">
              <ProductGrid products={products} title="Produtos relacionados" onSelect={setSelectedProduct} />
              <PartnerBanners />
              <ProductGrid
                products={products}
                title="Produtos relacionados"
                onSelect={setSelectedProduct}
                showTabs={false}
              />
              <PartnerBanners />
              <BrandCarousel />
              <ProductGrid
                products={products}
                title="Produtos relacionados"
                onSelect={setSelectedProduct}
                showTabs={false}
              />
            </div>
          ) : null}
        </div>
      </main>

      <Newsletter />
      <Footer />

      <ProductModal
        key={selectedProduct?.id ?? 'closed'}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default App
