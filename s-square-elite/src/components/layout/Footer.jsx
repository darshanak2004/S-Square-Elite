import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo"><img src="/images/logo.jpeg" alt="" /><span><strong>S Square Elite</strong><small>GIFT SHOP</small></span></Link>
          <p>Little things, big smiles. Find playful favourites and thoughtful gifts for the moments that matter.</p>
          <div className="social-links"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="mailto:hello@ssquareelite.example" aria-label="Email"><Mail size={18} /></a></div>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link to="/shop">Shop all</Link><Link to="/category/soft-toys">Soft toys</Link><Link to="/category/learning-play">Learning & play</Link><Link to="/category/gifts-keepsakes">Gifts & keepsakes</Link></div>
        <div className="footer-column"><h3>Help & info</h3><Link to="/cart">Your shopping bag</Link><Link to="/wishlist">Your wishlist</Link><Link to="/login">My account</Link><a href="mailto:hello@ssquareelite.example">Contact us</a></div>
        <div className="footer-note"><div className="footer-heart"><Heart size={19} fill="currentColor" /></div><h3>Made for happy moments</h3><p>From little surprises to big celebrations, there's a little joy for everyone.</p><span className="footer-sparkle">✳ &nbsp; ✦ &nbsp; ✳</span></div>
      </div>
      <div className="footer-bottom"><div className="page-container"><span>© {new Date().getFullYear()} S Square Elite Gift Shop</span><span>Made with a little <Heart size={13} fill="currentColor" /> and a lot of imagination.</span><span className="demo-note">Demo storefront · Sample products</span></div></div>
    </footer>
  )
}
