'use client'

import { useEffect } from 'react'
import { captureApprovedUtms } from '@/lib/utm'

export default function UtmCapture() {
  useEffect(() => {
    captureApprovedUtms()
  }, [])

  return null
}
