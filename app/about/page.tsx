import type { Metadata } from 'next'
import Link from 'next/link'
import { author } from '@/data/author'
import { seo } from '@/data/seo'

export const metadata: Metadata = {
  title: seo.aboutTitle,
  description: seo.aboutDescription,
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">About</p>
      <h1 className="text-4xl font-extrabold text-primary mb-2">{author.name}</h1>
      <p className="text-gray-500 text-lg mb-10">{author.role}</p>

      <div className="card space-y-4 text-gray-600 leading-relaxed mb-10">
        {author.bio.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>

      <div className="card">
        <h2 className="font-bold text-primary text-xl mb-3">PromptCraft</h2>
        <p className="text-gray-600 mb-4">
          PromptCraft is an educational framework for prompt literacy. PromptCraft 1 teaches C.R.A.F.T.
          PromptCraft 2 is on the way.
        </p>
        <p className="text-gray-600">
          PromptCraft 1 is independently published by John Kenneally. First edition, 2026.
        </p>
      </div>

      <p className="mt-8">
        <Link href="/book" className="font-bold text-primary hover:text-accent">
          See the book →
        </Link>
      </p>
    </div>
  )
}
