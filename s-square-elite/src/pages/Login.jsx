import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, LockKeyhole } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const submit = event => { event.preventDefault(); window.alert('Demo only: authentication will be connected to the backend later.'); navigate('/shop') }
  return <div className="auth-page page-container"><div className="auth-card"><div className="auth-mark"><LockKeyhole size={23} /></div><span className="eyebrow">WELCOME BACK</span><h1>Lovely to see you.</h1><p>Sign in to keep your little favourites close.</p><form onSubmit={submit}><label>Email address<input type="email" required value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" /></label><label>Password<input type="password" required minLength="4" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your password" /></label><button className="button button-primary" type="submit">Sign in <ArrowRight size={17} /></button></form><div className="auth-switch">New around here? <Link to="/register">Create an account</Link></div><small className="auth-demo-note">Demo interface · No credentials are stored or verified.</small></div></div>
}
