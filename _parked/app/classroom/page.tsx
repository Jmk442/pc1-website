import Link from 'next/link'

export default function ClassroomPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Classroom</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">PC1 Classroom</h1>
      <p className="text-gray-500 text-lg mb-10">
        Teaching prompt literacy in schools. Lesson plans, student guides, and classroom activities built on the C.R.A.F.T. method.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <h2 className="text-xl font-bold text-primary mb-3">For teachers</h2>
          <p className="text-gray-600 mb-4">
            Introduce AI prompt literacy into your classroom with confidence.
            PC1 gives you lesson plans, activities, discussion guides, and student worksheets
            built around the C.R.A.F.T. method.
          </p>
          <p className="text-gray-400 italic text-sm">Lesson plans and teacher notes — content placeholder. Replace with final classroom pack materials.</p>
          <Link href="/downloads#classroom-pack" className="btn-secondary inline-block mt-4 text-sm">
            Download Classroom Starter Pack
          </Link>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-primary mb-3">For students</h2>
          <p className="text-gray-600 mb-4">
            Learn how to talk to AI tools clearly, honestly, and effectively.
            PC1 gives students a simple, proven structure for writing better prompts
            — for schoolwork, research, and creative projects.
          </p>
          <p className="text-gray-400 italic text-sm">Student guides and activities — content placeholder. Replace with final student-facing materials.</p>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Classroom rules for AI use</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2"><span className="text-accent font-bold">1.</span> Always identify the purpose before using AI.</li>
          <li className="flex items-start gap-2"><span className="text-accent font-bold">2.</span> Use C.R.A.F.T. to structure your prompt.</li>
          <li className="flex items-start gap-2"><span className="text-accent font-bold">3.</span> Check and verify AI outputs — do not accept them without review.</li>
          <li className="flex items-start gap-2"><span className="text-accent font-bold">4.</span> Do not share personal information with AI tools.</li>
          <li className="flex items-start gap-2"><span className="text-accent font-bold">5.</span> Use AI to help you think — not to replace your thinking.</li>
        </ul>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold text-primary mb-3">Lesson library</h2>
        <p className="text-gray-400 italic text-sm">Content placeholder — replace with final lesson content. Lessons will cover: What is a prompt? C.R.A.F.T. basics, Tone and format for students, Checking AI outputs, Using AI ethically.</p>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold text-primary mb-3">Activities</h2>
        <p className="text-gray-400 italic text-sm">Content placeholder — replace with classroom activity content.</p>
      </div>

      <p className="text-xs text-gray-400">
        Note: PC1 Classroom materials are designed for educational use. No claims about educational outcomes are made without evidence.
      </p>
    </div>
  )
}
