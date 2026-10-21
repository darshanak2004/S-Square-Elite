import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const WishlistContext = createContext(null)
function readWishlist() {
  try { return JSON.parse(localStorage.getItem('s-square-elite-wishlist') || '[]') } catch { return [] }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(readWishlist)
  useEffect(() => localStorage.setItem('s-square-elite-wishlist', JSON.stringify(items)), [items])
  const toggleWishlist = product => setItems(current => current.some(item => item.id === product.id) ? current.filter(item => item.id !== product.id) : [...current, product])
  const isWishlisted = id => items.some(item => item.id === id)
  const value = useMemo(() => ({ items, toggleWishlist, isWishlisted }), [items])
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => useContext(WishlistContext)
