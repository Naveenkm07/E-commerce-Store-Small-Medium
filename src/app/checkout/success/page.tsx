import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Package } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Order Successful - ShopHub',
    description: 'Your order has been placed successfully',
};

export default function CheckoutSuccessPage({
    searchParams,
}: {
    searchParams: { session_id?: string };
}) {
    const sessionId = searchParams.session_id;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>

                    {/* Success Message */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Payment Successful!
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Thank you for your purchase. Your order has been confirmed and will be processed shortly.
                    </p>

                    {/* Order Info */}
                    {sessionId && (
                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                                <Package className="w-4 h-4" />
                                <span>Order ID</span>
                            </div>
                            <p className="font-mono text-sm text-gray-900">{sessionId}</p>
                        </div>
                    )}

                    {/* What's Next */}
                    <div className="border-t border-gray-200 pt-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h2>
                        <div className="text-left space-y-3 max-w-md mx-auto">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                                    1
                                </div>
                                <p className="text-gray-600">
                                    You'll receive an order confirmation email shortly
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                                    2
                                </div>
                                <p className="text-gray-600">
                                    We'll send you shipping updates as your order is processed
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                                    3
                                </div>
                                <p className="text-gray-600">
                                    Your order will be delivered within 5-7 business days
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <Link href="/shop">
                            <Button size="lg" className="w-full sm:w-auto">
                                Continue Shopping
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Return to Home
                            </Button>
                        </Link>
                    </div>

                    {/* Support */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Need help? Contact us at{' '}
                            <a href="mailto:support@shophub.com" className="text-primary-600 hover:underline">
                                support@shophub.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
