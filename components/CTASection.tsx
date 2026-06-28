import Link from 'next/link'

interface CTASectionProps {
  heading: string
  subtext: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-primary text-white py-20 px-4 relative overflow-hidden">
      {/* Subtle geometric ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[600px] h-[600px] rounded-full border-2 border-accent" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-accent" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4">PromptCraft One</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">{heading}</h2>
        <p className="text-white/60 mb-8 text-lg">{subtext}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary text-base px-8 py-3.5">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-accent hover:text-accent transition-colors text-base"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
