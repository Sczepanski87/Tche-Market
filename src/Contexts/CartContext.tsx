import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  isProductInCart: (productId: number) => boolean;
}

// Valor inicial para o Contexto
const initialContextValue: CartContextType = {
  cartItems: [],
  cartCount: 0,
  cartSubtotal: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  isProductInCart: () => false,
};

const CartContext = createContext<CartContextType>(initialContextValue);


export const useCart = () => useContext(CartContext);

const STORAGE_KEY = 'tchemarket_cart';

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // 1. CARREGAR DO LOCAL STORAGE (na montagem)
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(STORAGE_KEY);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Erro ao carregar carrinho do LocalStorage:", error);
      setCartItems([]);
    }
  }, []);

  // 2. SALVAR NO LOCAL STORAGE (a cada atualização do carrinho)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // Cálculo da Contagem Total de Itens (para o Header)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Cálculo do Subtotal Total
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 
  // Adicionar/Atualizar Produto
  const addToCart = useCallback((product: Product, quantityToAdd = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Se o item já existe, atualiza a quantidade
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        // Se é um novo item, adiciona-o ao carrinho
        const newItem: CartItem = { ...product, quantity: quantityToAdd };
        return [...prevItems, newItem];
      }
    });
  }, []);

  // Remover Item
  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  // Atualizar Quantidade
  const updateQuantity = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems => prevItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  }, [removeFromCart]);
  
  // Verificar se o produto já está no carrinho
  const isProductInCart = useCallback((productId: number) => {
    return cartItems.some(item => item.id === productId);
  }, [cartItems]);


  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      isProductInCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};