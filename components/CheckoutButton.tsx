'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { buyCtaLabel, getCheckoutHref, isCheckoutLive, priceLabel } from '@/data/pc1Product'
import { captureApprovedUtms, withApprovedUtms } from '@/lib/utm'

type Props = {
  className?: string
  label?: string
}

export default function CheckoutButton({ className, label = buyCtaLabel }: Props) {
  const baseHref = getCheckoutHref()
  const live = isCheckoutLive()
  const classes = className ?? 'btn-primary'
  const [href, setHref] = useState(baseHref)

  useEffect(() => {
    captureApprovedUtms()
    setHref(live ? withApprovedUtms(baseHref) : baseHref)
  }, [baseHref, live])

  const accessibleLabel = `${label} — ${priceLabel}`

  if (live) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={accessibleLabel}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} aria-label={accessibleLabel}>
      {label}
    </Link>
  )
}
