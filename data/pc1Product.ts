export type CheckoutStatus = 'pending' | 'live'

export interface Pc1Product {
  id: 'pc1-book'
  title: string
  subtitle: string
  displayTitle: string
  author: string
  publisher: string
  publishingModel: string
  edition: string
  language: string
  priceAud: string
  currency: 'AUD'
  formats: string
  isbn: 'UNASSIGNED'
  coverSrc: string
  coverAlt: string
  gumroadUrl: string
  checkoutStatus: CheckoutStatus
}

/**
 * Single governed product configuration for PromptCraft 1.
 * Checkout URL lives only here. Do not scatter Gumroad URLs.
 */
export const pc1Product: Pc1Product = {
  id: 'pc1-book',
  title: 'PromptCraft 1',
  subtitle: 'How to Talk to Machines',
  displayTitle: 'PromptCraft 1 — How to Talk to Machines',
  author: 'John Kenneally',
  publisher: 'John Kenneally',
  publishingModel: 'Self-published',
  edition: 'First edition, 2026',
  language: 'English',
  priceAud: '19.95',
  currency: 'AUD',
  formats: 'PDF + EPUB',
  isbn: 'UNASSIGNED',
  coverSrc: '/images/pc1-cover.jpg',
  coverAlt: 'Cover of PromptCraft 1 — How to Talk to Machines by John Kenneally',
  gumroadUrl: 'https://promptcraftone.gumroad.com/l/promptcraft-1',
  checkoutStatus: 'live',
}

export const priceLabel = `A$${pc1Product.priceAud}`

/** Public CTA label. */
export const buyCtaLabel = 'Buy PromptCraft 1'

export const checkoutDisclosure =
  'Secure checkout and digital delivery through Gumroad. Gumroad converts the A$19.95 base price to USD at checkout. Applicable taxes are calculated at checkout.'

/** Short checkout-adjacent summary. Full terms remain on the refunds page. */
export const refundDisclosure =
  'No change-of-mind refunds are offered after the PDF or EPUB has been delivered, accessed or downloaded. This does not affect remedies for failed or inaccessible delivery, corrupted or non-working files, a materially misdescribed product, duplicate charges, or rights that cannot lawfully be excluded.'

/**
 * One checkout configuration point.
 * pending → in-site product section
 * live → Gumroad URL
 */
export function getCheckoutHref(): string {
  if (pc1Product.checkoutStatus === 'live' && pc1Product.gumroadUrl.startsWith('https://')) {
    return pc1Product.gumroadUrl
  }
  return '/book/#offer'
}

export function isCheckoutLive(): boolean {
  return pc1Product.checkoutStatus === 'live' && pc1Product.gumroadUrl.startsWith('https://')
}
