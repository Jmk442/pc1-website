export default function MarketingPlanPage() {
  const audiences = [
    'Ordinary adults who use AI tools casually',
    'Students (secondary and tertiary)',
    'Parents and caregivers',
    'Teachers and educators',
    'Managers and workplace professionals',
    'Industry professionals (healthcare, legal, finance, marketing)',
    'Developers and technical users',
    'Writers and content creators',
    'Researchers',
  ]

  const channels = [
    'Gumroad marketplace',
    'Website organic search (SEO)',
    'Email newsletter',
    'Social (LinkedIn, X, Instagram)',
    'Podcast / broadcast appearances',
    'Partner outreach',
    'School and library outreach',
    'Workplace / HR referrals',
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Marketing Plan</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">PC1 Rollout Plan</h1>
      <p className="text-gray-500 text-lg mb-10">
        The go-to-market plan for &ldquo;How to Talk to Machines&rdquo; and the PC1 product ecosystem.
      </p>

      <div className="space-y-8">
        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-4">Target audiences</h2>
          <ul className="space-y-2">
            {audiences.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-accent font-bold">{i + 1}.</span> {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-4">Offer ladder</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">Free</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Selected articles</li>
                <li>• PC1 intro</li>
                <li>• Mini cheat sheet preview</li>
                <li>• Start Here quiz</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Low-cost ($5–$15)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PC1 Cheat Sheet</li>
                <li>• Prompt Template Pack</li>
                <li>• Course Worksheets</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Core ($15–$20)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PC1 Digital Book</li>
                <li>• Classroom Starter Pack</li>
                <li>• Parent / Family Kit</li>
                <li>• Manager Pack</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Higher value ($50+)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PC1 Full Bundle</li>
                <li>• Future membership</li>
                <li>• Course packs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-4">Channels</h2>
          <ul className="space-y-2">
            {channels.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-accent">→</span> {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Website SEO plan</h2>
          <p className="text-gray-400 italic text-sm">Content placeholder — add SEO keyword targets, meta descriptions, and article topics here.</p>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Measurement checklist</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Website visits (weekly)</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Start Here quiz completions</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Downloads sold (Gumroad / Stripe)</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Email subscribers</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Library article reads</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Course page visits</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
