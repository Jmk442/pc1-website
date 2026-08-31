'use client'
import { useState } from 'react'
import { getRecommendation, type QuizAnswers } from '@/lib/recommendations'
import { saveToStorage } from '@/lib/storage'
import Link from 'next/link'
import { products } from '@/data/products'

const steps = [
  {
    key: 'who' as keyof QuizAnswers,
    question: 'Who are you using AI for?',
    options: ['myself', 'child / family', 'classroom', 'workplace', 'business', 'industry', 'software / automation', 'writing / content', 'research'],
  },
  {
    key: 'goal' as keyof QuizAnswers,
    question: 'What is your main goal?',
    options: ['write better prompts', 'learn the PC1 method', 'teach others', 'create safer AI rules', 'use AI at work', 'build an app or automation', 'buy the book', 'get templates', 'start a course'],
  },
  {
    key: 'level' as keyof QuizAnswers,
    question: 'What level do you need?',
    options: ['simple / Year 7', 'Year 10', 'professional / managerial', 'technical build level'],
  },
  {
    key: 'output' as keyof QuizAnswers,
    question: 'What output do you want?',
    options: ['book', 'cheat sheet', 'course', 'template pack', 'parent/family kit', 'classroom pack', 'manager pack', 'software build prompt', 'full bundle'],
  },
  {
    key: 'safety' as keyof QuizAnswers,
    question: 'Do you need values, ethics, or safety boundaries included?',
    options: ['yes, family values', 'yes, classroom rules', 'yes, workplace rules', 'yes, industry/compliance boundaries', 'no, just better prompting'],
  },
]

export default function StartPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [done, setDone] = useState(false)

  function choose(value: string) {
    const key = steps[step].key
    const newAnswers = { ...answers, [key]: value }
    setAnswers(newAnswers)

    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      const complete = newAnswers as QuizAnswers
      saveToStorage('quiz_answers', complete)
      const rec = getRecommendation(complete)
      saveToStorage('recommendation', rec)
      setDone(true)
    }
  }

  if (done) {
    const rec = getRecommendation(answers as QuizAnswers)
    const product = products.find(p => p.id === rec.productId)
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-extrabold text-primary mb-4">Your PC1 Recommendation</h1>
        <p className="text-gray-600 mb-8">{rec.nextStep}</p>
        <div className="card mb-6 text-left">
          <h2 className="font-bold text-primary mb-1">Recommended product</h2>
          <p className="text-gray-700">{rec.product}</p>
          {product && (
            <p className="text-sm text-gray-500 mt-1">{product.price} · {product.fileType}</p>
          )}
        </div>
        <div className="card mb-6 text-left">
          <h2 className="font-bold text-primary mb-1">Recommended course</h2>
          <p className="text-gray-700">{rec.course}</p>
        </div>
        <div className="card mb-8 text-left">
          <h2 className="font-bold text-primary mb-1">Recommended reading category</h2>
          <p className="text-gray-700">{rec.articleCategory}</p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/downloads" className="btn-primary">See Downloads</Link>
          <Link href="/courses" className="btn-secondary">Browse Courses</Link>
          <button
            className="text-gray-500 text-sm underline"
            onClick={() => { setStep(0); setAnswers({}); setDone(false) }}
          >
            Retake quiz
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-6">Your answers are saved to your browser for the dashboard preview.</p>
      </div>
    )
  }

  const current = steps[step]
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Start Here</p>
      <div className="flex gap-1 mb-8">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-accent' : 'bg-gray-200'}`}
          />
        ))}
      </div>
      <h1 className="text-2xl font-extrabold text-primary mb-8">{current.question}</h1>
      <div className="grid gap-3">
        {current.options.map(opt => (
          <button
            key={opt}
            onClick={() => choose(opt)}
            className="text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-accent hover:bg-red-50 transition-colors font-medium text-gray-700 capitalize focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-6 text-center">Question {step + 1} of {steps.length}</p>
    </div>
  )
}
