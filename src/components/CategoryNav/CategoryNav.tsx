import './CategoryNav.scss'

const categories = [
  ['▣', 'Tecnologia'], ['⌂', 'Supermercado'], ['♧', 'Bebidas'], ['⚒', 'Ferramentas'], ['♡', 'Saúde'], ['♙', 'Esportes e Fitness'], ['♢', 'Moda'],
]

export function CategoryNav() {
  return <nav className="category-nav page-container" aria-label="Categorias de produtos">
    {categories.map(([icon, label], index) => <a key={label} href="#produtos" className={index === 0 ? 'category-nav__item category-nav__item--active' : 'category-nav__item'}><span aria-hidden="true">{icon}</span>{label}</a>)}
  </nav>
}
