import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, products } from '@/data/products';
import Badge from '@/components/ui/Badge';
import ProductGrid from '@/components/products/ProductGrid';
import ProductDetailClient from '@/components/products/ProductDetailClient';

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Product Details */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {product.discount && (
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="danger" className="text-lg px-3 py-1">
                                            {product.discount}% OFF
                                        </Badge>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="mb-4">
                                <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-2">
                                    {product.category.replace('-', ' & ')}
                                </p>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {product.name}
                                </h1>

                                <ProductDetailClient product={product} />
                            </div>

                            <div className="border-t border-gray-200 pt-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                        <ProductGrid products={relatedProducts} />
                    </div>
                )}
            </div>
        </div>
    );
}
