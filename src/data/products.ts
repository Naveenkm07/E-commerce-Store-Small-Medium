import { Product } from '@/types/product';

export const products: Product[] = [
    // Electronics
    {
        id: '1',
        name: 'Wireless Noise-Canceling Headphones',
        slug: 'wireless-noise-canceling-headphones',
        description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Perfect for music lovers and professionals.',
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        category: 'electronics',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
        ],
        variants: [
            { id: 'v1', type: 'color', name: 'Color', value: 'Black', available: true },
            { id: 'v2', type: 'color', name: 'Color', value: 'Silver', available: true },
            { id: 'v3', type: 'color', name: 'Color', value: 'Blue', available: false },
        ],
        stock: 45,
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 234,
    },
    {
        id: '2',
        name: 'Smart Watch Pro',
        slug: 'smart-watch-pro',
        description: 'Advanced fitness tracking, heart rate monitoring, GPS, and 7-day battery life. Stay connected on the go.',
        price: 349.99,
        category: 'electronics',
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        ],
        variants: [
            { id: 'v4', type: 'color', name: 'Color', value: 'Space Gray', available: true },
            { id: 'v5', type: 'color', name: 'Color', value: 'Rose Gold', available: true },
        ],
        stock: 28,
        inStock: true,
        featured: true,
        rating: 4.6,
        reviews: 156,
    },
    {
        id: '3',
        name: 'Portable Bluetooth Speaker',
        slug: 'portable-bluetooth-speaker',
        description: 'Waterproof portable speaker with 360° sound, 24-hour battery, and deep bass. Perfect for outdoor adventures.',
        price: 89.99,
        originalPrice: 129.99,
        discount: 31,
        category: 'electronics',
        images: [
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
        ],
        stock: 67,
        inStock: true,
        rating: 4.5,
        reviews: 89,
    },
    {
        id: '4',
        name: '4K Wireless Security Camera',
        slug: '4k-wireless-security-camera',
        description: 'Crystal-clear 4K video, night vision, motion detection, and cloud storage. Secure your home with ease.',
        price: 159.99,
        category: 'electronics',
        images: [
            'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80',
        ],
        stock: 34,
        inStock: true,
        rating: 4.7,
        reviews: 124,
    },
    {
        id: '5',
        name: 'Wireless Charging Pad',
        slug: 'wireless-charging-pad',
        description: 'Fast wireless charging for all compatible devices. Sleek design with LED indicator and overcharge protection.',
        price: 39.99,
        category: 'electronics',
        images: [
            'https://images.unsplash.com/photo-1591290619762-c588dd1e8cb1?w=800&q=80',
        ],
        stock: 120,
        inStock: true,
        rating: 4.4,
        reviews: 67,
    },

    // Fashion
    {
        id: '6',
        name: 'Classic Leather Jacket',
        slug: 'classic-leather-jacket',
        description: 'Premium genuine leather jacket with modern fit. Timeless style that goes with everything.',
        price: 289.99,
        originalPrice: 450.00,
        discount: 36,
        category: 'fashion',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        ],
        variants: [
            { id: 'v6', type: 'size', name: 'Size', value: 'S', available: true },
            { id: 'v7', type: 'size', name: 'Size', value: 'M', available: true },
            { id: 'v8', type: 'size', name: 'Size', value: 'L', available: true },
            { id: 'v9', type: 'size', name: 'Size', value: 'XL', available: false },
        ],
        stock: 23,
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 178,
    },
    {
        id: '7',
        name: 'Designer Sunglasses',
        slug: 'designer-sunglasses',
        description: 'UV protection with polarized lenses. Elegant frame design for any occasion.',
        price: 159.99,
        category: 'fashion',
        images: [
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
        ],
        stock: 56,
        inStock: true,
        rating: 4.6,
        reviews: 92,
    },
    {
        id: '8',
        name: 'Slim Fit Denim Jeans',
        slug: 'slim-fit-denim-jeans',
        description: 'Comfortable stretch denim with modern slim fit. Perfect everyday jeans.',
        price: 79.99,
        category: 'fashion',
        images: [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
        ],
        variants: [
            { id: 'v10', type: 'size', name: 'Size', value: '28', available: true },
            { id: 'v11', type: 'size', name: 'Size', value: '30', available: true },
            { id: 'v12', type: 'size', name: 'Size', value: '32', available: true },
            { id: 'v13', type: 'size', name: 'Size', value: '34', available: true },
        ],
        stock: 89,
        inStock: true,
        rating: 4.5,
        reviews: 145,
    },
    {
        id: '9',
        name: 'Luxury Wrist Watch',
        slug: 'luxury-wrist-watch',
        description: 'Automatic movement, sapphire crystal, water-resistant. Handcrafted excellence.',
        price: 549.99,
        originalPrice: 799.99,
        discount: 31,
        category: 'fashion',
        images: [
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
        ],
        stock: 12,
        inStock: true,
        featured: true,
        rating: 5.0,
        reviews: 67,
    },
    {
        id: '10',
        name: 'Canvas Sneakers',
        slug: 'canvas-sneakers',
        description: 'Comfortable all-day wear with classic design. Available in multiple colors.',
        price: 59.99,
        category: 'fashion',
        images: [
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
        ],
        variants: [
            { id: 'v14', type: 'size', name: 'Size', value: '8', available: true },
            { id: 'v15', type: 'size', name: 'Size', value: '9', available: true },
            { id: 'v16', type: 'size', name: 'Size', value: '10', available: true },
            { id: 'v17', type: 'size', name: 'Size', value: '11', available: false },
        ],
        stock: 78,
        inStock: true,
        rating: 4.3,
        reviews: 201,
    },

    // Home & Living
    {
        id: '11',
        name: 'Minimalist Desk Lamp',
        slug: 'minimalist-desk-lamp',
        description: 'LED desk lamp with adjustable brightness and color temperature. Modern design for any workspace.',
        price: 69.99,
        category: 'home-living',
        images: [
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
        ],
        stock: 45,
        inStock: true,
        rating: 4.7,
        reviews: 112,
    },
    {
        id: '12',
        name: 'Aromatherapy Diffuser',
        slug: 'aromatherapy-diffuser',
        description: 'Ultrasonic essential oil diffuser with LED mood lighting. Create a relaxing atmosphere.',
        price: 44.99,
        originalPrice: 69.99,
        discount: 36,
        category: 'home-living',
        images: [
            'https://images.unsplash.com/photo-1583338964222-b82c4f2fd7b8?w=800&q=80',
        ],
        stock: 92,
        inStock: true,
        rating: 4.6,
        reviews: 156,
    },
    {
        id: '13',
        name: 'Ceramic Coffee Mug Set',
        slug: 'ceramic-coffee-mug-set',
        description: 'Set of 4 handcrafted ceramic mugs. Microwave and dishwasher safe.',
        price: 34.99,
        category: 'home-living',
        images: [
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
        ],
        stock: 127,
        inStock: true,
        rating: 4.8,
        reviews: 89,
    },
    {
        id: '14',
        name: 'Bamboo Cutting Board',
        slug: 'bamboo-cutting-board',
        description: 'Eco-friendly bamboo cutting board with juice groove. Durable and knife-friendly.',
        price: 29.99,
        category: 'home-living',
        images: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
        ],
        stock: 156,
        inStock: true,
        rating: 4.5,
        reviews: 234,
    },
    {
        id: '15',
        name: 'Throw Pillow Set',
        slug: 'throw-pillow-set',
        description: 'Set of 2 decorative throw pillows with premium velvet covers. Adds comfort and style.',
        price: 49.99,
        category: 'home-living',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
        ],
        variants: [
            { id: 'v18', type: 'color', name: 'Color', value: 'Navy Blue', available: true },
            { id: 'v19', type: 'color', name: 'Color', value: 'Gray', available: true },
            { id: 'v20', type: 'color', name: 'Color', value: 'Beige', available: true },
        ],
        stock: 64,
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 178,
    },

    // Beauty
    {
        id: '16',
        name: 'Luxury Skincare Set',
        slug: 'luxury-skincare-set',
        description: 'Complete skincare routine with cleanser, toner, serum, and moisturizer. Natural ingredients.',
        price: 129.99,
        originalPrice: 199.99,
        discount: 35,
        category: 'beauty',
        images: [
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
        ],
        stock: 38,
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 267,
    },
    {
        id: '17',
        name: 'Jade Facial Roller',
        slug: 'jade-facial-roller',
        description: 'Natural jade stone facial roller for lymphatic drainage and reduced puffiness.',
        price: 24.99,
        category: 'beauty',
        images: [
            'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80',
        ],
        stock: 89,
        inStock: true,
        rating: 4.6,
        reviews: 134,
    },
    {
        id: '18',
        name: 'Hair Styling Tools Set',
        slug: 'hair-styling-tools-set',
        description: 'Professional-grade styling tools with ceramic coating and adjustable heat settings.',
        price: 89.99,
        category: 'beauty',
        images: [
            'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80',
        ],
        stock: 23,
        inStock: true,
        rating: 4.7,
        reviews: 98,
    },

    // Sports
    {
        id: '19',
        name: 'Yoga Mat Premium',
        slug: 'yoga-mat-premium',
        description: 'Extra thick non-slip yoga mat with carrying strap. Perfect for all yoga styles.',
        price: 49.99,
        category: 'sports',
        images: [
            'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
        ],
        variants: [
            { id: 'v21', type: 'color', name: 'Color', value: 'Purple', available: true },
            { id: 'v22', type: 'color', name: 'Color', value: 'Blue', available: true },
            { id: 'v23', type: 'color', name: 'Color', value: 'Pink', available: true },
        ],
        stock: 145,
        inStock: true,
        rating: 4.8,
        reviews: 289,
    },
    {
        id: '20',
        name: 'Resistance Bands Set',
        slug: 'resistance-bands-set',
        description: 'Set of 5 resistance bands with different strength levels. Includes carrying pouch.',
        price: 29.99,
        category: 'sports',
        images: [
            'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80',
        ],
        stock: 234,
        inStock: true,
        rating: 4.5,
        reviews: 445,
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
    return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
    if (category === 'all') return products;
    return products.filter(p => p.category === category);
}
