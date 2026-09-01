export const legalUpdated = '1 September 2026'

export const legalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Refunds', href: '/refunds' },
  { label: 'Contact', href: '/contact' },
] as const

export const legalDocs = {
  terms: {
    slug: 'terms',
    title: 'Terms of use',
    description:
      'Website terms of use and digital product terms of sale for PromptCraft 1 — How to Talk to Machines.',
  },
  privacy: {
    slug: 'privacy',
    title: 'Privacy',
    description:
      'How PromptCraft 1 collects and uses information on this website, including the contact form and update list.',
  },
  refunds: {
    slug: 'refunds',
    title: 'Refunds and consumer rights',
    description:
      'Refund and consumer-rights information for PromptCraft 1 — How to Talk to Machines.',
  },
} as const

export type LegalSlug = keyof typeof legalDocs
