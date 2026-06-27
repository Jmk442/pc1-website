import Link from 'next/link'

export default function CheatSheetPage() {
  const craftItems = [
    { letter: 'C', word: 'Context', description: 'Briefly state all relevant background. Include any data, documents, or links the AI should use. What is the project? Who is the user? Provide specifics: domain, example inputs, constraints.' },
    { letter: 'R', word: 'Role', description: 'Define the AI\'s persona and role. Title (e.g. "your software coach"). Expertise and skills. Tone and attitude (professional, friendly, concise).' },
    { letter: 'A', word: 'Action', description: 'Outline exactly what you want the AI to do. Step 1: Clarify / Plan. Step 2: Analysis. Step 3: Execution. Number each step.' },
    { letter: 'F', word: 'Format', description: 'Specify output format and style. Use headings, bullet lists, and code blocks. Restrict length if needed ("under 300 words", "in JSON").' },
    { letter: 'T', word: 'Tone', description: 'State the writing style. Formal or casual, technical or plain English. E.g. "Explain simply for a beginner" or "Use professional technical language".' },
  ]

  const detItems = [
    { letter: 'D', word: 'Dependencies', description: 'List required libraries or packages (names and versions). Example: numpy>=1.20, express.js 4.x.' },
    { letter: 'E', word: 'Environment', description: 'Note any API keys, configs, or .env requirements. Example: Set OPENAI_API_KEY, database URL in .env.' },
    { letter: 'T', word: 'Testing', description: 'Specify test framework and criteria. Example: "Include unit tests using pytest achieving at least 80% coverage."' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Cheat Sheet</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">C.R.A.F.T. Cheat Sheet</h1>
      <p className="text-gray-500 text-lg mb-10">
        The PC1 quick reference. One page. The whole method. Print it, pin it, use it every day.
      </p>

      <div className="space-y-4 mb-12">
        {craftItems.map(item => (
          <div key={item.letter} className="card flex gap-4">
            <div className="bg-primary text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-extrabold text-accent flex-shrink-0">
              {item.letter}
            </div>
            <div>
              <h3 className="font-bold text-primary">{item.word}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-10 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-2">D.E.T. Extension</h2>
        <p className="text-gray-500 mb-6">For software, code, builds, automation, and technical tasks.</p>
        <div className="space-y-4">
          {detItems.map(item => (
            <div key={item.letter} className="card flex gap-4">
              <div className="bg-accent text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-extrabold flex-shrink-0">
                {item.letter}
              </div>
              <div>
                <h3 className="font-bold text-primary">{item.word}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card bg-gray-50 text-center mb-8">
        <h2 className="text-xl font-bold text-primary mb-3">Get the printable PDF cheat sheet</h2>
        <p className="text-gray-600 mb-4">A4 and US Letter. Clean layout. All C.R.A.F.T. and D.E.T. sections. Perfect for a desk or classroom wall.</p>
        <Link href="/downloads#pc1-cheatsheet" className="btn-primary inline-block">
          Download Cheat Sheet — $5
        </Link>
      </div>

      <div className="card bg-primary text-white text-center">
        <h2 className="text-xl font-bold mb-3">Get everything</h2>
        <p className="text-gray-300 mb-4">The cheat sheet is included in the PC1 Full Bundle.</p>
        <Link href="/downloads#bundle" className="btn-primary inline-block">
          See the Full Bundle
        </Link>
      </div>
    </div>
  )
}
