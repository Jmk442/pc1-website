import fs from 'fs'
import path from 'path'
import { articles, type Article } from '@/data/articles'

const DIR = path.join(process.cwd(), 'content/resources')

export function getArticleBySlug(slug: string): (Article & { paragraphs: string[] }) | null {
  const meta = articles.find((a) => a.slug === slug)
  if (!meta) return null
  const file = path.join(DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const body = raw.replace(/^---[\s\S]*?---\s*/, '').trim()
  const paragraphs = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
  return { ...meta, paragraphs }
}
