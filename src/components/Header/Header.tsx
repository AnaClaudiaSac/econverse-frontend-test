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
            {item === 'Assinatura' ? <svg className="header__subscription-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3.52571 15.3137C3.54519 15.3959 3.58109 15.4732 3.63126 15.5412C3.68142 15.6091 3.7448 15.6662 3.8176 15.7089C3.89039 15.7517 3.97108 15.7793 4.05483 15.7901C4.13857 15.8009 4.22363 15.7947 4.30489 15.7717C8.03061 14.743 11.9654 14.7426 15.6913 15.7706C15.7725 15.7935 15.8576 15.7998 15.9413 15.789C16.025 15.7782 16.1056 15.7506 16.1784 15.7079C16.2512 15.6651 16.3146 15.6081 16.3647 15.5402C16.4149 15.4723 16.4508 15.395 16.4703 15.3129L18.4616 6.8506C18.4883 6.73732 18.4828 6.61884 18.4457 6.50851C18.4087 6.39818 18.3416 6.30039 18.252 6.22615C18.1623 6.1519 18.0538 6.10415 17.9385 6.08828C17.8232 6.07241 17.7057 6.08904 17.5994 6.13631L13.6475 7.89269C13.5048 7.95611 13.3436 7.96382 13.1955 7.91429C13.0474 7.86476 12.9232 7.76159 12.8474 7.62508L10.5464 3.48334C10.4923 3.38591 10.4131 3.30472 10.317 3.2482C10.2209 3.19167 10.1115 3.16187 10 3.16187C9.88857 3.16187 9.77914 3.19167 9.68308 3.2482C9.58701 3.30472 9.50781 3.38591 9.45368 3.48334L7.15272 7.62508C7.07688 7.76159 6.95269 7.86476 6.8046 7.91429C6.6565 7.96381 6.49523 7.95611 6.35253 7.89269L2.40008 6.13604C2.29375 6.08878 2.17634 6.07215 2.06107 6.08801C1.94579 6.10386 1.83724 6.15158 1.74762 6.2258C1.658 6.30001 1.59088 6.39777 1.55381 6.50806C1.51674 6.61836 1.51119 6.73681 1.5378 6.85008L3.52571 15.3137Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
