'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function EmailCapture({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const emailId = compact ? 'pc1-email-compact' : 'pc1-email'

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return

    setSubmitting(true)
    setError('')

    try {
      const formData = new FormData(form)
      const body = new URLSearchParams()
      formData.forEach((value, key) => {
        if (typeof value === 'string') body.append(key, value)
      })
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Submission failed')

      setDone(true)
      setEmail('')
    } catch {
      setError('We could not save your email just now. Please try again or use the contact page.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={compact ? '' : 'py-16 px-4 bg-white'} id="updates">
      <div className={compact ? '' : 'max-w-xl mx-auto text-center'}>
        {!compact && (
          <>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">Stay in touch</p>
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-3">PromptCraft updates</h2>
            <p className="text-gray-600 mb-6">
              Practical PromptCraft updates, information about PromptCraft 1, and news about PromptCraft 2.
            </p>
          </>
        )}
        {done ? (
          <p className="text-primary font-semibold">
            Thank you. You are on the PromptCraft update list.
          </p>
        ) : (
          <form
            name="promptcraft-updates"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="flex flex-col gap-3"
          >
            <input type="hidden" name="form-name" value="promptcraft-updates" />
            <input type="hidden" name="consent" value="PromptCraft updates requested" />
            <input type="hidden" name="source" value={compact ? 'contact-page' : 'home-page'} />
            <p className="hidden" aria-hidden="true">
              <label>
                Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor={emailId} className="sr-only">Email address</label>
              <input
                id={emailId}
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap" disabled={submitting}>
                {submitting ? 'Joining…' : 'Join the list'}
              </button>
            </div>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <p className={`text-xs text-gray-500 leading-relaxed ${compact ? '' : 'sm:text-left text-center'}`}>
              By joining, you ask to receive practical PromptCraft updates, PromptCraft 1 information, and
              PromptCraft 2 news. Your email is securely submitted to our Netlify-hosted update list. You can
              unsubscribe at any time. See the{' '}
              <Link href="/privacy" className="underline hover:text-primary">
                privacy notice
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
