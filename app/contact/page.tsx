import type { Metadata } from 'next'
import { seo } from '@/data/seo'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: seo.contactTitle,
  description: seo.contactDescription,
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">Get in touch</h1>
      <p className="text-gray-500 mb-8">
        Questions about PromptCraft 1, teaching the method, or the update list — write below.
      </p>

      <div className="card mb-10">
        <form name="contact" method="POST" data-netlify="true" className="space-y-5">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1">Your name</label>
            <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">Email address</label>
            <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <button type="submit" className="btn-primary w-full">Send message</button>
        </form>
      </div>

      <EmailCapture compact />
    </div>
  )
}
