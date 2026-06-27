export default function MarketingDiaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Marketing Diary</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">Book Launch Diary</h1>
      <p className="text-gray-500 text-lg mb-10">
        A running record of the PC1 launch journey — decisions, milestones, plans, and notes.
      </p>

      <div className="space-y-6">
        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Launch milestones</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Website built and deployed</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Book formatted and uploaded to Gumroad</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Cheat sheet PDF ready</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> First article published in library</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Email newsletter started</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> First 10 sales</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Weekly marketing plan</h2>
          <p className="text-gray-400 italic text-sm">Content placeholder — add weekly plan entries to <code>content/marketing/diary.md</code>.</p>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Article schedule</h2>
          <p className="text-gray-400 italic text-sm">Content placeholder — add article schedule here.</p>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Gumroad / Stripe setup checklist</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Create Gumroad account</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Upload PC1 digital book (PDF + EPUB)</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Upload cheat sheet PDF</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Create product pages for all downloads</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Set pricing</li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Replace placeholder links in <code>data/products.ts</code></li>
            <li className="flex items-start gap-2"><span className="text-accent">○</span> Test a purchase end to end</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Newsletter ideas</h2>
          <p className="text-gray-400 italic text-sm">Content placeholder — add newsletter ideas here.</p>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Social post ideas</h2>
          <p className="text-gray-400 italic text-sm">Content placeholder — add social post ideas here.</p>
        </div>
      </div>
    </div>
  )
}
