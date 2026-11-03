export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
}

export interface ProductsResponse {
  success: boolean
  products: Array<{
    productName: string
    descriptionShort: string
    photo: string
    price: number
  }>
}
