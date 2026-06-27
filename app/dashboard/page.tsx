import DashboardPreview from '@/components/DashboardPreview'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-5 py-3 mb-8 text-sm text-yellow-800">
        <strong>Dashboard preview — Stage 1.</strong> Full account login and protected content will be added in the Stage 2 SaaS upgrade. Your preferences are stored in your browser only.
      </div>

      <h1 className="text-4xl font-extrabold text-primary mb-2">My PC1 Dashboard</h1>
      <p className="text-gray-500 mb-10">Your personal PC1 hub. Track your path, access your recommendations, and find your next step.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-primary mb-4">My PC1 path</h2>
          <DashboardPreview />
        </div>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-bold text-primary mb-2">My downloads</h3>
            <p className="text-gray-400 italic text-sm">Download history will appear here after Stage 2 account setup.</p>
            <Link href="/downloads" className="text-accent text-sm hover:underline mt-2 inline-block">Browse downloads →</Link>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary mb-2">My courses</h3>
            <p className="text-gray-400 italic text-sm">Course progress will appear here after Stage 2 account setup.</p>
            <Link href="/courses" className="text-accent text-sm hover:underline mt-2 inline-block">Browse courses →</Link>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary mb-2">My saved prompts</h3>
            <p className="text-gray-400 italic text-sm">Prompt saving will be added in a future update.</p>
          </div>
          <div className="card bg-gray-50">
            <h3 className="font-bold text-primary mb-2">PC2 — coming soon</h3>
            <p className="text-gray-500 text-sm">PC2 is the professional and industrial version of PromptCraft. Sign up to the newsletter to be notified when it launches.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
