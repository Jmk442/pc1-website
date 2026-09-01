import fs from 'fs'
import path from 'path'
import { legalDocs, type LegalSlug } from '@/data/legal'

const DIR = path.join(process.cwd(), 'content/legal')

export function getLegalDoc(slug: LegalSlug) {
  const meta = legalDocs[slug]
  const file = path.join(DIR, `${slug}.md`)
  const raw = fs.readFileSync(file, 'utf8')
  const body = raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^---[\s\S]*?---\s*/, '')
    .trim()
  const paragraphs = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
  return { ...meta, paragraphs }
}
