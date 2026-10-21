import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const submit = event => { event.preventDefault(); window.alert('Demo only: account creation will be connected to the backend later.'); navigate('/shop') }
  return <div className="auth-page page-container"><div className="auth-card"><div className="auth-mark"><Sparkles size={23} /></div><span className="eyebrow">JOIN OUR HAPPY PLACE</span><h1>Let's make room for joy.</h1><p>Create an account experience preview. Real registration comes with the backend.</p><form onSubmit={submit}><label>Your name<input required value={name} onChange={event => setName(event.target.value)} placeholder="Your name" /></label><label>Email address<input type="email" required value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" /></label><label>Password<input type="password" required minLength="6" value={password} onChange={event => setPassword(event.target.value)} placeholder="At least 6 characters" /></label><button className="button button-primary" type="submit">Create account <ArrowRight size={17} /></button></form><div className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></div><small className="auth-demo-note">Demo interface · No account is created yet.</small></div></div>
}
