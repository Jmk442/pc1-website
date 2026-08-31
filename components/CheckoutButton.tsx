'use client'

import Link from 'next/link'
import { buyCtaLabel, getCheckoutHref, isCheckoutLive } from '@/data/pc1Product'

type Props = {
  className?: string
  label?: string
}

export default function CheckoutButton({ className, label = buyCtaLabel }: Props) {
  const href = getCheckoutHref()
  const live = isCheckoutLive()
  const classes = className ?? 'btn-primary'

  if (live) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  )
}
