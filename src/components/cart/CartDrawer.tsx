'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
                        role="dialog"
                        aria-labelledby="cart-drawer-title"
                        aria-modal="true"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 id="cart-drawer-title" className="text-xl font-bold text-gray-900">
                                Shopping Cart ({totalItems})
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Close cart"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-lg font-medium text-gray-600 mb-2">Your cart is empty</p>
                                    <p className="text-sm text-gray-500 mb-6">Add some products to get started!</p>
                                    <Button onClick={onClose} variant="primary">
                                        Continue Shopping
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={`${item.product.id}-${item.selectedVariants?.size}-${item.selectedVariants?.color}`}
                                            className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                                        >
                                            {/* Product Image */}
                                            <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.product.images[0]}
                                                    alt={item.product.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="80px"
                                                />
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                                                    {item.product.name}
                                                </h3>
                                                {item.selectedVariants && (
                                                    <p className="text-xs text-gray-500 mb-2">
                                                        {item.selectedVariants.size && `Size: ${item.selectedVariants.size}`}
                                                        {item.selectedVariants.size && item.selectedVariants.color && ' • '}
                                                        {item.selectedVariants.color && `Color: ${item.selectedVariants.color}`}
                                                    </p>
                                                )}
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {formatPrice(item.product.price)}
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 mt-2">
                                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                            className="p-1 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-l-lg"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="w-4 h-4 text-gray-600" />
                                                        </button>
                                                        <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[2rem] text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                            className="p-1 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-r-lg"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="w-4 h-4 text-gray-600" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.product.id)}
                                                        className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                                                        aria-label="Remove from cart"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-base font-medium text-gray-900">Subtotal</span>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {formatPrice(subtotal)}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-4">
                                    Shipping and taxes calculated at checkout
                                </p>
                                <div className="space-y-2">
                                    <Link href="/checkout" onClick={onClose}>
                                        <Button className="w-full" size="lg">
                                            Proceed to Checkout
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="w-full" onClick={onClose}>
                                        Continue Shopping
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
