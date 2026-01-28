'use client';

import { useState } from 'react';
import { FilterState, Category } from '@/types/product';
import Button from '@/components/ui/Button';
import { X } from 'lucide-react';

interface ProductFiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    onClearFilters: () => void;
}

const categories: { label: string; value: Category }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Home & Living', value: 'home-living' },
    { label: 'Beauty', value: 'beauty' },
    { label: 'Sports', value: 'sports' },
];

const sortOptions = [
    { label: 'Name (A-Z)', value: 'name' as const },
    { label: 'Price (Low to High)', value: 'price-asc' as const },
    { label: 'Price (High to Low)', value: 'price-desc' as const },
    { label: 'Newest First', value: 'newest' as const },
];

export default function ProductFilters({
    filters,
    onFilterChange,
    onClearFilters,
}: ProductFiltersProps) {
    const [priceMin, setPriceMin] = useState(filters.priceRange[0]);
    const [priceMax, setPriceMax] = useState(filters.priceRange[1]);

    const handleCategoryChange = (category: Category) => {
        onFilterChange({ ...filters, category });
    };

    const handleSortChange = (sortBy: FilterState['sortBy']) => {
        onFilterChange({ ...filters, sortBy });
    };

    const handlePriceChange = () => {
        onFilterChange({ ...filters, priceRange: [priceMin, priceMax] });
    };

    const hasActiveFilters =
        filters.category !== 'all' ||
        filters.priceRange[0] !== 0 ||
        filters.priceRange[1] !== 1000 ||
        filters.sortBy !== 'name';

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearFilters}
                        className="text-sm"
                        aria-label="Clear all filters"
                    >
                        <X className="w-4 h-4" />
                        Clear All
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => handleCategoryChange(cat.value)}
                                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                  ${filters.category === cat.value
                                        ? 'bg-primary-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                `}
                                aria-pressed={filters.category === cat.value}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Range Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Price Range
                    </label>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                min="0"
                                max="1000"
                                value={priceMin}
                                onChange={(e) => setPriceMin(Number(e.target.value))}
                                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Minimum price"
                            />
                            <span className="text-gray-500">-</span>
                            <input
                                type="number"
                                min="0"
                                max="1000"
                                value={priceMax}
                                onChange={(e) => setPriceMax(Number(e.target.value))}
                                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Maximum price"
                            />
                            <Button
                                size="sm"
                                onClick={handlePriceChange}
                                disabled={priceMin > priceMax}
                            >
                                Apply
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500">
                            ${priceMin} - ${priceMax}
                        </p>
                    </div>
                </div>

                {/* Sort By */}
                <div>
                    <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-3">
                        Sort By
                    </label>
                    <select
                        id="sort-by"
                        value={filters.sortBy}
                        onChange={(e) => handleSortChange(e.target.value as FilterState['sortBy'])}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
