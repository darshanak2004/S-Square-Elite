import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, Heart, ShoppingBag, UserRound, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { categories } from '../../data/categories.js'

export default function Header() {
  const [search, setSearch] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const { itemCount } = useCart()
  const { items } = useWishlist()

  const submitSearch = event => {
    event.preventDefault()
    navigate(`/shop${search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''}`)
    setMobileOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-main page-container">
        <button className="icon-button mobile-menu-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link to="/" className="brand" aria-label="S Square Elite home">
          <img src="/images/logo.jpeg" alt="S Square Elite Gift Shop logo" />
          <span className="brand-wordmark"><strong>S Square Elite</strong><small>G I F T&nbsp; S H O P</small></span>
        </Link>
        <form className="search-form" onSubmit={submitSearch}>
          <Search size={19} />
          <input aria-label="Search products" value={search} onChange={event => setSearch(event.target.value)} placeholder="Find something wonderful..." />
          <button type="submit">Search</button>
        </form>
        <div className="header-actions">
          <Link className="header-action" to="/login" aria-label="Account"><UserRound /><span>Account</span></Link>
          <Link className="header-action action-with-count" to="/wishlist" aria-label="Wishlist"><Heart /><span>Wishlist</span>{items.length > 0 && <b>{items.length}</b>}</Link>
          <Link className="header-action action-with-count" to="/cart" aria-label="Shopping cart"><ShoppingBag /><span>Bag</span>{itemCount > 0 && <b>{itemCount}</b>}</Link>
        </div>
      </div>
      <nav className={`category-nav ${mobileOpen ? 'is-open' : ''}`}>
        <div className="page-container nav-inner">
          <NavLink to="/shop" end onClick={() => setMobileOpen(false)}>Shop all</NavLink>
          {categories.map(category => <NavLink key={category.slug} to={`/category/${category.slug}`} onClick={() => setMobileOpen(false)}>{category.name}</NavLink>)}
          <NavLink to="/shop?sort=newest" onClick={() => setMobileOpen(false)} className="nav-new">New arrivals ✦</NavLink>
        </div>
      </nav>
    </header>
  )
}
