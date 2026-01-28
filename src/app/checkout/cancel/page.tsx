import { Metadata } from 'next';
import Link from 'next/link';
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Checkout Cancelled - ShopHub',
    description: 'Your checkout was cancelled',
};

export default function CheckoutCancelPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    {/* Cancel Icon */}
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="w-12 h-12 text-orange-600" />
                    </div>

                    {/* Cancel Message */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Checkout Cancelled
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        No charges were made. Your items are still in your cart if you'd like to complete your purchase.
                    </p>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-3 text-left">
                            <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-blue-900 mb-1">Why did this happen?</h3>
                                <p className="text-sm text-blue-800">
                                    You may have clicked the back button, closed the payment window, or chose to cancel the transaction. Your cart has been saved and is ready when you are.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <Link href="/cart">
                            <Button size="lg" className="w-full sm:w-auto">
                                <ArrowLeft className="w-5 h-5" />
                                Return to Cart
                            </Button>
                        </Link>
                        <Link href="/shop">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>

                    {/* Support */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">
                            Having trouble completing your purchase?
                        </p>
                        <Link href="/contact">
                            <Button variant="ghost" size="sm">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
