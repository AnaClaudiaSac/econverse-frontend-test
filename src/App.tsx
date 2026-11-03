import { useEffect, useState } from 'react'
import { CategoryNav } from './components/CategoryNav/CategoryNav'
import { Header } from './components/Header/Header'
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
        <section className="hero" aria-label="Ofertas Black Friday">
          <div className="page-container hero__content">
            <h1>Venha conhecer nossas promoções</h1>
            <p><strong>50% Off</strong> nos produtos</p>
            <a href="#produtos">Ver produtos</a>
          </div>
        </section>

        <CategoryNav />

        <div className="page-container">
          {error ? <p className="feedback feedback--error">{error}</p> : null}
          {!error && products.length === 0 ? <p className="feedback">Carregando produtos...</p> : null}
          {products.length > 0 ? (
            <div id="produtos">
              <ProductGrid products={products.slice(0, 4)} title="Produtos relacionados" onSelect={setSelectedProduct} />
              <PartnerBanners />
              <section className="brands" aria-labelledby="brands-title">
                <h2 id="brands-title" className="section-title">Navegue por marcas</h2>
                <div className="brands__list">
                  {Array.from({ length: 5 }, (_, index) => (
                    <a key={index} href="#produtos" className="brand-chip" aria-label="Marca Econverse">
                      <img src={`${import.meta.env.BASE_URL}econverse-logo.png`} alt="Econverse" />
                    </a>
                  ))}
                </div>
              </section>
              <ProductGrid
                products={products.slice(4, 8)}
                title="Produtos relacionados"
                onSelect={setSelectedProduct}
                showTabs={false}
              />
            </div>
          ) : null}
        </div>
      </main>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="newsletter__content page-container">
          <div>
            <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="newsletter__form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-name">Seu nome</label>
            <input id="newsletter-name" type="text" placeholder="Digite seu nome" />
            <label className="sr-only" htmlFor="newsletter-email">Seu e-mail</label>
            <input id="newsletter-email" type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Inscrever</button>
            <label className="newsletter__terms">
              <input type="checkbox" />
              Aceito os termos e condições
            </label>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__content page-container">
          <section className="footer-brand">
            <a className="brand--footer" href="#inicio"><img src={`${import.meta.env.BASE_URL}econverse-logo.png`} alt="Econverse" /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <nav className="footer-social" aria-label="Redes sociais">
              <a href="#instagram" aria-label="Instagram">◎</a>
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#linkedin" aria-label="LinkedIn">in</a>
            </nav>
          </section>
          <section className="footer-links" aria-labelledby="institutional-title">
            <h2 id="institutional-title">Institucional</h2>
            <a href="#sobre">Sobre Nós</a>
            <a href="#movimento">Movimento</a>
            <a href="#trabalhe-conosco">Trabalhe conosco</a>
          </section>
          <section className="footer-links" aria-labelledby="help-title">
            <h2 id="help-title">Ajuda</h2>
            <a href="#suporte">Suporte</a>
            <a href="#fale-conosco">Fale Conosco</a>
            <a href="#perguntas">Perguntas Frequentes</a>
          </section>
          <section className="footer-links" aria-labelledby="terms-title">
            <h2 id="terms-title">Termos</h2>
            <a href="#termos">Termos e Condições</a>
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#troca">Troca e Devolução</a>
          </section>
        </div>
      </footer>

      <ProductModal
        key={selectedProduct?.id ?? 'closed'}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default App
