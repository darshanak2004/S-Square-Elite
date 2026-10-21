import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const money = value => `₹${value.toLocaleString('en-IN')}`

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart()
  const navigate = useNavigate()
  if (!items.length) return <div className="empty-page page-container"><div className="empty-illustration"><ShoppingBag size={39} /></div><span className="eyebrow">YOUR BAG IS WAITING</span><h1>It's a little empty in here.</h1><p>Let's find something lovely to bring home.</p><Link to="/shop" className="button button-primary">Explore the shop <ArrowRight size={17} /></Link></div>
  return (
    <div className="page-container cart-page">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Your bag</span></div><div className="page-title-row"><div><span className="eyebrow">GOOD CHOICES</span><h1>Your shopping bag</h1><p>{items.length} product type(s) ready for a little joy.</p></div></div>
      <div className="cart-layout"><div className="cart-items">{items.map(item => <article className="cart-item" key={item.id}><Link to={`/product/${item.slug}`} className="cart-item-image"><img src={item.image} alt={item.name} /></Link><div className="cart-item-info"><span>{item.category}</span><Link to={`/product/${item.slug}`}><h3>{item.name}</h3></Link><strong>{money(item.price)}</strong><div className="quantity-control"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></div><div className="cart-item-end"><strong>{money(item.price * item.quantity)}</strong><button className="remove-item" onClick={() => removeFromCart(item.id)}><Trash2 size={15} /> Remove</button></div></article>)}</div><aside className="cart-summary"><span className="eyebrow">THE LITTLE DETAILS</span><h2>Order summary</h2><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><div><span>Delivery</span><span className="summary-muted">Calculated later</span></div><div className="summary-total"><span>Estimated total</span><strong>{money(subtotal)}</strong></div><p className="summary-note">This is a demo storefront. Delivery charges and real checkout will be configured later.</p><button className="button button-primary checkout-button" onClick={() => navigate('/checkout')}>Continue to checkout <ArrowRight size={17} /></button><Link to="/shop" className="continue-shopping">← Keep exploring</Link></aside></div>
    </div>
  )
}
