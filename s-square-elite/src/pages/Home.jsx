import { Link } from 'react-router-dom'
import { ArrowRight, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react'
import HeroCarousel from '../components/home/HeroCarousel.jsx'
import CategoryGrid from '../components/home/CategoryGrid.jsx'
import ProductSection from '../components/home/ProductSection.jsx'
import PromoBanner from '../components/home/PromoBanner.jsx'
import { products } from '../data/products.js'

export default function Home() {
  const newArrivals = [...products].reverse().slice(0, 4)
  return (
    <>
      <HeroCarousel />
      <div className="benefit-strip page-container">
        <div><span className="benefit-icon mint"><PackageCheck size={21} /></span><span><strong>Thoughtful finds</strong><small>Picked with care</small></span></div>
        <div><span className="benefit-icon pink"><Sparkles size={21} /></span><span><strong>Joy in the details</strong><small>Little things, big smiles</small></span></div>
        <div><span className="benefit-icon green"><ShieldCheck size={21} /></span><span><strong>Easy browsing</strong><small>Find your next favourite</small></span></div>
      </div>
      <CategoryGrid />
      <ProductSection />
      <PromoBanner />
      <ProductSection title="Fresh little finds" eyebrow="JUST ARRIVED" items={newArrivals} description="New reasons to smile, play and make someone's day." />
      <section className="newsletter-section">
        <div className="newsletter-inner page-container"><div className="newsletter-sparkle">✳</div><span className="eyebrow">A LITTLE JOY IN YOUR INBOX</span><h2>Stay in the loop.</h2><p>Discover gift inspiration, playful finds and little updates from our shop.</p><form onSubmit={event => { event.preventDefault(); window.alert('Thanks for your interest! Newsletter signup will be connected to the backend later.') }}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button className="button button-primary" type="submit">Count me in <ArrowRight size={16} /></button></form><small>Just happy updates. No spam, promise.</small></div>
      </section>
    </>
  )
}
