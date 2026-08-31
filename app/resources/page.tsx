import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/data/articles'
import { seo } from '@/data/seo'

export const metadata: Metadata = {
  title: seo.resourcesTitle,
  description: seo.resourcesDescription,
}

const planned = [
  'AI prompting for students',
  'Teaching prompt literacy',
  'Writing better prompts at work',
]

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Resources</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">Prompt literacy resources</h1>
      <p className="text-gray-500 text-lg mb-10">
        Short, practical reading on clearer AI prompts. These articles support education, search, and the book — they are not a substitute for it.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {articles.map((a) => (
          <Link key={a.slug} href={`/resources/${a.slug}`} className="card hover:shadow-md transition-shadow">
            <p className="text-xs uppercase tracking-wider text-accent mb-2">{a.topic}</p>
            <h2 className="font-bold text-primary text-lg mb-2">{a.title}</h2>
            <p className="text-gray-600 text-sm">{a.description}</p>
          </Link>
        ))}
      </div>

      <div className="card">
        <h2 className="font-bold text-primary mb-3">Further topics</h2>
        <ul className="space-y-2 text-gray-600 text-sm">
          {planned.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
