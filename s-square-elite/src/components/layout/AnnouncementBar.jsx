import { Gift, Truck } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <span><Gift size={14} /> Little things. Big smiles.</span>
      <span className="announcement-divider">✦</span>
      <span><Truck size={14} /> Thoughtful gifts for every occasion</span>
    </div>
  )
}
