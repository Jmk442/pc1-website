import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function DownloadsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Paid Downloads</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">PC1 Downloads</h1>
      <p className="text-gray-500 text-lg mb-3">
        Books, cheat sheets, templates, and kits. All downloadable. Checkout handled securely via external payment link.
      </p>
      <p className="text-sm text-gray-400 mb-10 bg-yellow-50 border border-yellow-200 rounded px-4 py-2 inline-block">
        Stage 1 note: checkout links open an external payment page (Gumroad or Stripe). Replace placeholder links in <code>data/products.ts</code> with your real checkout URLs.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="products">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
