import { useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products.js'
import { categories } from '../data/categories.js'
import ProductGrid from '../components/products/ProductGrid.jsx'

export default function Shop() {
  const location = useLocation()
  const { slug } = useParams()
  const params = new URLSearchParams(location.search)
  const [category, setCategory] = useState(slug || 'all')
  const [sort, setSort] = useState(params.get('sort') || 'featured')
  const [maxPrice, setMaxPrice] = useState(5000)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const query = (params.get('q') || '').toLowerCase()
  const activeCategory = slug || category
  const visible = useMemo(() => {
    let list = products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.categorySlug === activeCategory
      const matchesQuery = !query || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query)
      return matchesCategory && matchesQuery && product.price <= maxPrice
    })
    if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    if (sort === 'newest') list = [...list].reverse()
    return list
  }, [activeCategory, query, maxPrice, sort])
  const title = categories.find(item => item.slug === activeCategory)?.name || 'Shop all the good things'

  return (
    <div className="shop-page page-container">
      <div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>Shop</span></div>
      <div className="shop-heading"><div><span className="eyebrow">YOUR NEXT LITTLE TREASURE</span><h1>{query ? `Search: “${query}”` : title}</h1><p>Playful favourites and thoughtful gifts for all your happy moments.</p></div><div className="shop-heading-art">✳<span>✦</span></div></div>
      <div className="shop-toolbar"><span><strong>{visible.length}</strong> lovely finds</span><div className="shop-toolbar-actions"><button className="filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={16} /> Filters</button><label>Sort by <select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option></select></label></div></div>
      <div className={`shop-layout ${filtersOpen ? 'filters-open' : ''}`}>
        <aside className="shop-filters"><div className="filter-heading"><h3>Filter finds</h3><button className="icon-button" onClick={() => setFiltersOpen(false)} aria-label="Close filters"><X size={17} /></button></div><div className="filter-group"><h4>Categories</h4><button className={activeCategory === 'all' ? 'filter-option selected' : 'filter-option'} onClick={() => setCategory('all')}>All products <span>{products.length}</span></button>{categories.map(item => <button key={item.slug} className={activeCategory === item.slug ? 'filter-option selected' : 'filter-option'} onClick={() => setCategory(item.slug)}>{item.name}<span>{products.filter(p => p.categorySlug === item.slug).length}</span></button>)}</div><div className="filter-group"><div className="price-label"><h4>Maximum price</h4><strong>₹{maxPrice.toLocaleString('en-IN')}</strong></div><input type="range" min="300" max="5000" step="100" value={maxPrice} onChange={event => setMaxPrice(Number(event.target.value))} aria-label="Maximum price" /><div className="range-labels"><span>₹300</span><span>₹5,000</span></div></div><button className="clear-filters" onClick={() => { setCategory('all'); setMaxPrice(5000); setSort('featured') }}>Clear all filters</button></aside>
        <div className="shop-results"><ProductGrid products={visible} /></div>
      </div>
    </div>
  )
}
