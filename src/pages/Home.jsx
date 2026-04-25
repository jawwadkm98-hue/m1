import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe, Shield, Truck, Package, BarChart3, Users } from 'lucide-react'
import ServiceModal from '../components/ServiceModal'
import './Home.css'

const services = [
  {
    icon: '🚚',
    title: 'Product Distribution',
    summary: 'We manage end-to-end product distribution across national and international markets, ensuring your products reach the right buyers at the right time. Our logistics network is built for reliability, speed, and scale.',
    features: ['National Coverage', 'International Shipping', 'Real-Time Tracking']
  },
  {
    icon: '🤝',
    title: 'Wholesale Supply',
    summary: 'Access premium wholesale supply chains with competitive pricing structures tailored to your business volume. We connect retailers and businesses directly with trusted sources for consistent product availability.',
    features: ['Bulk Pricing', 'Flexible MOQ', 'Consistent Supply']
  },
  {
    icon: '📦',
    title: 'Inventory Management',
    summary: 'Our inventory management solutions help businesses maintain optimal stock levels, reduce waste, and improve turnover. We handle storage, fulfillment, and stock monitoring so you can focus on growing your business.',
    features: ['Stock Monitoring', 'Fulfillment', 'Demand Forecasting']
  },
  {
    icon: '🌍',
    title: 'Import & Export',
    summary: 'Navigate international trade with confidence. Mumin Distributors handles all import and export logistics including customs documentation, compliance, and international carrier coordination for seamless global trade.',
    features: ['Customs Clearance', 'Compliance', 'Global Carriers']
  },
  {
    icon: '📊',
    title: 'Market Consulting',
    summary: 'Leverage our industry expertise to enter new markets strategically. We provide market analysis, competitive insights, and distribution strategy consulting to help businesses grow and expand with confidence.',
    features: ['Market Analysis', 'Growth Strategy', 'Competitor Research']
  },
  {
    icon: '🔒',
    title: 'Quality Assurance',
    summary: 'Every product that moves through our network undergoes rigorous quality checks. We ensure that the goods you receive meet agreed specifications, protecting your reputation and your customers satisfaction.',
    features: ['Product Inspection', 'Standards Compliance', 'Documentation']
  }
]

export default function Home() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <p className="hero__eyebrow">Premium Distribution Services</p>
          <h1 className="hero__title">
            Connecting Business<br />
            <span className="hero__title-gold">to Global Markets</span>
          </h1>
          <p className="hero__subtitle">
            Mumin Distributors delivers reliable wholesale, import, export, and distribution solutions
            for businesses ready to scale without limits.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--gold">
              Our Services <ArrowRight size={16} />
            </Link>
            <Link to="/partner" className="btn btn--outline">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats__grid">
          {[
            { value: '500+', label: 'Products Distributed' },
            { value: '50+', label: 'Business Partners' },
            { value: '15+', label: 'Countries Served' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="stat">
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Click on any service to learn more</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <button
                key={i}
                className="service-card"
                onClick={() => setSelectedService(service)}
              >
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__hint">Click to learn more →</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us">
        <div className="container why-us__inner">
          <div className="why-us__text">
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="section-title">Built on Trust,<br />Driven by Results</h2>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              We are more than distributors — we are partners in your business growth. With deep industry
              connections and a commitment to transparency, we deliver results that matter.
            </p>
            <ul className="why-us__list">
              {[
                'Transparent pricing with no hidden fees',
                'Dedicated account management',
                'End-to-end supply chain visibility',
                'Flexible partnership models',
              ].map((item, i) => (
                <li key={i} className="why-us__item">
                  <CheckCircle size={18} color="var(--gold)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn--navy">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="why-us__visual">
            <div className="why-us__card">
              <Globe size={32} color="var(--gold)" />
              <h4>Global Reach</h4>
              <p>Operating across 15+ countries with trusted logistics partners worldwide.</p>
            </div>
            <div className="why-us__card">
              <Shield size={32} color="var(--gold)" />
              <h4>Quality Guaranteed</h4>
              <p>Every product is verified before it moves through our distribution network.</p>
            </div>
            <div className="why-us__card">
              <BarChart3 size={32} color="var(--gold)" />
              <h4>Data Driven</h4>
              <p>Smart inventory and market analytics to keep your business ahead of demand.</p>
            </div>
            <div className="why-us__card">
              <Users size={32} color="var(--gold)" />
              <h4>Partner First</h4>
              <p>We build long-term relationships, not one-off transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2>Ready to Scale Your Business?</h2>
          <p>Join our growing network of successful distribution partners.</p>
          <Link to="/partner" className="btn btn--gold">
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  )
}
