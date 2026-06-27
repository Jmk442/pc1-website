export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">About</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">About PC1</h1>

      <div className="card mb-8">
        <h2 className="font-bold text-primary text-xl mb-4">John Kenneally</h2>
        <p className="text-gray-400 italic text-sm">
          Biography placeholder — replace with John Kenneally&apos;s real biography.
        </p>
      </div>

      <div className="card mb-8">
        <h2 className="font-bold text-primary text-xl mb-4">About PromptCraft One</h2>
        <p className="text-gray-600 mb-4">
          PromptCraft One — PC1 — is a method for turning tangled intent into usable action.
        </p>
        <p className="text-gray-600 mb-4">
          It began as a way to describe music and creative requirements precisely. It grew through
          multi-role handoff thinking, early prompt chaining, and structured engineering frameworks.
          Over time it became a named, reusable, teachable method — and then a book, a course library,
          and a growing platform.
        </p>
        <p className="text-gray-600">
          PC1 is for anyone who knows what they mean but does not yet know how to ask clearly.
        </p>
      </div>

      <div className="card">
        <h2 className="font-bold text-primary text-xl mb-4">The C.R.A.F.T. method</h2>
        <p className="text-gray-600 mb-4">
          C.R.A.F.T. stands for Context, Role, Action, Format, and Tone.
          These five elements structure any instruction to an AI tool so it produces a clear, consistent, useful result.
        </p>
        <p className="text-gray-600">
          For technical and software tasks, PC1 extends C.R.A.F.T. with D.E.T.:
          Dependencies, Environment, and Testing. Together they make AI builds reliable.
        </p>
      </div>
    </div>
  )
}
