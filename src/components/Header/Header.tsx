import { useState } from 'react'
import './Header.scss'

const navigationItems = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia', 'Assinatura']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__benefits">
        <p><svg className="header__benefit-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></svg> Compra <strong>100% segura</strong></p>
        <p><svg className="header__benefit-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg> <strong>Frete grátis</strong> acima de R$ 200</p>
        <p><svg className="header__benefit-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></svg> <strong>Parcele</strong> suas compras</p>
      </div>
      <div className="header__main page-container">
        <a className="header__brand" href="#inicio"><img src={`${import.meta.env.BASE_URL}econverse-logo.svg`} alt="Econverse" /></a>
        <form className="header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="search">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar produtos"><svg className="header__icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg></button>
        </form>
        <div className="header__actions" aria-label="Atalhos da conta">
          <a href="#pedidos" aria-label="Meus pedidos"><svg className="header__icon" viewBox="2 2 20 20" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="1.5" /><path d="M3.5 10h17M12 3.5V10M15.5 15h-6m2-2-2 2 2 2" /></svg></a>
          <a href="#favoritos" aria-label="Favoritos"><svg className="header__icon" viewBox="2 2 20 20" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" /></svg></a>
          <a href="#conta" aria-label="Minha conta"><svg className="header__icon" viewBox="2 2 20 20" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3.2" /><path d="M6.3 18.6a6.5 6.5 0 0 1 11.4 0" /></svg></a>
          <a href="#carrinho" aria-label="Carrinho"><svg className="header__icon" viewBox="2 2 20 20" aria-hidden="true"><path d="M2.5 4h2.6l2.4 11h11l2-8H6" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></svg></a>
        </div>
        <button className="header__menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>☰</button>
      </div>
      <nav className={`header__navigation${menuOpen ? ' header__navigation--open' : ''}`} aria-label="Navegação principal">
        {navigationItems.map((item) => (
          <a key={item} href="#produtos" className={item === 'Ofertas do dia' ? 'header__highlight' : ''}>
            {item === 'Assinatura' ? <svg className="header__subscription-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 4 4 4-7 4 7 4-4-2 11H6zM6 21h12" /></svg> : null}
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
