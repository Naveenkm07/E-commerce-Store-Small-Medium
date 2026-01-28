'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { CheckoutFormData } from '@/types/product';
import CheckoutProgress from '@/components/checkout/CheckoutProgress';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import Button from '@/components/ui/Button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
    const router = useRouter();
    const { items, subtotal, clearCart } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const handleCheckout = async (data: CheckoutFormData) => {
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log('Order Details:', {
            customerInfo: data,
            items,
            total,
        });

        setIsProcessing(false);
        setOrderPlaced(true);

        // Clear cart after successful order
        setTimeout(() => {
            clearCart();
            router.push('/');
        }, 3000);
    };

    if (items.length === 0 && !orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-16">
                        <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Add some products to your cart before checking out.
                        </p>
                        <Link href="/shop">
                            <Button size="lg">Browse Products</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-10 h-10 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Thank you for your purchase. We'll send you a confirmation email shortly.
                        </p>
                        <p className="text-sm text-gray-500 mb-8">
                            Redirecting you to home page...
                        </p>
                        <Link href="/">
                            <Button size="lg">Return to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <CheckoutProgress currentStep={1} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <CheckoutForm onSubmit={handleCheckout} isLoading={isProcessing} />
                        </div>

                        {/* Payment Info Note */}
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-900">
                                <strong>Demo Mode:</strong> This is a demonstration checkout. No real payment will be processed.
                                In production, this would integrate with Stripe for secure payments.
                            </p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                {items.map((item) => (
                                    <div
                                        key={`${item.product.id}-${item.selectedVariants?.size}-${item.selectedVariants?.color}`}
                                        className="flex gap-3"
                                    >
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">
                                            {formatPrice(item.product.price * item.quantity)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-4 space-y-3">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
