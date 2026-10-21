import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 's-square-elite-cart'

function readCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart)
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(items)), [items])

  const addToCart = (product, quantity = 1) => {
    setItems(current => {
      const existing = current.find(item => item.id === product.id)
      if (existing) return current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      return [...current, { ...product, quantity }]
    })
  }
  const updateQuantity = (id, quantity) => setItems(current => quantity < 1 ? current.filter(item => item.id !== id) : current.map(item => item.id === id ? { ...item, quantity } : item))
  const removeFromCart = id => setItems(current => current.filter(item => item.id !== id))
  const clearCart = () => setItems([])
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const value = useMemo(() => ({ items, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, subtotal }), [items, itemCount, subtotal])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
