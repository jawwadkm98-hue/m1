import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import './Partner.css'

export default function Partner() {
  const [form, setForm] = useState({
    companyName: '', contactName: '', email: '', phone: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — connect HubSpot API token here when ready
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="partner-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-eyebrow">Grow Together</p>
          <h1 className="page-hero__title">Partner With Us</h1>
        </div>
      </section>

      <section className="partner-section">
        <div className="container partner-grid">
          <div className="partner-info">
            <p className="section-eyebrow">Why Partner With Mumin</p>
            <h2 className="section-title">Let's Build Something<br />Stronger Together</h2>
            <p className="partner-info__desc">
              Whether you're a manufacturer looking for distribution reach, or a retailer looking
              for reliable supply — Mumin Distributors is the partner that delivers.
            </p>
            <ul className="partner-benefits">
              {[
                'Access to our established distribution network',
                'Competitive pricing and flexible terms',
                'Dedicated account management',
                'Transparent reporting and analytics',
                'Fast onboarding process',
                'Global market reach',
              ].map((b, i) => (
                <li key={i}>
                  <CheckCircle size={16} color="var(--gold)" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="partner-form-wrap">
            {submitted ? (
              <div className="partner-success">
                <div className="partner-success__icon">✅</div>
                <h3>Thank You!</h3>
                <p>We've received your inquiry and will be in touch within 1-2 business days.</p>
              </div>
            ) : (
              <form className="partner-form" onSubmit={handleSubmit}>
                <h3 className="partner-form__title">Send Us an Inquiry</h3>

                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label>Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={form.contactName}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>

                <button type="submit" className="btn btn--gold partner-form__submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
