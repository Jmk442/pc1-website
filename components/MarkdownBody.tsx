import Link from 'next/link'
import type { ReactNode } from 'react'

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const href = link[2]
      const label = link[1]
      if (href.startsWith('/') || href.startsWith('#')) {
        return (
          <Link key={i} href={href} className="text-primary font-semibold underline hover:text-accent">
            {label}
          </Link>
        )
      }
      return (
        <a
          key={i}
          href={href}
          className="text-primary font-semibold underline hover:text-accent"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      )
    }
    return part
  })
}

function headingId(raw: string): { text: string; id?: string } {
  const tagged = raw.match(/^(.*?)\s*\{#([^}]+)\}\s*$/)
  if (tagged) return { text: tagged[1], id: tagged[2] }
  return { text: raw }
}

export function MarkdownBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {paragraphs.map((block, idx) => {
        if (block.startsWith('## ')) {
          const { text, id } = headingId(block.replace(/^## /, ''))
          return (
            <h2 key={idx} id={id} className="text-xl font-bold text-primary pt-4 scroll-mt-24">
              {text}
            </h2>
          )
        }
        if (block.startsWith('### ')) {
          const { text, id } = headingId(block.replace(/^### /, ''))
          return (
            <h3 key={idx} id={id} className="text-lg font-bold text-primary pt-2">
              {text}
            </h3>
          )
        }
        if (block.split('\n').every((line) => line.startsWith('- '))) {
          return (
            <ul key={idx} className="list-disc pl-5 space-y-1">
              {block.split('\n').map((line, i) => (
                <li key={i}>{inline(line.replace(/^- /, ''))}</li>
              ))}
            </ul>
          )
        }
        return <p key={idx}>{inline(block)}</p>
      })}
    </div>
  )
}
