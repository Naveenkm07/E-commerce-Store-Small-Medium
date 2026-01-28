'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, CartContextType, Product } from '@/types/product';
import { getLocalStorage, setLocalStorage } from '@/lib/localStorage';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'ecommerce-cart';

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = getLocalStorage<CartItem[]>(CART_STORAGE_KEY, []);
        setItems(savedCart);
        setIsLoaded(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            setLocalStorage(CART_STORAGE_KEY, items);
        }
    }, [items, isLoaded]);

    const addToCart = (
        product: Product,
        quantity: number = 1,
        variants?: { size?: string; color?: string }
    ) => {
        setItems((currentItems) => {
            const existingItemIndex = currentItems.findIndex(
                (item) =>
                    item.product.id === product.id &&
                    item.selectedVariants?.size === variants?.size &&
                    item.selectedVariants?.color === variants?.color
            );

            if (existingItemIndex > -1) {
                // Update quantity of existing item
                const newItems = [...currentItems];
                newItems[existingItemIndex].quantity += quantity;
                return newItems;
            } else {
                // Add new item
                return [
                    ...currentItems,
                    {
                        product,
                        quantity,
                        selectedVariants: variants,
                    },
                ];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setItems((currentItems) =>
            currentItems.filter((item) => item.product.id !== productId)
        );
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setItems((currentItems) =>
            currentItems.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const subtotal = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
