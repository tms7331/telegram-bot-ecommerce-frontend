'use client'

import React, { createContext, useContext, useState } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  isInCart: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const isInCart = (id: number) => items.some(item => item.id === id);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

