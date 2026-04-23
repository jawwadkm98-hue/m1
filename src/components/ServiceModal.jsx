import { useEffect } from 'react'
import { X } from 'lucide-react'
import './ServiceModal.css'

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!service) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal__icon">{service.icon}</div>
        <h3 className="modal__title">{service.title}</h3>
        <p className="modal__summary">{service.summary}</p>
        <div className="modal__features">
          {service.features && service.features.map((f, i) => (
            <span key={i} className="modal__feature">{f}</span>
          ))}
        </div>
        <a href="/contact" className="modal__cta">Get In Touch</a>
      </div>
    </div>
  )
}
