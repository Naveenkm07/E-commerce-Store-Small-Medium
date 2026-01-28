import { Users, Target, Award, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
                    <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                        Your trusted destination for quality products at unbeatable prices. We're committed to delivering excellence in every order.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-4">
                                Founded with a simple mission: to make quality products accessible to everyone. ShopHub started as a small startup with big dreams, and today we're proud to serve thousands of satisfied customers across the country.
                            </p>
                            <p className="mb-4">
                                We believe that online shopping should be easy, enjoyable, and trustworthy. That's why we carefully curate our product selection, partner with reliable suppliers, and provide exceptional customer service at every step.
                            </p>
                            <p>
                                From electronics to fashion, home goods to beauty products, we offer a diverse range of items that meet the needs of modern consumers. Every product is chosen with care, ensuring you get the best value for your money.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
                            <p className="text-gray-600">
                                We never compromise on quality. Every product is thoroughly vetted to ensure it meets our high standards.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-secondary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focused</h3>
                            <p className="text-gray-600">
                                Your satisfaction is our priority. We're here to help with friendly, responsive customer service.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly improve our platform and services to provide you with the best shopping experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Placeholder) */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="font-semibold text-gray-900 mb-1">Team Member</h3>
                                <p className="text-sm text-gray-500">Position</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's Get in Touch
                    </h2>
                    <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
