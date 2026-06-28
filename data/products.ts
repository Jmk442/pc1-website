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

// No products added yet — waiting for John's actual product details and Gumroad links.
export const products: Product[] = []
