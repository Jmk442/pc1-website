import Link from 'next/link'

const badges = [
  { icon: '⬡', label: 'INCLUSIVE\nBY DESIGN' },
  { icon: '◎', label: 'REDUCE\nWASTE' },
  { icon: '◈', label: 'SAFER\nSYSTEMS' },
  { icon: '⊟', label: 'HUMAN\nCONTROL' },
  { icon: '⬡', label: 'STRONGER\nTOGETHER' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">

      {/* Tagline band */}
      <div className="border-b border-white/10 py-4 px-4 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/50">
          BETTER PROMPTS. BETTER OUTCOMES.{' '}
          <span className="text-accent">BETTER WORLD.</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-black text-white text-lg mb-0.5">
              PromptCraft<span className="text-accent"> 1</span>
            </h3>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">How to Talk to Machines</p>
            <p className="text-white/50 text-sm">
              By John Kenneally.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white/70 mb-3 text-sm uppercase tracking-wider">Quick links</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/book" className="hover:text-accent transition-colors">Book</Link></li>
              <li><Link href="/downloads" className="hover:text-accent transition-colors">Downloads</Link></li>
              <li><Link href="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link href="/classroom" className="hover:text-accent transition-colors">Classroom</Link></li>
              <li><Link href="/cheat-sheet" className="hover:text-accent transition-colors">Cheat Sheet</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white/70 mb-3 text-sm uppercase tracking-wider">More</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/library" className="hover:text-accent transition-colors">Library</Link></li>
              <li><Link href="/start" className="hover:text-accent transition-colors">Start Here</Link></li>
              <li><Link href="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Icon badges — matching back cover bottom row */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-wrap justify-center gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-1.5 opacity-50">
              <div className="w-9 h-9 rounded-lg border border-white/30 flex items-center justify-center text-white text-base">
                {b.icon}
              </div>
              <span className="text-center text-white text-[0.55rem] font-bold tracking-widest uppercase leading-tight whitespace-pre-line">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-white/25">
          © {new Date().getFullYear()} PromptCraft One. All rights reserved.
          &nbsp;|&nbsp; Stage 1 — paid downloads fulfilled via external checkout.
        </div>
      </div>
    </footer>
  )
}
