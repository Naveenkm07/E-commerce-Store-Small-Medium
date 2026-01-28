'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, ShoppingCart, Heart, Share2, Check, Minus, Plus } from 'lucide-react';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ProductGrid from '@/components/products/ProductGrid';

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

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string | undefined>();
    const [selectedColor, setSelectedColor] = useState<string | undefined>();
    const [added, setAdded] = useState(false);

    const sizeVariants = product.variants?.filter((v) => v.type === 'size') || [];
    const colorVariants = product.variants?.filter((v) => v.type === 'color') || [];

    const handleAddToCart = () => {
        addToCart(product, quantity, {
            size: selectedSize,
            color: selectedColor,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

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

                                {/* Rating */}
                                {product.rating && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(product.rating!)
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {product.rating} ({product.reviews} reviews)
                                        </span>
                                    </div>
                                )}

                                {/* Price */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {formatPrice(product.price)}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-xl text-gray-500 line-through">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>

                                {/* Stock Status */}
                                <div className="mb-6">
                                    {product.inStock ? (
                                        <Badge variant="success" className="text-sm">
                                            <Check className="w-4 h-4 mr-1" />
                                            In Stock ({product.stock} available)
                                        </Badge>
                                    ) : (
                                        <Badge variant="danger" className="text-sm">
                                            Out of Stock
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            </div>

                            {/* Size Variants */}
                            {sizeVariants.length > 0 && (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-900 mb-3">
                                        Select Size
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {sizeVariants.map((variant) => (
                                            <button
                                                key={variant.id}
                                                onClick={() => setSelectedSize(variant.value)}
                                                disabled={!variant.available}
                                                className={`
                          px-4 py-2 rounded-lg font-medium transition-all
                          ${selectedSize === variant.value
                                                        ? 'bg-primary-600 text-white ring-2 ring-primary-600 ring-offset-2'
                                                        : variant.available
                                                            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                                                    }
                        `}
                                            >
                                                {variant.value}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Color Variants */}
                            {colorVariants.length > 0 && (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-900 mb-3">
                                        Select Color
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {colorVariants.map((variant) => (
                                            <button
                                                key={variant.id}
                                                onClick={() => setSelectedColor(variant.value)}
                                                disabled={!variant.available}
                                                className={`
                          px-4 py-2 rounded-lg font-medium transition-all
                          ${selectedColor === variant.value
                                                        ? 'bg-primary-600 text-white ring-2 ring-primary-600 ring-offset-2'
                                                        : variant.available
                                                            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                                                    }
                        `}
                                            >
                                                {variant.value}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quantity */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-900 mb-3">
                                    Quantity
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <span className="px-6 py-2 text-lg font-medium text-gray-900 min-w-[4rem] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                        disabled={quantity >= product.stock}
                                        className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-50"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <Button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock || added}
                                    size="lg"
                                    className="w-full"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    {added ? 'Added to Cart!' : 'Add to Cart'}
                                </Button>

                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" size="lg" className="w-full">
                                        <Heart className="w-5 h-5" />
                                        Save
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full">
                                        <Share2 className="w-5 h-5" />
                                        Share
                                    </Button>
                                </div>
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
