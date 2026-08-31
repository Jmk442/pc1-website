export default function MarketingDiaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Marketing Diary</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">Book Launch Diary</h1>
      <p className="text-gray-500 text-lg mb-10">
        A running record of the PC1 launch journey — decisions, milestones, plans, and notes.
      </p>

      <div className="space-y-6">

        {/* ── BUILD CHANGELOG ── */}
        <div className="card border-l-4 border-accent">
          <h2 className="font-bold text-primary text-lg mb-4">Build Changelog</h2>
          <div className="space-y-5 text-sm">

            <div>
              <p className="font-bold text-primary">2026-06-27 — E.T.H.I.C.S. lens added to book (EN + DE)</p>
              <ul className="mt-1 space-y-1 text-gray-600 pl-3">
                <li>• Chapter 9 (EN + DE): Full E.T.H.I.C.S. framework — Explicit Authorship, Transparency, Human leads, Integrity, Credit, Sovereignty</li>
                <li>• Chapter 9 (EN + DE): "Three lenses / Drei Linsen — one system" summary</li>
                <li>• Appendix (EN + DE): Acronym reference table — C.R.A.F.T. base, D.E.T. + E.T.H.I.C.S. focus lenses, industry placeholders</li>
                <li>• Obsidian vault: Ethics Lens.md created — full definition, intake record, copy-ready prompt block</li>
                <li>• Focus Lens Library updated to include E.T.H.I.C.S. entry</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-primary">2026-06-27 — Chapter 3 content added (EN + DE)</p>
              <ul className="mt-1 space-y-1 text-gray-600 pl-3">
                <li>• "The Fear Is Not New / Die Angst ist nicht neu" — technological change argument (wheel → horse → printing press → motor car → colour TV → AI)</li>
                <li>• "The Three Hidden Costs / Die drei versteckten Kosten" — Time/Productivity, Energy/Environment, Creative Rights framework</li>
                <li>• "What Pure Data Means / Was reine Daten bedeuten" — the PC1 data quality argument</li>
                <li>• German edition: KORREKTORAT proofreader notes added for terminology decisions (Nina to review)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-primary">2026-06-27 — German HTML edition created (book-de.html)</p>
              <ul className="mt-1 space-y-1 text-gray-600 pl-3">
                <li>• Full German translation of structure, framework content, and C.R.A.F.T./D.E.T. definitions</li>
                <li>• Standalone self-contained HTML — no external dependencies, ready for Netlify upload</li>
                <li>• Yellow KORREKTORAT boxes throughout for Nina to annotate and respond to</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-primary">2026-06-27 — Website built and GitHub repo created</p>
              <ul className="mt-1 space-y-1 text-gray-600 pl-3">
                <li>• Full Next.js 14 + TypeScript + Tailwind site at github.com/Jmk442/pc1-website</li>
                <li>• 13 pages: home, book, downloads, courses, classroom, dashboard, library, cheat sheet, start, marketing diary, marketing plan, about, contact</li>
                <li>• Book page: paid-only — 6 platform cards (Gumroad live, others coming soon)</li>
                <li>• Stage 1 boundary: external Gumroad checkout, localStorage dashboard, no auth</li>
                <li>• English HTML standalone book (book-en.html) created for Netlify upload</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-primary text-lg mb-3">Launch milestones</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> Website built and deployed to GitHub</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> English HTML book created (book-en.html)</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> German HTML book created (book-de.html) — with Nina&apos;s proofreader notes</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> E.T.H.I.C.S. lens designed, added to book and Obsidian vault</li>
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
