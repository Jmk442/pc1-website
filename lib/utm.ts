export const APPROVED_UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

export type ApprovedUtmKey = (typeof APPROVED_UTM_KEYS)[number]
export type ApprovedUtms = Partial<Record<ApprovedUtmKey, string>>

const STORAGE_KEY = 'pc1_approved_utm_v1'

export function pickApprovedUtms(search: string): ApprovedUtms {
  const query = search.startsWith('?') ? search.slice(1) : search
  const params = new URLSearchParams(query)
  const picked: ApprovedUtms = {}

  for (const key of APPROVED_UTM_KEYS) {
    const value = params.get(key)?.trim()
    if (value) picked[key] = value
  }

  return picked
}

function readStored(): ApprovedUtms {
  if (typeof window === 'undefined') return {}

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const picked: ApprovedUtms = {}
    for (const key of APPROVED_UTM_KEYS) {
      const value = parsed[key]
      if (typeof value === 'string' && value.trim()) picked[key] = value.trim()
    }
    return picked
  } catch {
    return {}
  }
}

function writeStored(utms: ApprovedUtms) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms))
  } catch {
    // Private mode or quota — checkout still uses in-memory URL params.
  }
}

export function captureApprovedUtms(search?: string): ApprovedUtms {
  const fromUrl = pickApprovedUtms(
    search ?? (typeof window !== 'undefined' ? window.location.search : ''),
  )
  const stored = readStored()
  const merged = { ...stored, ...fromUrl }
  if (Object.keys(fromUrl).length > 0) writeStored(merged)
  return merged
}

export function getApprovedUtms(): ApprovedUtms {
  const fromUrl = pickApprovedUtms(typeof window !== 'undefined' ? window.location.search : '')
  const stored = readStored()
  return { ...stored, ...fromUrl }
}

export function applyApprovedUtms(baseUrl: string, utms: ApprovedUtms): string {
  const url = new URL(baseUrl)
  for (const key of APPROVED_UTM_KEYS) {
    const value = utms[key]?.trim()
    if (value) url.searchParams.set(key, value)
  }
  return url.toString()
}

export function withApprovedUtms(baseUrl: string): string {
  return applyApprovedUtms(baseUrl, getApprovedUtms())
}
