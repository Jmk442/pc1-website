import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const isPlaceholder = product.checkoutLink.startsWith('GUMROAD_LINK')

  return (
    <div className={`card flex flex-col h-full ${product.featured ? 'border-accent border-2' : ''}`}>
      {product.featured && (
        <span className="inline-block bg-accent text-white text-xs font-semibold px-2 py-0.5 rounded mb-3 self-start">
          Popular
        </span>
      )}
      <h3 className="text-lg font-bold text-primary mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm flex-1 mb-3">{product.description}</p>
      <p className="text-xs text-gray-500 mb-1"><span className="font-semibold">Who it&apos;s for:</span> {product.whoFor}</p>
      <p className="text-xs text-gray-500 mb-4"><span className="font-semibold">Format:</span> {product.fileType}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-2xl font-bold text-primary">{product.price}</span>
        {isPlaceholder ? (
          <span className="text-xs text-gray-400 italic">Checkout link coming soon</span>
        ) : (
          <a
            href={product.checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Buy / Download
          </a>
        )}
      </div>
    </div>
  )
}
