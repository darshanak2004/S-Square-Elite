import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '../../data/categories.js'
import SectionHeading from '../common/SectionHeading.jsx'

export default function CategoryGrid() {
  return (
    <section className="section page-container categories-section">
      <SectionHeading eyebrow="A LITTLE SOMETHING FOR EVERYONE" title="Find your kind of fun" description="Explore little favourites and lovely surprises." />
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link to={`/category/${category.slug}`} className={`category-card category-card-${index % 3}`} key={category.slug}>
            <div className="category-image"><img src={category.image} alt={category.name} loading="lazy" /><span className="category-icon">{category.icon}</span><span className="category-arrow"><ArrowUpRight size={18} /></span></div>
            <div className="category-info"><h3>{category.name}</h3><p>{category.description}</p></div>
          </Link>
        ))}
      </div>
    </section>
  )
}
