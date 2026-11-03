import './CategoryNav.scss'

type Category = {
  image: string
  label: string
}

const categories: Category[] = [
  { image: 'category-technology.png', label: 'Tecnologia' },
  { image: 'category-supermarket.png', label: 'Supermercado' },
  { image: 'category-drinks.png', label: 'Bebidas' },
  { image: 'category-tools.png', label: 'Ferramentas' },
  { image: 'category-health.png', label: 'Saúde' },
  { image: 'category-sports.png', label: 'Esportes e Fitness' },
  { image: 'category-fashion.png', label: 'Moda' },
]

export function CategoryNav() {
  return (
    <nav className="category-nav page-container" aria-label="Categorias de produtos">
      {categories.map(({ image, label }, index) => (
        <a key={label} href="#produtos" className={`category-nav__item${index === 0 ? ' category-nav__item--active' : ''}`}>
          <span className="category-nav__icon-box">
            <img src={`${import.meta.env.BASE_URL}${image}`} alt="" aria-hidden="true" />
          </span>
          <span className="category-nav__label">{label}</span>
        </a>
      ))}
    </nav>
  )
}
