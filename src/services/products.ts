import { localProducts } from '../data/products'
import type { Product, ProductsResponse } from '../types/product'

const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

function normalizeProducts(data: ProductsResponse): Product[] {
  if (!data.success) {
    throw new Error('A lista de produtos não está disponível.')
  }

  return data.products.map((product, index) => ({
    id: `${product.productName}-${index}`,
    name: product.productName,
    description: product.descriptionShort,
    imageUrl: product.photo,
    price: product.price,
  }))
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_URL)

    if (!response.ok) {
      throw new Error('Não foi possível carregar os produtos.')
    }

    const data: ProductsResponse = await response.json()
    return normalizeProducts(data)
  } catch {
    return normalizeProducts(localProducts)
  }
}
