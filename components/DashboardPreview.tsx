'use client'
import { useEffect, useState } from 'react'
import { loadFromStorage } from '@/lib/storage'
import type { Recommendation, QuizAnswers } from '@/lib/recommendations'
import Link from 'next/link'

export default function DashboardPreview() {
  const [rec, setRec] = useState<Recommendation | null>(null)
  const [answers, setAnswers] = useState<QuizAnswers | null>(null)

  useEffect(() => {
    setRec(loadFromStorage<Recommendation>('recommendation'))
    setAnswers(loadFromStorage<QuizAnswers>('quiz_answers'))
  }, [])

  return (
    <div className="space-y-4">
      {rec ? (
        <>
          <div className="card">
            <h3 className="font-bold text-primary mb-1">Your recommended product</h3>
            <p className="text-gray-700">{rec.product}</p>
            <Link href="/downloads" className="text-accent text-sm hover:underline mt-2 inline-block">View in Downloads →</Link>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary mb-1">Your recommended course</h3>
            <p className="text-gray-700">{rec.course}</p>
            <Link href="/courses" className="text-accent text-sm hover:underline mt-2 inline-block">Browse Courses →</Link>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary mb-1">Your reading category</h3>
            <p className="text-gray-700">{rec.articleCategory}</p>
            <Link href="/library" className="text-accent text-sm hover:underline mt-2 inline-block">Visit Library →</Link>
          </div>
          {answers && (
            <details className="card text-sm text-gray-500">
              <summary className="cursor-pointer font-medium">Your quiz answers</summary>
              <ul className="mt-3 space-y-1">
                {Object.entries(answers).map(([k, v]) => (
                  <li key={k}><span className="font-semibold capitalize">{k}:</span> {v}</li>
                ))}
              </ul>
            </details>
          )}
        </>
      ) : (
        <div className="card text-center text-gray-500">
          <p className="mb-4">No recommendation yet. Take the Start Here quiz to get a personalised PC1 path.</p>
          <Link href="/start" className="btn-primary inline-block">Take the quiz →</Link>
        </div>
      )}
    </div>
  )
}
