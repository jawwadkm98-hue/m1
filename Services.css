import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="page-hero__title">Contact Us</h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="section-eyebrow">Reach Out</p>
            <h2 className="section-title">We'd Love to<br />Hear From You</h2>
            <p style={{ color: '#555', lineHeight: 1.8, margin: '1.5rem 0 2rem', fontSize: '0.95rem' }}>
              Have a question about our services, want to discuss a partnership, or ready to get started?
              Our team is here to help.
            </p>

            <div className="contact-details">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'info@mumindistributors.com', href: 'mailto:info@mumindistributors.com' },
                { icon: <Phone size={20} />, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
                { icon: <MapPin size={20} />, label: 'Location', value: 'United States', href: null },
                { icon: <Clock size={20} />, label: 'Business Hours', value: 'Mon–Fri, 9AM–6PM EST', href: null },
              ].map((item, i) => (
                <div key={i} className="contact-detail">
                  <div className="contact-detail__icon">{item.icon}</div>
                  <div>
                    <div className="contact-detail__label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="contact-detail__value">{item.value}</a>
                      : <div className="contact-detail__value">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="partner-success">
                <div className="partner-success__icon">✉️</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 1-2 business days.</p>
              </div>
            ) : (
              <form className="partner-form" onSubmit={handleSubmit}>
                <h3 className="partner-form__title">Send a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input type="text" name="subject" required value={form.subject} onChange={handleChange} placeholder="What's this about?" />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Your message..." />
                </div>

                <button type="submit" className="btn btn--gold partner-form__submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
