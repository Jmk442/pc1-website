'use client'
import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from '@/data/navigation'

function LeafMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="white" />
      <path d="M16 25s-7-4.5-7-10.5C9 10.36 12.13 7 16 7s7 3.36 7 7.5c0 6-7 10.5-7 10.5z" fill="#0d1a0d" />
      <path d="M16 25s-3-5.5-3-10.5c0-2.8 1.2-5 3-6.2 1.8 1.2 3 3.4 3 6.2 0 5-3 10.5-3 10.5z" fill="#6dbf3a" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <LeafMark size={32} />
            <div>
              <span className="font-black text-lg text-white tracking-tight">PromptCraft</span>
              <span className="text-accent font-black text-lg"> 1</span>
              <p className="cover-tagline text-white/40 leading-none" style={{ fontSize: '0.55rem' }}>
                BETTER PROMPTS. BETTER OUTCOMES.{' '}
                <span className="text-accent">BETTER WORLD.</span>
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start"
              className="ml-2 px-4 py-2 rounded bg-accent text-primary text-sm font-bold hover:bg-accent-dark transition-colors"
            >
              Start Here
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-primary border-t border-white/10 px-4 pb-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 border-b border-white/10 text-sm text-white/80 hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
