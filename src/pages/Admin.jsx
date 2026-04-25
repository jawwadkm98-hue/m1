import { useState, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { LogOut, Upload, Save } from 'lucide-react'
import './Admin.css'

const DEFAULT_IMAGES = [
  { id: 1, label: 'Hero Background', src: null, placeholder: 'Hero section background image' },
  { id: 2, label: 'About Section Image', src: null, placeholder: 'About us section image' },
  { id: 3, label: 'Services Banner', src: null, placeholder: 'Services page banner' },
  { id: 4, label: 'Partner Section Image', src: null, placeholder: 'Partner with us image' },
  { id: 5, label: 'Company Logo', src: null, placeholder: 'Company logo (if different from text)' },
  { id: 6, label: 'Footer Background', src: null, placeholder: 'Footer background image' },
]

export default function Admin() {
  const { isAdmin, login, logout } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [images, setImages] = useState(DEFAULT_IMAGES)
  const [saved, setSaved] = useState(false)
  const fileInputRefs = useRef({})

  const handleLogin = (e) => {
    e.preventDefault()
    const success = login(username, password)
    if (!success) setError('Invalid username or password.')
  }

  const handleFileChange = (id, e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImages(prev => prev.map(img => img.id === id ? { ...img, src: url, file } : img))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (!isAdmin) {
    return (
      <div className="admin-login">
        <div className="admin-login__box">
          <div className="admin-login__logo">
            <span className="admin-login__mumin">MUMIN</span>
            <span className="admin-login__dist">DISTRIBUTORS</span>
          </div>
          <h2 className="admin-login__title">Admin Access</h2>
          <p className="admin-login__sub">Authorized personnel only</p>

          <form className="admin-login__form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="admin@mumindistributors.com"
                required
                autoComplete="username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                autoComplete="current-password"
              />
            </div>
            {error && <p className="admin-login__error">{error}</p>}
            <button type="submit" className="btn btn--gold admin-login__btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <div className="container admin-panel__header-inner">
          <div>
            <h1 className="admin-panel__title">Image Manager</h1>
            <p className="admin-panel__sub">Upload and manage website images</p>
          </div>
          <button className="btn btn--outline admin-panel__logout" onClick={logout}>
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      <div className="container admin-panel__body">
        <div className="admin-images-grid">
          {images.map(img => (
            <div key={img.id} className="admin-image-card">
              <div className="admin-image-card__preview">
                {img.src
                  ? <img src={img.src} alt={img.label} />
                  : <div className="admin-image-card__empty">
                      <Upload size={28} color="var(--grey)" />
                      <p>{img.placeholder}</p>
                    </div>
                }
              </div>
              <div className="admin-image-card__footer">
                <span className="admin-image-card__label">{img.label}</span>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={el => fileInputRefs.current[img.id] = el}
                  onChange={e => handleFileChange(img.id, e)}
                />
                <button
                  className="admin-image-card__upload"
                  onClick={() => fileInputRefs.current[img.id]?.click()}
                >
                  <Upload size={14} /> {img.src ? 'Replace' : 'Upload'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-panel__actions">
          <button className="btn btn--gold" onClick={handleSave}>
            <Save size={16} /> {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}
