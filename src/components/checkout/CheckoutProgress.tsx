import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
    id: number;
    name: string;
    status: 'complete' | 'current' | 'upcoming';
}

const steps: Step[] = [
    { id: 1, name: 'Shipping', status: 'current' },
    { id: 2, name: 'Payment', status: 'upcoming' },
    { id: 3, name: 'Review', status: 'upcoming' },
];

interface CheckoutProgressProps {
    currentStep?: number;
}

export default function CheckoutProgress({ currentStep = 1 }: CheckoutProgressProps) {
    const updatedSteps = steps.map((step) => ({
        ...step,
        status:
            step.id < currentStep
                ? ('complete' as const)
                : step.id === currentStep
                    ? ('current' as const)
                    : ('upcoming' as const),
    }));

    return (
        <nav aria-label="Checkout progress" className="mb-8">
            <ol className="flex items-center justify-center">
                {updatedSteps.map((step, stepIdx) => (
                    <li
                        key={step.name}
                        className={cn(
                            'relative flex-1',
                            stepIdx !== updatedSteps.length - 1 ? 'pr-8 sm:pr-20' : ''
                        )}
                    >
                        {/* Connector Line */}
                        {stepIdx !== updatedSteps.length - 1 && (
                            <div
                                className="absolute top-5 left-1/2 w-full h-0.5"
                                aria-hidden="true"
                            >
                                <div
                                    className={cn(
                                        'h-full transition-colors duration-300',
                                        step.status === 'complete' ? 'bg-primary-600' : 'bg-gray-200'
                                    )}
                                />
                            </div>
                        )}

                        {/* Step Circle */}
                        <div className="relative flex flex-col items-center group">
                            <span
                                className={cn(
                                    'w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 relative z-10',
                                    step.status === 'complete'
                                        ? 'bg-primary-600 border-primary-600'
                                        : step.status === 'current'
                                            ? 'border-primary-600 bg-white'
                                            : 'border-gray-300 bg-white'
                                )}
                                aria-current={step.status === 'current' ? 'step' : undefined}
                            >
                                {step.status === 'complete' ? (
                                    <Check className="w-6 h-6 text-white" aria-hidden="true" />
                                ) : (
                                    <span
                                        className={cn(
                                            'text-sm font-medium',
                                            step.status === 'current'
                                                ? 'text-primary-600'
                                                : 'text-gray-500'
                                        )}
                                    >
                                        {step.id}
                                    </span>
                                )}
                            </span>

                            {/* Step Name */}
                            <span
                                className={cn(
                                    'mt-2 text-sm font-medium transition-colors duration-300',
                                    step.status === 'complete' || step.status === 'current'
                                        ? 'text-gray-900'
                                        : 'text-gray-500'
                                )}
                            >
                                {step.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
