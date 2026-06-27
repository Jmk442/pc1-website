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
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-300 mb-8 text-lg">{subtext}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
