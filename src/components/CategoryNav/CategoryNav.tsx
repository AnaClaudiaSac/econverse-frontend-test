import './CategoryNav.scss'

type Category = {
  label: string
  image: string
  hasLabelInImage?: boolean
}

const categories: Category[] = [
  { label: 'Tecnologia', image: 'category-technology.png', hasLabelInImage: true },
  { label: 'Supermercado', image: 'category-supermarket.png', hasLabelInImage: true },
  { label: 'Bebidas', image: 'category-drinks.png', hasLabelInImage: true },
  { label: 'Ferramentas', image: 'category-tools.png' },
  { label: 'Saúde', image: 'category-health.png', hasLabelInImage: true },
  { label: 'Esportes e Fitness', image: 'category-sports.png' },
  { label: 'Moda', image: 'category-fashion.png' },
]

export function CategoryNav() {
  return (
    <nav className="category-nav page-container" aria-label="Categorias de produtos">
      {categories.map(({ hasLabelInImage, image, label }) => (
        <a key={label} href="#produtos" className="category-nav__item">
          {hasLabelInImage ? (
            <img className="category-nav__complete-image" src={`${import.meta.env.BASE_URL}${image}`} alt={label} />
          ) : (
            <>
              <span className="category-nav__icon-box">
                <img src={`${import.meta.env.BASE_URL}${image}`} alt="" aria-hidden="true" />
              </span>
              <span className="category-nav__label">{label}</span>
            </>
          )}
        </a>
      ))}
    </nav>
  )
}
