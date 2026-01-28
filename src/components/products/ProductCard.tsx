'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types/product';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
    };

    const discount = product.originalPrice
        ? calculateDiscount(product.originalPrice, product.price)
        : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -4 }}
            className="group"
        >
            <Link href={`/shop/${product.slug}`} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Discount Badge */}
                        {discount > 0 && (
                            <div className="absolute top-3 left-3">
                                <Badge variant="danger" className="font-semibold">
                                    {discount}% OFF
                                </Badge>
                            </div>
                        )}

                        {/* Stock Badge */}
                        {!product.inStock && (
                            <div className="absolute top-3 right-3">
                                <Badge variant="warning">Out of Stock</Badge>
                            </div>
                        )}

                        {/* Featured Badge */}
                        {product.featured && (
                            <div className="absolute top-3 right-3">
                                <Badge variant="info">Featured</Badge>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                        {/* Category */}
                        <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-1">
                            {product.category.replace('-', ' & ')}
                        </p>

                        {/* Product Name */}
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                            {product.name}
                        </h3>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-1 mb-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                                <span className="text-xs text-gray-500">({product.reviews})</span>
                            </div>
                        )}

                        {/* Price */}
                        <div className="mt-auto">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xl font-bold text-gray-900">
                                    {formatPrice(product.price)}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-sm text-gray-500 line-through">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>

                            {/* Add to Cart Button */}
                            <Button
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                                className="w-full"
                                size="sm"
                                aria-label={`Add ${product.name} to cart`}
                            >
                                <ShoppingCart className="w-4 h-4" />
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
