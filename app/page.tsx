import Link from 'next/link'
import CoverImage from '@/components/CoverImage'
import CheckoutButton from '@/components/CheckoutButton'
import KindleOffer from '@/components/KindleOffer'
import CraftGrid from '@/components/CraftGrid'
import EmailCapture from '@/components/EmailCapture'
import CTASection from '@/components/CTASection'
import { audiences, craftElements, craftTransformation, storeShortDescription } from '@/data/craft'
import {
  approvedPositioning,
  checkoutDisclosure,
  compatibilityWording,
  humanJudgementBoundary,
  pc1Product,
  priceLabel,
  seriesPositioning,
} from '@/data/pc1Product'
import { author } from '@/data/author'
import { articles } from '@/data/articles'

export default function HomePage() {
  return (
    <>
      <section className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-white/5 absolute" />
          <div className="w-[500px] h-[500px] rounded-full border border-accent/10 absolute" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #6dbf3a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-14 pb-16 relative">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4">
                First edition, 2026
              </p>
              <h1 className="font-black leading-none mb-4">
                <span className="block text-4xl sm:text-6xl tracking-tight">PromptCraft 1</span>
                <span className="block text-xl sm:text-2xl font-semibold text-white/80 mt-3 tracking-tight">
                  How to Talk to Machines
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-white mt-6 mb-3 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {approvedPositioning}
              </p>
              <p className="text-white/80 text-base mb-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {humanJudgementBoundary}
              </p>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                PromptCraft 1 teaches a repeatable, platform-independent way to give an AI system the Context, Role, Action, Format and Tone it needs before it starts generating.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <CheckoutButton className="btn-primary text-base px-8 py-4 font-black tracking-wide" />
                <Link
                  href="/craft"
                  className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-accent hover:text-accent transition-colors text-base"
                >
                  See how C.R.A.F.T. works
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-6">
                {pc1Product.formats} · {priceLabel} · {pc1Product.author}
              </p>
              <p className="text-white/40 text-sm mt-2">{checkoutDisclosure}</p>
              <KindleOffer tone="dark" />
            </div>
            <div className="max-w-[280px] sm:max-w-[320px] mx-auto">
              <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
                <CoverImage priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="why-now">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Why now</p>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">
            AI is moving quickly. Knowing how to ask clearly is becoming a practical skill.
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Generative AI is becoming part of ordinary work, study and decision-making. Prompt literacy is increasingly useful because unclear instructions create unclear outputs.
            </p>
            <p>
              Random prompt tricks do not travel well. A repeatable method does. Learning it now gives you a transferable skill you can take to the next tool, classroom, or workplace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f4f7f4]" id="craft">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">The method</p>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">C.R.A.F.T.</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Five elements. One structure. {compatibilityWording}
            </p>
          </div>
          <CraftGrid />
          <div className="grid sm:grid-cols-5 gap-4 mt-6 sm:hidden">
            {craftElements.map((el) => (
              <p key={el.letter} className="text-sm text-gray-600">
                <span className="font-bold text-primary">{el.word}.</span> {el.explanation}
              </p>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/craft" className="text-primary font-bold hover:text-accent">
              See a before-and-after example →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">From rough to clear</p>
          <h2 className="text-3xl font-black text-primary mb-8">The method, not a magic trick</h2>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
            <div className="card bg-[#f4f7f4]">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Rough request</p>
              <p className="text-gray-800 italic">{craftTransformation.rough}</p>
            </div>
            <div className="hidden md:flex items-center font-black text-accent text-2xl">→</div>
            <div className="card border-2 border-accent/40">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Clearer prompt</p>
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
                {craftTransformation.crafted}
              </pre>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">{craftTransformation.note}</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f4f7f4]" id="book">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-[240px] mx-auto md:mx-0">
              <div className="rounded-lg overflow-hidden shadow-xl ring-1 ring-black/10">
                <CoverImage />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">The book</p>
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-3 leading-tight">
                {pc1Product.displayTitle}
              </h2>
              <p className="text-gray-500 mb-5">
                {pc1Product.author} · {pc1Product.edition} · {pc1Product.formats} · {priceLabel}
              </p>
              <p className="text-gray-500 text-sm mb-5">{seriesPositioning}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{storeShortDescription}</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-3"><span className="text-accent font-black">✓</span> 24 chapters, with practical examples</li>
                <li className="flex gap-3"><span className="text-accent font-black">✓</span> Accessible and professional use cases</li>
                <li className="flex gap-3"><span className="text-accent font-black">✓</span> Appendices covering data, industry acronyms, glossary, and sources</li>
                <li className="flex gap-3"><span className="text-accent font-black">✓</span> C.R.A.F.T. reference material you can keep using</li>
              </ul>
              <CheckoutButton />
              <KindleOffer />
              <p className="text-gray-500 text-sm mt-3">{checkoutDisclosure}</p>
              <p className="text-gray-400 text-sm mt-3">
                <Link href="/book" className="hover:text-primary">See what is included →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white" id="audience">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Who it is for</p>
            <h2 className="text-3xl font-black text-primary">Find yourself quickly</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {audiences.map((a) => (
              <div key={a.id} className="card">
                <h3 className="font-bold text-primary mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f4f7f4]" id="trust">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Trust</p>
          <h2 className="text-3xl font-black text-primary mb-6">What you can rely on</h2>
          <ul className="space-y-3 text-gray-600">
            <li><span className="font-semibold text-primary">Author.</span> {pc1Product.author}, independent publisher.</li>
            <li><span className="font-semibold text-primary">Formats.</span> {pc1Product.formats} for {priceLabel}.</li>
            <li><span className="font-semibold text-primary">Method.</span> C.R.A.F.T. is explained on this site and taught in the book.</li>
            <li><span className="font-semibold text-primary">Publishing.</span> Self-published first edition, 2026.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="author">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">The author</p>
          <h2 className="text-3xl font-black text-primary mb-3">{author.name}</h2>
          <p className="text-gray-500 mb-6">{author.role}</p>
          <p className="text-gray-600 leading-relaxed mb-4">{author.bio[0]}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{author.bio[2]}</p>
          <Link href="/about" className="font-bold text-primary hover:text-accent">Read the full biography →</Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white" id="promptcraft-2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">PromptCraft 2 is on the way.</h2>
          <p className="text-white/70 text-lg mb-6">
            PromptCraft 1 establishes the foundation. Join the update list to hear what comes next.
          </p>
          <Link href="/#updates" className="btn-primary inline-block">Join the update list</Link>
        </div>
      </section>

      <EmailCapture />

      <section className="py-16 px-4 bg-[#f4f7f4]" id="resources">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Resources</p>
            <h2 className="text-3xl font-black text-primary mb-3">Learn the method</h2>
            <p className="text-gray-600">Short articles that support prompt literacy and book discovery.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {articles.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="card hover:shadow-md transition-shadow">
                <p className="text-xs uppercase tracking-wider text-accent mb-2">{a.topic}</p>
                <h3 className="font-bold text-primary mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm">{a.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={pc1Product.displayTitle}
        subtext={`${pc1Product.formats} · ${priceLabel}. ${checkoutDisclosure}`}
        secondaryLabel="See how C.R.A.F.T. works"
        secondaryHref="/craft"
      />
    </>
  )
}
