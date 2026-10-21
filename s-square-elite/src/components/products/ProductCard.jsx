import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const saved = isWishlisted(product.id)
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.slug}`} className="product-image-link" aria-label={`View ${product.name}`}><img src={product.image} alt={product.name} loading="lazy" /></Link>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className={`wishlist-toggle ${saved ? 'is-saved' : ''}`} onClick={() => toggleWishlist(product)} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button>
        <button className="quick-add" onClick={() => addToCart(product)}><ShoppingBag size={15} /> Add to bag</button>
      </div>
      <div className="product-card-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.slug}`} className="product-name">{product.name}</Link>
        <div className="product-rating"><Star size={13} fill="currentColor" /><strong>{product.rating.toFixed(1)}</strong><span>({product.reviews})</span></div>
        <div className="product-price"><strong>₹{product.price.toLocaleString('en-IN')}</strong>{product.oldPrice && <del>₹{product.oldPrice.toLocaleString('en-IN')}</del>}</div>
      </div>
    </article>
  )
}
