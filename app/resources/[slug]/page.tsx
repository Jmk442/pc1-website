import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import { getArticleBySlug } from '@/lib/articles'
import { MarkdownBody } from '@/components/MarkdownBody'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | PromptCraft 1`,
    description: article.description,
  }
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{article.topic}</p>
      <h1 className="text-4xl font-extrabold text-primary mb-6">{article.title}</h1>
      <MarkdownBody paragraphs={article.paragraphs} />
      <p className="mt-10">
        <Link href="/resources" className="font-bold text-primary hover:text-accent">
          ← All resources
        </Link>
      </p>
    </article>
  )
}
