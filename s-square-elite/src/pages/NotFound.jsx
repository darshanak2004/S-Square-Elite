import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return <div className="empty-page page-container"><div className="empty-illustration">✦</div><span className="eyebrow">A LITTLE DETOUR</span><h1>Oops, this page wandered off.</h1><p>The page may have moved, but there are plenty of lovely things to discover.</p><Link to="/" className="button button-primary"><ArrowLeft size={17} /> Back to home</Link></div>
}
