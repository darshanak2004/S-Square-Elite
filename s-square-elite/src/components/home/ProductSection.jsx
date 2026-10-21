import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../../data/products.js'
import ProductGrid from '../products/ProductGrid.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function ProductSection({ title = 'Little favourites', eyebrow = 'LOVED BY OUR LITTLE COMMUNITY', items = products.slice(0, 4), description = 'The happy finds everyone is talking about.' }) {
  return (
    <section className="section page-container">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} action={<Link className="text-link" to="/shop">Shop all <ArrowRight size={16} /></Link>} />
      <ProductGrid products={items} />
    </section>
  )
}
