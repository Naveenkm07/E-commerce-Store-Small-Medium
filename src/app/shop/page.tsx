'use client';

import { useState, useMemo } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import { products } from '@/data/products';
import { FilterState, Product, Category } from '@/types/product';

const defaultFilters: FilterState = {
    category: 'all',
    priceRange: [0, 1000],
    sortBy: 'name',
};

export default function ShopPage() {
    const [filters, setFilters] = useState<FilterState>(defaultFilters);

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by category
        if (filters.category !== 'all') {
            result = result.filter((p) => p.category === filters.category);
        }

        // Filter by price range
        result = result.filter(
            (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
        );

        // Sort products
        switch (filters.sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'newest':
                // Reverse order for newest (assuming array order represents newest first)
                result.reverse();
                break;
        }

        return result;
    }, [filters]);

    const handleClearFilters = () => {
        setFilters(defaultFilters);
    };

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop All Products</h1>
                    <p className="text-lg text-gray-600">
                        Discover our complete collection of quality products
                    </p>
                </div>

                {/* Filters */}
                <ProductFilters
                    filters={filters}
                    onFilterChange={setFilters}
                    onClearFilters={handleClearFilters}
                />

                {/* Results count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
                    </p>
                </div>

                {/* Product Grid */}
                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
}
