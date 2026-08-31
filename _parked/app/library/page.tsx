import Link from 'next/link'

const categories = [
  'Articles',
  'Book rollout',
  'Prompt literacy',
  'Parents and families',
  'Schools and classroom',
  'Managers and workplace',
  'Industry use',
  'AI ethics and boundaries',
  'PC1 updates',
  'PC2 future notes',
]

export default function LibraryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Library</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">PC1 Library</h1>
      <p className="text-gray-500 text-lg mb-10">
        Articles, essays, rollout notes, and supporting reading on prompt literacy, AI use, families, schools, workplaces, and the future.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {categories.map(cat => (
          <div key={cat} className="card hover:border-accent hover:shadow transition-shadow cursor-pointer">
            <h3 className="font-semibold text-primary mb-1">{cat}</h3>
            <p className="text-gray-400 text-xs italic">Articles coming soon.</p>
          </div>
        ))}
      </div>

      <div className="card bg-gray-50 text-center">
        <h2 className="text-xl font-bold text-primary mb-3">Articles are coming</h2>
        <p className="text-gray-600 mb-4">
          Add Markdown files to <code className="bg-gray-200 px-1 rounded">content/library/articles/</code> to populate the library.
          Each article will appear in the matching category automatically.
        </p>
        <Link href="/marketing-diary" className="text-accent hover:underline text-sm">Follow the launch diary →</Link>
      </div>
    </div>
  )
}
