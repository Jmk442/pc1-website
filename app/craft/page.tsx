import type { Metadata } from 'next'
import { craftElements, craftTransformation } from '@/data/craft'
import { seo } from '@/data/seo'
import CheckoutButton from '@/components/CheckoutButton'
import KindleOffer from '@/components/KindleOffer'
import { checkoutDisclosure, compatibilityWording, humanJudgementBoundary } from '@/data/pc1Product'

export const metadata: Metadata = {
  title: seo.craftTitle,
  description: seo.craftDescription,
}

export default function CraftPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">The method</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">The C.R.A.F.T. method</h1>
      <p className="text-gray-600 text-lg mb-4 leading-relaxed">
        C.R.A.F.T. is a repeatable, platform-independent way to write clearer AI prompts. It is the core of PromptCraft 1.
        Use it before the model starts generating — not as a trick after a weak answer. {compatibilityWording}
      </p>
      <p className="text-gray-500 text-base mb-10 leading-relaxed">{humanJudgementBoundary}</p>

      <div className="space-y-6 mb-16">
        {craftElements.map((el) => (
          <div key={el.letter} className="card flex gap-4">
            <div className="bg-primary text-accent rounded-lg w-12 h-12 flex items-center justify-center text-xl font-extrabold flex-shrink-0">
              {el.letter}
            </div>
            <div>
              <h2 className="font-bold text-primary text-xl">{el.word}</h2>
              <p className="text-gray-600 mt-1">{el.explanation}</p>
              <p className="text-gray-500 text-sm mt-2 italic">{el.example}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-black text-primary mb-6">A simple transformation</h2>
      <div className="space-y-6 mb-8">
        <div className="card bg-[#f4f7f4]">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Rough request</p>
          <p className="text-gray-800 italic">{craftTransformation.rough}</p>
        </div>
        <p className="text-center font-black text-accent">→ C.R.A.F.T. →</p>
        <div className="card border-2 border-accent/40">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Clearer prompt</p>
          <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
            {craftTransformation.crafted}
          </pre>
        </div>
      </div>
      <p className="text-gray-500 mb-10">{craftTransformation.note}</p>

      <div className="card bg-primary text-white text-center">
        <h2 className="text-xl font-bold mb-3">The book teaches the full method</h2>
        <p className="text-white/70 mb-2">24 chapters, practical examples, and C.R.A.F.T. reference material.</p>
        <p className="text-white/50 text-sm mb-6">{checkoutDisclosure}</p>
        <CheckoutButton />
        <KindleOffer tone="dark" />
      </div>
    </div>
  )
}
