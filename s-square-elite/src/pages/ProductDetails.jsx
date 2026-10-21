import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Heart, Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import ProductSection from '../components/home/ProductSection.jsx'
import NotFound from './NotFound.jsx'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = products.find(item => item.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  if (!product) return <NotFound />
  return (
    <>
      <div className="page-container detail-page">
        <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><span>{product.name}</span></div>
        <Link to="/shop" className="back-link"><ArrowLeft size={16} /> Back to all finds</Link>
        <div className="product-detail-layout">
          <div className="detail-image"><img src={product.image} alt={product.name} /><span className="detail-image-sticker">A little joy ✦</span></div>
          <div className="detail-copy"><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><div className="detail-rating"><Star size={16} fill="currentColor" /><strong>{product.rating.toFixed(1)}</strong><span>{product.reviews} happy reviews (sample)</span></div><div className="detail-price"><strong>₹{product.price.toLocaleString('en-IN')}</strong>{product.oldPrice && <del>₹{product.oldPrice.toLocaleString('en-IN')}</del>}{product.oldPrice && <span className="save-label">You save ₹{(product.oldPrice - product.price).toLocaleString('en-IN')}</span>}</div><p className="detail-description">{product.description}</p><div className="stock-note"><span /> Demo catalogue item · availability to be confirmed</div><div className="detail-buy-row"><div className="quantity-control"><button onClick={() => setQuantity(value => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><span>{quantity}</span><button onClick={() => setQuantity(value => value + 1)} aria-label="Increase quantity"><Plus size={15} /></button></div><button className="button button-primary add-detail" onClick={() => addToCart(product, quantity)}><ShoppingBag size={17} /> Add to bag</button><button className={`detail-wishlist ${isWishlisted(product.id) ? 'is-saved' : ''}`} onClick={() => toggleWishlist(product)} aria-label="Toggle wishlist"><Heart size={19} fill={isWishlisted(product.id) ? 'currentColor' : 'none'} /></button></div><div className="detail-perks"><div><Truck size={19} /><span><strong>Delivery details</strong><small>Will be confirmed at checkout</small></span></div><div><ShieldCheck size={19} /><span><strong>Shop with confidence</strong><small>Store policies can be added later</small></span></div></div></div>
        </div>
      </div>
      <ProductSection title="You may also love" eyebrow="MORE LITTLE TREASURES" items={products.filter(item => item.id !== product.id).slice(0, 4)} />
    </>
  )
}
