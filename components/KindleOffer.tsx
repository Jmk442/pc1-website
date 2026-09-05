import { isKindleLive, kindleOffer } from '@/data/pc1Product'

type Props = {
  tone?: 'light' | 'dark'
}

export default function KindleOffer({ tone = 'light' }: Props) {
  const textClass = tone === 'dark' ? 'text-white/40' : 'text-gray-500'
  const linkClass =
    tone === 'dark'
      ? 'font-semibold text-white/70 hover:text-accent'
      : 'font-semibold text-primary hover:text-accent'

  if (isKindleLive() && kindleOffer.amazonUrl) {
    return (
      <p className={`text-sm mt-4 leading-relaxed ${textClass}`}>
        <a
          href={kindleOffer.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {kindleOffer.liveCtaLabel}
        </a>
      </p>
    )
  }

  return <p className={`text-sm mt-4 leading-relaxed ${textClass}`}>{kindleOffer.pendingCopy}</p>
}
