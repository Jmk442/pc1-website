import Link from 'next/link'
import { products } from '@/data/products'
import { courses } from '@/data/courses'
import ProductCard from '@/components/ProductCard'
import CourseCard from '@/components/CourseCard'
import CTASection from '@/components/CTASection'

const heroBadges = [
  { icon: '⬡', label: 'INCLUSIVE\nBY DESIGN' },
  { icon: '◎', label: 'REDUCE\nWASTE' },
  { icon: '◈', label: 'SAFER\nSYSTEMS' },
  { icon: '⊟', label: 'HUMAN\nCONTROL' },
  { icon: '⬡', label: 'STRONGER\nTOGETHER' },
]

const craftLetters = [
  { letter: 'C', word: 'Context' },
  { letter: 'R', word: 'Role' },
  { letter: 'A', word: 'Action' },
  { letter: 'F', word: 'Format' },
  { letter: 'T', word: 'Tone' },
]

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured)
  const featuredCourses = courses.slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-primary text-white relative overflow-hidden">

        {/* Geometric ring overlay — matches cover's circular design motif */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-white/5 absolute" />
          <div className="w-[500px] h-[500px] rounded-full border border-accent/10 absolute" />
          <div className="w-[300px] h-[300px] rounded-full border border-accent/5 absolute" />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #6dbf3a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-20 pb-10 text-center relative">
          {/* Cover tagline */}
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/40 mb-6">
            BETTER PROMPTS. BETTER OUTCOMES.{' '}
            <span className="text-accent">BETTER WORLD.</span>
          </p>

          {/* Title matching cover typography */}
          <h1 className="font-black leading-none mb-2">
            <span className="block text-5xl sm:text-7xl text-white tracking-tight">PromptCraft</span>
            <span className="block text-7xl sm:text-9xl text-accent leading-none" style={{ lineHeight: '0.9' }}>1</span>
          </h1>

          <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 mt-4 mb-6">
            TEACHING MACHINES TO LISTEN
          </p>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            How <span className="text-accent font-bold">better prompts</span> save energy, save money,
            and change the way we talk to AI.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <Link href="/book" className="btn-primary text-base px-10 py-4 font-black tracking-wide">
              Get the Book
            </Link>
            <Link
              href="/start"
              className="border border-white/30 text-white font-semibold px-10 py-4 rounded-lg hover:border-accent hover:text-accent transition-colors text-base"
            >
              Start Here →
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 flex flex-wrap justify-center gap-8">
            {heroBadges.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/60 text-lg">
                  {b.icon}
                </div>
                <span className="text-center text-white/40 text-[0.55rem] font-bold tracking-widest uppercase leading-tight whitespace-pre-line">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote — matching back cover quote treatment */}
        <div className="border-t border-white/10 py-6 px-4">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
            <span className="text-accent text-4xl font-black leading-none opacity-60 select-none">&ldquo;</span>
            <p className="text-accent text-base font-semibold italic">
              Learning to prompt well is like learning to write an email.
              A small skill that quietly changes everything.
            </p>
            <span className="text-accent text-4xl font-black leading-none opacity-60 self-end select-none">&rdquo;</span>
          </div>
        </div>
      </section>

      {/* ── WHAT IS PC1 ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">The Method</p>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">What is C.R.A.F.T.?</h2>
          <p className="text-gray-600 text-lg mb-4 max-w-3xl mx-auto">
            PC1 teaches you one five-part structure that works on any AI — Claude, ChatGPT, Gemini, or any tool
            that reads instructions. Set the context. Assign a role. Name the task. Shape the output. Calibrate the tone.
          </p>
          <p className="text-gray-500 text-base mb-10 max-w-2xl mx-auto">
            Fewer retries. Better answers. Less waste — for every person who types a question into a machine.
          </p>

          {/* C.R.A.F.T. cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto mb-4">
            {craftLetters.map(({ letter, word }) => (
              <div key={letter} className="bg-primary text-white rounded-xl p-5 text-center group hover:bg-primary-mid transition-colors">
                <div className="text-accent text-3xl font-black mb-1">{letter}</div>
                <div className="text-white/70 text-xs uppercase tracking-widest">{word}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">The C.R.A.F.T. method — the core of PromptCraft One</p>
        </div>
      </section>

      {/* ── BOOK SECTION ── */}
      <section className="py-20 px-4 bg-[#f4f7f4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">The Book</p>
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
                &ldquo;How to Talk to Machines&rdquo;
              </h2>
              <p className="text-gray-600 mb-5 text-base leading-relaxed">
                A plain-English guide to getting consistent, useful results from AI.
                Written at two levels — clear enough for a Year 7 student,
                serious enough for a university or government reader.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '24 chapters — method, applications, environment, and the future',
                  'Industry chapters: healthcare, legal, education, finance, software, marketing',
                  'Written for people who know what they mean but not how to ask',
                ].map(t => (
                  <li key={t} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-accent font-black mt-0.5 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/book" className="btn-primary">Get the Book</Link>
                <Link href="/downloads" className="btn-secondary">All Downloads</Link>
              </div>
            </div>

            {/* Book mock — matching the cover colour */}
            <div className="bg-primary rounded-2xl p-10 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle, #6dbf3a 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-6">
                BETTER PROMPTS. BETTER OUTCOMES.{' '}
                <span className="text-accent">BETTER WORLD.</span>
              </p>
              <div className="relative">
                <p className="text-white font-black text-2xl tracking-tight mb-0">PromptCraft</p>
                <p className="text-accent font-black text-7xl leading-none">1</p>
              </div>
              <p className="text-white/40 text-xs tracking-wider uppercase mt-4 mb-1">by</p>
              <p className="text-white font-semibold tracking-[0.15em] uppercase text-sm">John Kenneally</p>
              <div className="mt-6 pt-6 border-t border-white/10 text-white/40 text-xs">
                PDF + EPUB · 24 chapters · Dual reading levels
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── START HERE CTA ── */}
      <section className="py-14 px-4 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-primary mb-3">Not sure where to start?</h2>
          <p className="text-primary/70 mb-6 text-base">Answer five quick questions and get a personalised PC1 recommendation.</p>
          <Link
            href="/start"
            className="bg-primary text-white font-black px-10 py-4 rounded-lg hover:bg-primary-mid transition-colors inline-block tracking-wide"
          >
            Take the Start Here quiz →
          </Link>
        </div>
      </section>

      {/* ── DOWNLOADS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-2">Digital Products</p>
            <h2 className="text-3xl font-black text-primary mb-2">Paid Downloads</h2>
            <p className="text-gray-500">Books, cheat sheets, templates, and kits — all downloadable.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/downloads" className="btn-secondary">See all downloads</Link>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-20 px-4 bg-[#f4f7f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-2">Structured Learning</p>
            <h2 className="text-3xl font-black text-primary mb-2">PC1 Courses</h2>
            <p className="text-gray-500">Year 7 through to managerial and technical levels.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCourses.map(c => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/courses" className="btn-secondary">Browse all courses</Link>
          </div>
        </div>
      </section>

      {/* ── CLASSROOM + LIBRARY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5 -translate-y-8 translate-x-8" />
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Schools &amp; Teaching</p>
            <h2 className="text-2xl font-black mb-3">PC1 Classroom</h2>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Lesson plans, student guides, and school-safe activities built on the C.R.A.F.T. method.
              Year 7 through Year 10.
            </p>
            <Link href="/classroom" className="btn-primary text-sm">Visit the Classroom</Link>
          </div>
          <div className="border-2 border-gray-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5 -translate-y-8 translate-x-8" />
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Articles &amp; Essays</p>
            <h2 className="text-2xl font-black text-primary mb-3">PC1 Library</h2>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Prompt literacy, AI ethics, schools, workplaces, families, and the future.
              Supporting reading for the method.
            </p>
            <Link href="/library" className="btn-secondary text-sm">Browse the Library</Link>
          </div>
        </div>
      </section>

      {/* ── CHEAT SHEET ── */}
      <section className="py-14 px-4 bg-primary text-white text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Free Resource</p>
        <h2 className="text-2xl font-black mb-3">Get the PC1 Cheat Sheet</h2>
        <p className="text-white/50 mb-6">One page. The whole C.R.A.F.T. method. Print it, pin it, use it.</p>
        <Link href="/cheat-sheet" className="btn-primary inline-block">Get the Cheat Sheet</Link>
      </section>

      {/* ── FINAL CTA ── */}
      <CTASection
        heading="Ready to talk to machines better?"
        subtext="Start with the PC1 book, the cheat sheet, or take the Start Here quiz."
        primaryLabel="Get the Book"
        primaryHref="/book"
        secondaryLabel="Start Here Quiz"
        secondaryHref="/start"
      />
    </>
  )
}
