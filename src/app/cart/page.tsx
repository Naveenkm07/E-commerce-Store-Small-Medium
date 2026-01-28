'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-16">
                        <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link href="/shop">
                            <Button size="lg">
                                Start Shopping
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div
                                key={`${item.product.id}-${item.selectedVariants?.size}-${item.selectedVariants?.color}`}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <div className="flex gap-6">
                                    {/* Product Image */}
                                    <div className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.product.images[0]}
                                            alt={item.product.name}
                                            fill
                                            className="object-cover"
                                            sizes="128px"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <Link
                                                    href={`/shop/${item.product.slug}`}
                                                    className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                                                >
                                                    {item.product.name}
                                                </Link>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {item.product.category.replace('-', ' & ')}
                                                </p>
                                                {item.selectedVariants && (
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {item.selectedVariants.size && `Size: ${item.selectedVariants.size}`}
                                                        {item.selectedVariants.size && item.selectedVariants.color && ' • '}
                                                        {item.selectedVariants.color && `Color: ${item.selectedVariants.color}`}
                                                    </p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                aria-label="Remove from cart"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <span className="px-4 py-2 text-base font-medium text-gray-900 min-w-[3rem] text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                    disabled={item.quantity >= item.product.stock}
                                                    className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg disabled:opacity-50"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="text-xl font-bold text-gray-900">
                                                    {formatPrice(item.product.price * item.quantity)}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {formatPrice(item.product.price)} each
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                                </div>
                                {shipping > 0 && (
                                    <p className="text-xs text-primary-600">
                                        Add {formatPrice(50 - subtotal)} more for free shipping!
                                    </p>
                                )}
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (8%)</span>
                                    <span>{formatPrice(tax)}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>{formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/checkout">
                                <Button size="lg" className="w-full mb-3">
                                    Proceed to Checkout
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>

                            <Link href="/shop">
                                <Button variant="outline" size="md" className="w-full">
                                    Continue Shopping
                                </Button>
                            </Link>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">We Accept</h3>
                                <div className="flex gap-2">
                                    <div className="px-3 py-2 bg-gray-100 rounded text-xs font-medium text-gray-700">
                                        Visa
                                    </div>
                                    <div className="px-3 py-2 bg-gray-100 rounded text-xs font-medium text-gray-700">
                                        Mastercard
                                    </div>
                                    <div className="px-3 py-2 bg-gray-100 rounded text-xs font-medium text-gray-700">
                                        Amex
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
