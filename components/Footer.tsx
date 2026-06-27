import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-accent text-lg mb-3">PC1</h3>
            <p className="text-gray-400 text-sm">
              PromptCraft One — How to Talk to Machines.<br />
              By John Kenneally.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/book" className="hover:text-accent transition-colors">Book</Link></li>
              <li><Link href="/downloads" className="hover:text-accent transition-colors">Downloads</Link></li>
              <li><Link href="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link href="/classroom" className="hover:text-accent transition-colors">Classroom</Link></li>
              <li><Link href="/cheat-sheet" className="hover:text-accent transition-colors">Cheat Sheet</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">More</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/library" className="hover:text-accent transition-colors">Library</Link></li>
              <li><Link href="/start" className="hover:text-accent transition-colors">Start Here</Link></li>
              <li><Link href="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PromptCraft One. All rights reserved.
          &nbsp;|&nbsp; Stage 1 — paid downloads fulfilled via external checkout.
        </div>
      </div>
    </footer>
  )
}
