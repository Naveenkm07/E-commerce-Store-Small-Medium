import { Star as StarIcon } from 'lucide-react';

interface StarProps {
    filled: boolean;
}

export default function Star({ filled }: StarProps) {
    return (
        <StarIcon
            className={`w-5 h-5 ${filled
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
        />
    );
}
