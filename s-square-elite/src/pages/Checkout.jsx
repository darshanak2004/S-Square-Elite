import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldAlert } from 'lucide-react'

export default function Checkout() {
  return <div className="empty-page page-container"><div className="empty-illustration"><ShieldAlert size={39} /></div><span className="eyebrow">COMING IN THE NEXT PHASE</span><h1>Checkout will be here soon.</h1><p>This frontend demo does not place real orders or process payments. We'll connect checkout after the backend, order API and payment provider are ready.</p><Link to="/cart" className="button button-primary"><ArrowLeft size={17} /> Back to your bag</Link></div>
}
