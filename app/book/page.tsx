import type { Metadata } from 'next'
import Link from 'next/link'
import CoverImage from '@/components/CoverImage'
import CheckoutButton from '@/components/CheckoutButton'
import { storeLongDescription } from '@/data/craft'
import { checkoutDisclosure, pc1Product, priceLabel, refundDisclosure } from '@/data/pc1Product'
import { bookToc } from '@/data/bookToc'
import { seo } from '@/data/seo'

export const metadata: Metadata = {
  title: seo.bookTitle,
  description: seo.bookDescription,
}

export default function BookPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">The Book</p>
      <h1 className="text-4xl font-extrabold text-primary mb-2">{pc1Product.displayTitle}</h1>
      <p className="text-gray-500 text-lg mb-10">
        {pc1Product.author} · {pc1Product.edition} · {pc1Product.formats} · {priceLabel}
      </p>

      <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start mb-14">
        <div className="max-w-[220px] mx-auto md:mx-0">
          <div className="rounded-lg overflow-hidden shadow-xl ring-1 ring-black/10">
            <CoverImage />
          </div>
        </div>
        <div>
          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            {storeLongDescription.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-8">
            <li>✓ 24 chapters across six parts</li>
            <li>✓ Practical examples at accessible and professional levels</li>
            <li>✓ Use cases across healthcare, legal, education, finance, software and marketing</li>
            <li>✓ Appendices: key data, industry acronyms, glossary, and sources</li>
            <li>✓ C.R.A.F.T. reference material</li>
          </ul>
        </div>
      </div>

      <section id="offer" className="card border-2 border-accent mb-14 scroll-mt-24">
        <h2 className="text-2xl font-black text-primary mb-2">{pc1Product.displayTitle}</h2>
        <p className="text-gray-600 mb-2">
          {pc1Product.formats} · {priceLabel}
        </p>
        <p className="text-gray-600 mb-6">{checkoutDisclosure}</p>
        <CheckoutButton />
        <p className="text-gray-500 text-sm mt-6 leading-relaxed">
          {refundDisclosure}{' '}
          <Link href="/refunds/" className="text-primary font-semibold hover:text-accent">
            Read the full refund policy
          </Link>
          .
        </p>
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          Digital product · {pc1Product.formats} · {priceLabel} · Purchase subject to{' '}
          <Link href="/terms/" className="text-primary font-semibold hover:text-accent">
            Terms
          </Link>{' '}
          and applicable consumer rights.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-black text-primary mb-6">What is inside</h2>
        <div className="space-y-6">
          {bookToc.map((part) => (
            <div key={part.section} className="card">
              <h3 className="font-bold text-primary mb-3">{part.section}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {part.chapters.map((ch) => (
                  <li key={ch.title}>
                    {'number' in ch ? `Chapter ${ch.number}: ` : ''}
                    {ch.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
