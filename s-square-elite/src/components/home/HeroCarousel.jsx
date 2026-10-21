import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { banners } from '../../data/banners.js'

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const next = () => setActive(current => (current + 1) % banners.length)
  const previous = () => setActive(current => (current - 1 + banners.length) % banners.length)

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(next, 5600)
    return () => window.clearInterval(timer)
  }, [paused])

  const banner = banners[active]
  return (
    <section className={`hero hero-${banner.theme}`} aria-label="Featured collections" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={event => setTouchStart(event.touches[0].clientX)} onTouchEnd={event => {
      if (touchStart === null) return
      const delta = touchStart - event.changedTouches[0].clientX
      if (Math.abs(delta) > 45) delta > 0 ? next() : previous()
      setTouchStart(null)
    }}>
      <div className="hero-backdrop-shape shape-one" />
      <div className="hero-backdrop-shape shape-two" />
      <div className="hero-inner page-container">
        <div className="hero-copy" key={banner.title}>
          <span className="hero-eyebrow"><Sparkles size={15} /> {banner.eyebrow}</span>
          <h1>{banner.title.split('\\n').map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h1>
          <p>{banner.description}</p>
          <Link to={banner.href} className="button button-primary hero-cta">{banner.button}<ArrowRight size={17} /></Link>
          <div className="hero-trust"><span className="trust-stars">★★★★★</span><span>Little finds, lots of joy</span></div>
        </div>
        <div className="hero-art" key={banner.image}>
          <div className="hero-image-halo" />
          <img src={banner.image} alt={banner.alt} />
          <div className="hero-image-label"><span>✦</span> {banner.label}</div>
          <span className="floating-sparkle sparkle-a">✦</span><span className="floating-sparkle sparkle-b">✳</span><span className="floating-sparkle sparkle-c">✧</span>
        </div>
      </div>
      <button className="hero-arrow hero-arrow-left" onClick={previous} aria-label="Previous slide"><ArrowLeft size={19} /></button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide"><ArrowRight size={19} /></button>
      <div className="hero-pagination" aria-label="Choose slide">
        {banners.map((item, index) => <button key={item.title} aria-label={`Go to slide ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={active === index ? 'active' : ''} onClick={() => setActive(index)} />)}
      </div>
      <div className="hero-count"><span>0{active + 1}</span> / 0{banners.length}</div>
    </section>
  )
}
