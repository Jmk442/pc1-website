import { author } from '@/data/author'
import { pc1Product } from '@/data/pc1Product'

export default function JsonLd() {
  const person = {
    '@type': 'Person',
    name: author.name,
    jobTitle: 'Author',
    description: author.bio[0],
  }

  const book = {
    '@type': 'Book',
    name: pc1Product.displayTitle,
    alternateName: pc1Product.title,
    author: { '@type': 'Person', name: pc1Product.author },
    publisher: { '@type': 'Person', name: pc1Product.publisher },
    inLanguage: 'en',
    bookFormat: 'https://schema.org/EBook',
    bookEdition: 'First edition',
    copyrightYear: 2026,
    description:
      'A practical guide to writing clearer AI prompts using the C.R.A.F.T. method: Context, Role, Action, Format and Tone.',
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [person, book],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
