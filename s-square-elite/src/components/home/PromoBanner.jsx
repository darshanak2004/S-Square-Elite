import { Link } from 'react-router-dom'
import { ArrowRight, Gift, Sparkles } from 'lucide-react'

export default function PromoBanner() {
  return (
    <section className="page-container promo-wrap">
      <div className="promo-banner">
        <div className="promo-deco promo-deco-one">✳</div><div className="promo-deco promo-deco-two">✦</div>
        <div className="promo-icon"><Gift size={29} /></div>
        <div className="promo-copy"><span className="eyebrow">FOR THE JOY OF GIVING</span><h2>Some days call for a little surprise.</h2><p>Thoughtful finds for birthdays, celebrations and all the just-because moments.</p></div>
        <Link className="button button-light" to="/category/gifts-keepsakes">Shop gifts <ArrowRight size={17} /></Link>
      </div>
    </section>
  )
}
