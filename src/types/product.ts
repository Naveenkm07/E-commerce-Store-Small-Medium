export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    category: Category;
    images: string[];
    variants?: ProductVariant[];
    stock: number;
    inStock: boolean;
    featured?: boolean;
    rating?: number;
    reviews?: number;
}

export interface ProductVariant {
    id: string;
    type: 'size' | 'color';
    name: string;
    value: string;
    available: boolean;
}

export type Category =
    | 'electronics'
    | 'fashion'
    | 'home-living'
    | 'beauty'
    | 'sports'
    | 'all';

export interface CartItem {
    product: Product;
    quantity: number;
    selectedVariants?: {
        size?: string;
        color?: string;
    };
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number, variants?: { size?: string; color?: string }) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}

export interface FilterState {
    category: Category;
    priceRange: [number, number];
    sortBy: 'name' | 'price-asc' | 'price-desc' | 'newest';
}

export interface CheckoutFormData {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
}
