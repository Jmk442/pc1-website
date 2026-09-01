import type { Metadata } from 'next'
import { legalDocs, legalUpdated } from '@/data/legal'
import { getLegalDoc } from '@/lib/legal'
import { MarkdownBody } from '@/components/MarkdownBody'

export const metadata: Metadata = {
  title: `${legalDocs.privacy.title} | PromptCraft 1`,
  description: legalDocs.privacy.description,
}

export default function PrivacyPage() {
  const doc = getLegalDoc('privacy')

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Legal</p>
      <h1 className="text-4xl font-extrabold text-primary mb-3">{doc.title}</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated {legalUpdated}</p>
      <MarkdownBody paragraphs={doc.paragraphs} />
    </article>
  )
}
