import { pc1Product } from '@/data/pc1Product'

type Props = {
  className?: string
  priority?: boolean
}

export default function CoverImage({ className, priority = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={pc1Product.coverSrc}
      alt={pc1Product.coverAlt}
      width={960}
      height={1536}
      className={className ?? 'w-full h-auto'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
    />
  )
}
