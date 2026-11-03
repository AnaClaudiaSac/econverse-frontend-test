import { useEffect, useState } from 'react'
import { ProductGrid } from './components/ProductGrid/ProductGrid'
import { ProductModal } from './components/ProductModal/ProductModal'
import { getProducts } from './services/products'
import type { Product } from './types/product'
import './App.scss'

const categories = [
  { label: 'Tecnologia', icon: '▣' },
  { label: 'Supermercado', icon: '⌂' },
  { label: 'Bebidas', icon: '♧' },
  { label: 'Ferramentas', icon: '⚒' },
  { label: 'Saúde', icon: '♡' },
  { label: 'Esportes e Fitness', icon: '♙' },
  { label: 'Moda', icon: '♢' },
]

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
      <header className="site-header">
        <div className="benefits-bar">
          <div className="page-container benefits-bar__content">
            <p><span aria-hidden="true">♢</span> Compra <strong>100% segura</strong></p>
            <p><span aria-hidden="true">▣</span> <strong>Frete grátis</strong> acima de R$ 200</p>
            <p><span aria-hidden="true">▤</span> <strong>Parcele</strong> suas compras</p>
          </div>
        </div>
        <div className="site-header__content page-container">
          <a className="brand" href="#inicio" aria-label="Econverse, página inicial">
            <span>eco</span>nverse
          </a>
          <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="search-input">Buscar produtos</label>
            <input id="search-input" type="search" placeholder="O que você está buscando?" />
            <button type="submit" aria-label="Buscar">⌕</button>
          </form>
          <nav className="header-links" aria-label="Atalhos da conta">
            <a href="#pedidos" aria-label="Meus pedidos">▱</a>
            <a href="#favoritos" aria-label="Favoritos">♡</a>
            <a href="#conta" aria-label="Minha conta">◎</a>
            <a href="#carrinho" aria-label="Carrinho">🛒</a>
          </nav>
        </div>
        <nav className="main-navigation" aria-label="Categorias principais">
          <div className="page-container main-navigation__content">
            <a href="#produtos">Todas categorias</a>
            <a href="#produtos">Supermercado</a>
            <a href="#produtos">Livros</a>
            <a href="#produtos">Moda</a>
            <a href="#produtos">Lançamentos</a>
            <a className="main-navigation__highlight" href="#produtos">Ofertas do dia</a>
            <a href="#produtos">♔ Assinatura</a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" aria-label="Ofertas Black Friday">
          <div className="page-container hero__content">
            <h1>Venha conhecer nossas promoções</h1>
            <p><strong>50% Off</strong> nos produtos</p>
            <a href="#produtos">Ver produtos</a>
          </div>
        </section>

        <nav className="categories page-container" aria-label="Categorias de produtos">
          {categories.map((category, index) => (
            <a
              key={category.label}
              href="#produtos"
              className={`category-link${index === 0 ? ' category-link--active' : ''}`}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.label}
            </a>
          ))}
        </nav>

        <div className="page-container">
          {error ? <p className="feedback feedback--error">{error}</p> : null}
          {!error && products.length === 0 ? <p className="feedback">Carregando produtos...</p> : null}
          {products.length > 0 ? (
            <div id="produtos">
              <ProductGrid products={products.slice(0, 4)} title="Produtos selecionados" onSelect={setSelectedProduct} />
              <section className="partner-banners" aria-label="Parceiros Econverse">
                <article className="partner-banner">
                  <h2>Parceiros</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <a href="#produtos">Confira</a>
                </article>
                <article className="partner-banner">
                  <h2>Parceiros</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <a href="#produtos">Confira</a>
                </article>
              </section>
              <ProductGrid products={products.slice(4, 8)} title="Produtos selecionados" onSelect={setSelectedProduct} />
              <section className="brands" aria-labelledby="brands-title">
                <h2 id="brands-title" className="section-title">Navegue por marcas</h2>
                <div className="brands__list">
                  {Array.from({ length: 5 }, (_, index) => (
                    <a key={index} href="#produtos" className="brand-chip" aria-label="Marca Econverse">
                      <span><b>eco</b>nverse</span>
                    </a>
                  ))}
                </div>
              </section>
              <ProductGrid products={products.slice(8)} title="Produtos selecionados" onSelect={setSelectedProduct} />
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
            <a className="brand brand--footer" href="#inicio"><span>eco</span>nverse</a>
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
