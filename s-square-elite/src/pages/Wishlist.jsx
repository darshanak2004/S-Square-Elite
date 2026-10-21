import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import ProductGrid from '../components/products/ProductGrid.jsx'

export default function Wishlist() {
  const { items } = useWishlist()
  return <div className="page-container wishlist-page"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Wishlist</span></div><div className="page-title-row"><div><span className="eyebrow">SAVED WITH LOVE</span><h1>Your wishlist</h1><p>All the little treasures you've got your eye on.</p></div></div>{items.length ? <ProductGrid products={items} /> : <div className="empty-state wishlist-empty"><span><Heart size={30} /></span><h3>Your wishlist is waiting for a little love.</h3><p>Tap the heart on anything that makes you smile and it'll be saved here.</p><Link className="button button-primary" to="/shop">Find your favourites</Link></div>}</div>
}
