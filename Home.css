import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-eyebrow">Who We Are</p>
          <h1 className="page-hero__title">About Mumin Distributors</h1>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story__inner">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title">Distribution Built<br />on Integrity</h2>
          </div>
          <div className="about-story__text">
            <p>
              Mumin Distributors was founded with a single mission: to bridge the gap between quality
              manufacturers and the businesses that need their products. We saw an industry full of
              middlemen, delays, and opacity — and we built something different.
            </p>
            <p>
              Today, we operate a growing distribution network that serves retailers, wholesalers,
              and businesses across multiple industries. Every relationship we build is grounded in
              transparency, reliability, and mutual growth.
            </p>
            <p>
              We don't just move products — we build supply chain partnerships that help our clients
              scale confidently, knowing their distribution is in trusted hands.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What Drives Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🤝', title: 'Partnership', desc: 'We treat every client relationship as a long-term partnership, not a transaction.' },
              { icon: '🔍', title: 'Transparency', desc: 'Clear pricing, honest communication, and full visibility at every step.' },
              { icon: '⚡', title: 'Reliability', desc: 'Consistent delivery, quality products, and dependable service you can count on.' },
              { icon: '🌱', title: 'Growth', desc: 'We grow when our partners grow. Your success is our success.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Ready to work together?</h2>
          <Link to="/partner" className="btn btn--gold">
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
