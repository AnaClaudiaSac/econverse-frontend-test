import { useState } from 'react'
import './Header.scss'

const navigationItems = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia', 'Assinatura']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__benefits">
        <p>🛡️ Compra <strong>100% segura</strong></p>
        <p>🚚 <strong>Frete grátis</strong> acima de R$ 200</p>
        <p>▣ <strong>Parcele</strong> suas compras</p>
      </div>
      <div className="header__main page-container">
        <a className="header__brand" href="#inicio"><span>eco</span>nverse</a>
        <form className="header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="search">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar produtos">⌕</button>
        </form>
        <div className="header__actions" aria-label="Atalhos da conta">
          <a href="#pedidos" aria-label="Meus pedidos">▱</a>
          <a href="#favoritos" aria-label="Favoritos">♡</a>
          <a href="#conta" aria-label="Minha conta">◎</a>
          <a href="#carrinho" aria-label="Carrinho">🛒</a>
        </div>
        <button className="header__menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>☰</button>
      </div>
      <nav className={`header__navigation${menuOpen ? ' header__navigation--open' : ''}`} aria-label="Navegação principal">
        {navigationItems.map((item) => <a key={item} href="#produtos" className={item === 'Ofertas do dia' ? 'header__highlight' : ''}>{item}</a>)}
      </nav>
    </header>
  )
}
