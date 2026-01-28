'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { CheckoutFormData } from '@/types/product';

const checkoutSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    address: z.string().min(5, 'Please enter a valid address'),
    city: z.string().min(2, 'Please enter a valid city'),
    state: z.string().min(2, 'Please enter a valid state'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code'),
    country: z.string().min(2, 'Please select a country'),
    phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number'),
});

interface CheckoutFormProps {
    onSubmit: (data: CheckoutFormData) => void;
    isLoading?: boolean;
}

export default function CheckoutForm({ onSubmit, isLoading }: CheckoutFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <Input
                    label="Email Address"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="First Name"
                        {...register('firstName')}
                        error={errors.firstName?.message}
                        placeholder="John"
                    />
                    <Input
                        label="Last Name"
                        {...register('lastName')}
                        error={errors.lastName?.message}
                        placeholder="Doe"
                    />
                </div>

                <div className="mt-4">
                    <Input
                        label="Address"
                        {...register('address')}
                        error={errors.address?.message}
                        placeholder="123 Main St, Apt 4B"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Input
                        label="City"
                        {...register('city')}
                        error={errors.city?.message}
                        placeholder="New York"
                    />
                    <Input
                        label="State/Province"
                        {...register('state')}
                        error={errors.state?.message}
                        placeholder="NY"
                    />
                    <Input
                        label="ZIP/Postal Code"
                        {...register('zipCode')}
                        error={errors.zipCode?.message}
                        placeholder="10001"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input
                        label="Country"
                        {...register('country')}
                        error={errors.country?.message}
                        placeholder="United States"
                    />
                    <Input
                        label="Phone Number"
                        type="tel"
                        {...register('phone')}
                        error={errors.phone?.message}
                        placeholder="+1 (555) 123-4567"
                    />
                </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isLoading}
                >
                    Continue to Payment
                </Button>
            </div>
        </form>
    );
}
