import Link from 'next/link'
import { navLinks } from '@/data/navigation'
import { legalLinks } from '@/data/legal'
import { pc1Product } from '@/data/pc1Product'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="border-b border-white/10 py-4 px-4 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">
          {pc1Product.displayTitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-black text-white text-lg mb-0.5">
              PromptCraft<span className="text-accent"> 1</span>
            </h3>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              How to Talk to Machines
            </p>
            <p className="text-white/50 text-sm">
              By {pc1Product.author}. Independent publisher. First edition, 2026.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white/70 mb-3 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2 text-sm text-white/50">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white/70 mb-3 text-sm uppercase tracking-wider">The book</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>{pc1Product.formats}</li>
              <li>USD {pc1Product.priceUsd}</li>
              <li>
                <Link href="/book/#offer" className="hover:text-accent transition-colors">
                  Get PromptCraft 1
                </Link>
              </li>
              <li>
                <Link href="/#updates" className="hover:text-accent transition-colors">
                  Join the update list
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/40">
          <p>© 2026 {pc1Product.author}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
