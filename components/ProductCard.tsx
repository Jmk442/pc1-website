import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const isPlaceholder = product.checkoutLink.startsWith('GUMROAD_LINK')

  return (
    <div className={`card flex flex-col h-full transition-shadow hover:shadow-md ${product.featured ? 'border-accent border-2' : 'border-gray-100'}`}>
      <div className="flex items-start justify-between mb-3">
        {product.featured ? (
          <span className="inline-block bg-accent text-primary text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
            Popular
          </span>
        ) : (
          <span />
        )}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm flex-1 mb-3">{product.description}</p>
      <p className="text-xs text-gray-400 mb-1"><span className="font-semibold text-gray-500">Who it&apos;s for:</span> {product.whoFor}</p>
      <p className="text-xs text-gray-400 mb-5"><span className="font-semibold text-gray-500">Format:</span> {product.fileType}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <span className="text-2xl font-black text-primary">{product.price}</span>
        {isPlaceholder ? (
          <span className="text-xs text-gray-400 italic">Coming soon</span>
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
