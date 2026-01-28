import { Product } from '@/types/product';

export function generateProductJsonLd(product: Product) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.images,
        sku: product.id,
        brand: {
            '@type': 'Brand',
            name: 'ShopHub',
        },
        offers: {
            '@type': 'Offer',
            url: `https://shophub.com/shop/${product.slug}`,
            priceCurrency: 'USD',
            price: product.price,
            priceValidUntil: '2026-12-31',
            availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            seller: {
                '@type': 'Organization',
                name: 'ShopHub',
            },
        },
        ...(product.rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.rating,
                reviewCount: product.reviews,
            },
        }),
    };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
