export interface Product {
  id: string
  title: string
  description: string
  whoFor: string
  fileType: string
  price: string
  checkoutLink: string
  featured?: boolean
}

/**
 * Historical multi-product catalogue is not live truth.
 * Launch product configuration: data/pc1Product.ts
 */
export const products: Product[] = []
