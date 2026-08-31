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
  priceUsd: string
  currency: 'USD'
  formats: string
  isbn: 'UNASSIGNED'
  coverSrc: string
  coverAlt: string
  gumroadUrl: string
  checkoutStatus: CheckoutStatus
}

/**
 * Single governed product configuration for PromptCraft 1.
 * Insert the real Gumroad URL here later. Do not scatter checkout URLs.
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
  priceUsd: '19.95',
  currency: 'USD',
  formats: 'PDF + EPUB',
  isbn: 'UNASSIGNED',
  coverSrc: '/images/pc1-cover.jpg',
  coverAlt: 'Cover of PromptCraft 1 — How to Talk to Machines by John Kenneally',
  gumroadUrl: '',
  checkoutStatus: 'pending',
}

export const priceLabel = `USD ${pc1Product.priceUsd}`

/** Public CTA label. Uses locked price. */
export const buyCtaLabel = `Get PromptCraft 1 — ${priceLabel}`

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
