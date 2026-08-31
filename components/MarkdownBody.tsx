import type { ReactNode } from 'react'

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function MarkdownBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {paragraphs.map((block, idx) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={idx} className="text-xl font-bold text-primary pt-4">
              {block.replace(/^## /, '')}
            </h2>
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
