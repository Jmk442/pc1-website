import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-black text-primary mb-3">Page not found</h1>
      <p className="text-gray-600 mb-8">That address is not part of the PromptCraft 1 site.</p>
      <Link href="/" className="btn-primary inline-block">Back to home</Link>
    </div>
  )
}
