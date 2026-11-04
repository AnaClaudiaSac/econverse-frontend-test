import { useState } from 'react'
import { CreditCardIcon, CrownSimpleIcon, HeartIcon, MagnifyingGlassIcon, OrdersIcon, ShieldCheckIcon, ShoppingCartIcon, TruckIcon, UserCircleIcon } from '../Icons/Icons'
import './Header.scss'

const navigationItems = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia', 'Assinatura']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__benefits">
        <p><ShieldCheckIcon className="header__benefit-icon" />Compra <strong>100% segura</strong></p>
        <p><TruckIcon className="header__benefit-icon" /><strong>Frete grátis</strong> acima de R$ 200</p>
        <p><CreditCardIcon className="header__benefit-icon" /><strong>Parcele</strong> suas compras</p>
      </div>
      <div className="header__main page-container">
        <a className="header__brand" href="#inicio"><img src={`${import.meta.env.BASE_URL}econverse-logo.svg`} alt="Econverse" /></a>
        <form className="header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="search">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar produtos"><MagnifyingGlassIcon className="header__search-icon" /></button>
        </form>
        <div className="header__actions" aria-label="Atalhos da conta">
          <a href="#pedidos" aria-label="Meus pedidos"><OrdersIcon className="header__action-icon header__action-icon--orders" /></a>
          <a href="#favoritos" aria-label="Favoritos"><HeartIcon className="header__action-icon" /></a>
          <a href="#conta" aria-label="Minha conta"><UserCircleIcon className="header__action-icon" /></a>
          <a href="#carrinho" aria-label="Carrinho"><ShoppingCartIcon className="header__action-icon" /></a>
        </div>
        <button className="header__menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>☰</button>
      </div>
      <nav className={`header__navigation${menuOpen ? ' header__navigation--open' : ''}`} aria-label="Navegação principal">
        {navigationItems.map((item) => (
          <a key={item} href="#produtos" className={item === 'Ofertas do dia' ? 'header__highlight' : ''}>
            {item === 'Assinatura' ? <CrownSimpleIcon className="header__subscription-icon" /> : null}
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
