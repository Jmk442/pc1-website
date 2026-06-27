import Link from 'next/link'
import { products } from '@/data/products'
import { courses } from '@/data/courses'
import ProductCard from '@/components/ProductCard'
import CourseCard from '@/components/CourseCard'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured)
  const featuredCourses = courses.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">PromptCraft One</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            How to Talk to Machines
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            The practical guide to getting better results from AI — for ordinary people,
            students, teachers, managers, and professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book" className="btn-primary text-lg px-8 py-4">
              Get the Book
            </Link>
            <Link href="/start" className="border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-lg">
              Start Here →
            </Link>
          </div>
        </div>
      </section>

      {/* What is PC1 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">What is PC1?</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            PC1 — PromptCraft One — is a method for turning your ideas into clear instructions that AI can follow.
            It teaches you how to set context, assign a role, name the task, shape the output, and calibrate the tone.
          </p>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Whether you are a parent trying to help your child use AI safely, a teacher introducing
            AI in the classroom, a manager writing reports, or a professional building systems —
            PC1 gives you a structure that works every time.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {['Context', 'Role', 'Action', 'Format', 'Tone'].map((item, i) => (
              <div key={item} className="bg-primary text-white rounded-lg p-4 text-center">
                <div className="text-accent text-2xl font-extrabold">{['C','R','A','F','T'][i]}</div>
                <div className="text-sm mt-1">{item}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">The C.R.A.F.T. method — the core of PromptCraft One</p>
        </div>
      </section>

      {/* Book promotion */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">The Book</p>
              <h2 className="text-3xl font-bold text-primary mb-4">&ldquo;How to Talk to Machines&rdquo;</h2>
              <p className="text-gray-600 mb-4">
                A plain-English guide to getting consistent, useful results from AI tools.
                Available as a digital book with dual reading levels — suitable for Year 7 through to professional use.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> 24 chapters covering method, applications, environment, and the future</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> Industry chapters: healthcare, legal, education, finance, software, marketing</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> Written for people who know what they mean but do not know how to ask</li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Link href="/book" className="btn-primary">Learn More</Link>
                <Link href="/downloads" className="btn-secondary">Buy Now</Link>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2">How to Talk to Machines</h3>
              <p className="text-gray-400 text-sm mb-4">by John Kenneally</p>
              <p className="text-gray-300 text-sm">PDF + EPUB · 24 chapters · Dual reading levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here CTA */}
      <section className="py-12 px-4 bg-accent text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Not sure where to start?</h2>
        <p className="text-white/90 mb-6">Answer five quick questions and get a personalised PC1 recommendation.</p>
        <Link href="/start" className="bg-white text-accent font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block">
          Take the Start Here quiz →
        </Link>
      </section>

      {/* Downloads preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">Paid Downloads</h2>
          <p className="text-gray-500 text-center mb-10">Books, cheat sheets, templates, and kits — all downloadable.</p>
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

      {/* Courses preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">PC1 Courses</h2>
          <p className="text-gray-500 text-center mb-10">Structured learning for all levels.</p>
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

      {/* Classroom preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">PC1 Classroom</h2>
          <p className="text-gray-600 mb-6">
            Teaching AI literacy in the classroom. Lesson plans, student guides, and school-safe activities
            built on the C.R.A.F.T. method.
          </p>
          <Link href="/classroom" className="btn-secondary">Visit the Classroom</Link>
        </div>
      </section>

      {/* Library preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">PC1 Library</h2>
          <p className="text-gray-600 mb-6">
            Articles, essays, rollout notes, and supporting reading on prompt literacy,
            AI ethics, schools, workplaces, families, and the future.
          </p>
          <Link href="/library" className="btn-secondary">Browse the Library</Link>
        </div>
      </section>

      {/* Cheat sheet CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Get the PC1 Cheat Sheet</h2>
        <p className="text-gray-300 mb-6">One page. The whole C.R.A.F.T. method. Print it, pin it, use it.</p>
        <Link href="/cheat-sheet" className="btn-primary inline-block">Get the Cheat Sheet</Link>
      </section>

      {/* Final CTA */}
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
