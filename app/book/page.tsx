import Link from 'next/link'

const platforms = [
  {
    name: 'Gumroad',
    description: 'Instant digital download. PDF + EPUB delivered immediately after purchase.',
    link: 'GUMROAD_LINK_PC1_BOOK',
    available: true,
    badge: 'Available now',
  },
  {
    name: 'Payhip',
    description: 'Digital download via Payhip. PDF + EPUB.',
    link: 'PAYHIP_LINK_PC1_BOOK',
    available: false,
    badge: 'Coming soon',
  },
  {
    name: 'Amazon Kindle',
    description: 'Read on any Kindle device or the free Kindle app.',
    link: 'AMAZON_LINK_PC1_BOOK',
    available: false,
    badge: 'Coming soon',
  },
  {
    name: 'Apple Books',
    description: 'Available on iPhone, iPad, and Mac via Apple Books.',
    link: 'APPLE_BOOKS_LINK_PC1_BOOK',
    available: false,
    badge: 'Coming soon',
  },
  {
    name: 'Google Play Books',
    description: 'Read on Android, web browser, or any Google Play device.',
    link: 'GOOGLE_PLAY_LINK_PC1_BOOK',
    available: false,
    badge: 'Coming soon',
  },
  {
    name: 'Lemon Squeezy',
    description: 'Digital download via Lemon Squeezy. PDF + EPUB.',
    link: 'LEMONSQUEEZY_LINK_PC1_BOOK',
    available: false,
    badge: 'Coming soon',
  },
]

export default function BookPage() {
  const available = platforms.filter(p => p.available)
  const coming = platforms.filter(p => !p.available)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">The Book</p>
      <h1 className="text-4xl font-extrabold text-primary mb-2">How to Talk to Machines</h1>
      <p className="text-gray-500 text-lg mb-10">by John Kenneally &nbsp;·&nbsp; PromptCraft One &nbsp;·&nbsp; 24 chapters &nbsp;·&nbsp; PDF + EPUB</p>

      {/* Book hero */}
      <div className="bg-primary rounded-2xl p-8 text-white text-center mb-12">
        <div className="text-7xl mb-4">📖</div>
        <h2 className="text-2xl font-bold mb-2">How to Talk to Machines</h2>
        <p className="text-gray-400 mb-6">by John Kenneally &nbsp;·&nbsp; PromptCraft One</p>
        <ul className="text-sm text-gray-300 space-y-1 inline-block text-left mb-6">
          <li>✓ PDF + EPUB — read on any device</li>
          <li>✓ 24 chapters across 6 parts</li>
          <li>✓ Dual reading levels — Year 7 and professional</li>
          <li>✓ Industry applications (healthcare, legal, education, finance, software, marketing)</li>
          <li>✓ C.R.A.F.T. method + D.E.T. extension</li>
          <li>✓ Environmental impact chapter</li>
          <li>✓ Future of prompt literacy</li>
        </ul>
        <div className="text-3xl font-extrabold text-accent">$19</div>
        <p className="text-gray-400 text-sm mt-1">One-time purchase. Yours to keep.</p>
      </div>

      {/* Buy now — available platforms */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Buy the book</h2>
        <p className="text-gray-500 mb-6">
          The full book is available as a paid digital download. Choose your preferred platform below.
          No free preview — the complete text is available to paying readers only.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {available.map(p => (
            <div key={p.name} className="card border-2 border-accent">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-primary text-lg">{p.name}</h3>
                <span className="text-xs bg-accent text-white px-2 py-0.5 rounded font-semibold">{p.badge}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>
              {p.link.startsWith('http') ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center"
                >
                  Buy on {p.name} — $19
                </a>
              ) : (
                <span className="block text-center text-sm text-gray-400 italic py-3 border border-gray-200 rounded-lg">
                  Link coming — replace {p.link} in data
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Coming soon platforms */}
        <h3 className="text-lg font-semibold text-primary mt-8 mb-4">Also coming to</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {coming.map(p => (
            <div key={p.name} className="card bg-gray-50">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-primary">{p.name}</h3>
                <span className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded">{p.badge}</span>
              </div>
              <p className="text-gray-400 text-xs">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bundle CTA */}
      <div className="card bg-primary text-white text-center mb-12">
        <h2 className="text-xl font-bold mb-2">Want everything?</h2>
        <p className="text-gray-300 mb-4">
          The PC1 Full Bundle includes the book, cheat sheet, template pack, classroom pack, parent kit,
          manager pack, worksheets, and audiobook.
        </p>
        <Link href="/downloads#bundle" className="btn-primary inline-block">
          See the Full Bundle — $59
        </Link>
      </div>

      {/* Reading levels — brief only, no content */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Two reading levels in one book</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-primary mb-1">Year 7 level</h3>
            <p className="text-gray-600 text-sm">Plain English. Short sentences. Clear examples. For students, parents, and anyone new to AI.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">Professional / Managerial</h3>
            <p className="text-gray-600 text-sm">Structured, precise, industry-aware. For managers, professionals, and technical users.</p>
          </div>
        </div>
      </div>

      {/* Testimonials placeholder */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-primary mb-3">What readers say</h2>
        <p className="text-gray-400 italic text-sm">Replace this with real testimonials once available.</p>
      </div>

      {/* FAQ placeholder */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-primary mb-3">Frequently asked questions</h2>
        <p className="text-gray-400 italic text-sm">Replace this with real FAQs once available.</p>
      </div>

      <div className="text-center">
        <Link href="/downloads" className="btn-primary text-lg px-8 py-4">
          See all downloads
        </Link>
      </div>
    </div>
  )
}
