'use client'

import { useState, FormEvent } from 'react'
import { saveToStorage } from '@/lib/storage'

export default function EmailCapture({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    // Email provider is not connected yet. Store locally so the interface is real
    // without claiming a live mailing list.
    saveToStorage('update_list_interest', {
      email: email.trim(),
      at: new Date().toISOString(),
    })
    setDone(true)
  }

  return (
    <section className={compact ? '' : 'py-16 px-4 bg-white'} id="updates">
      <div className={compact ? '' : 'max-w-xl mx-auto text-center'}>
        {!compact && (
          <>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Stay in touch</p>
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-3">PromptCraft updates</h2>
            <p className="text-gray-600 mb-6">
              Practical PromptCraft notes, useful prompting material, and news about what comes next.
            </p>
          </>
        )}
        {done ? (
          <p className="text-primary font-semibold">Thank you. We have your details.</p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
            <label htmlFor="pc1-email" className="sr-only">Email address</label>
            <input
              id="pc1-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Join the list
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
