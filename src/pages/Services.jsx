import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceModal from '../components/ServiceModal'
import './Services.css'

const services = [
  {
    icon: '🚚',
    title: 'Product Distribution',
    summary: 'We manage end-to-end product distribution across national and international markets, ensuring your products reach the right buyers at the right time. Our logistics network is built for reliability, speed, and scale.',
    features: ['National Coverage', 'International Shipping', 'Real-Time Tracking'],
    detail: 'From warehouse to doorstep, our distribution infrastructure covers all major logistics corridors. We partner with leading carriers and maintain strategic warehouse locations to minimize transit times and costs for your business.'
  },
  {
    icon: '🤝',
    title: 'Wholesale Supply',
    summary: 'Access premium wholesale supply chains with competitive pricing structures tailored to your business volume. We connect retailers and businesses directly with trusted sources for consistent product availability.',
    features: ['Bulk Pricing', 'Flexible MOQ', 'Consistent Supply'],
    detail: 'Our wholesale supply model is built for businesses that need reliability and volume pricing. We work directly with manufacturers to eliminate unnecessary markups and deliver consistent quality at competitive rates.'
  },
  {
    icon: '📦',
    title: 'Inventory Management',
    summary: 'Our inventory management solutions help businesses maintain optimal stock levels, reduce waste, and improve turnover. We handle storage, fulfillment, and stock monitoring so you can focus on growing your business.',
    features: ['Stock Monitoring', 'Fulfillment', 'Demand Forecasting'],
    detail: 'Our technology-driven inventory system provides real-time visibility into your stock levels. We proactively manage reorder points, seasonal demand swings, and fulfillment workflows to keep your operations running smoothly.'
  },
  {
    icon: '🌍',
    title: 'Import & Export',
    summary: 'Navigate international trade with confidence. Mumin Distributors handles all import and export logistics including customs documentation, compliance, and international carrier coordination for seamless global trade.',
    features: ['Customs Clearance', 'Compliance', 'Global Carriers'],
    detail: 'International trade is complex — we make it simple. Our trade compliance team manages documentation, HS codes, tariff classification, and regulatory requirements across all major trade corridors.'
  },
  {
    icon: '📊',
    title: 'Market Consulting',
    summary: 'Leverage our industry expertise to enter new markets strategically. We provide market analysis, competitive insights, and distribution strategy consulting to help businesses grow and expand with confidence.',
    features: ['Market Analysis', 'Growth Strategy', 'Competitor Research'],
    detail: 'Before entering a new market, you need data. We provide comprehensive market research, competitive landscape analysis, and go-to-market strategy development tailored to your product category and target geography.'
  },
  {
    icon: '🔒',
    title: 'Quality Assurance',
    summary: 'Every product that moves through our network undergoes rigorous quality checks. We ensure that the goods you receive meet agreed specifications, protecting your reputation and your customers satisfaction.',
    features: ['Product Inspection', 'Standards Compliance', 'Documentation'],
    detail: 'Quality is non-negotiable. Our QA process includes pre-shipment inspections, laboratory testing for applicable products, packaging verification, and full audit trails so you always have documentation to back your claims.'
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-eyebrow">What We Offer</p>
          <h1 className="page-hero__title">Our Services</h1>
        </div>
      </section>

      <section className="services-intro">
        <div className="container services-intro__inner">
          <div>
            <p className="section-eyebrow">Full-Service Distribution</p>
            <h2 className="section-title">Everything Your<br />Business Needs</h2>
          </div>
          <p className="services-intro__text">
            From sourcing and wholesale supply to logistics, customs, and quality assurance —
            Mumin Distributors provides the complete infrastructure to move your products
            efficiently and reliably across markets.
          </p>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, i) => (
              <div key={i} className="service-detail-card">
                <div className="service-detail-card__icon">{service.icon}</div>
                <div className="service-detail-card__body">
                  <h3 className="service-detail-card__title">{service.title}</h3>
                  <p className="service-detail-card__text">{service.detail}</p>
                  <div className="service-detail-card__tags">
                    {service.features.map((f, j) => (
                      <span key={j} className="service-tag">{f}</span>
                    ))}
                  </div>
                  <button
                    className="service-detail-card__btn"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Talk to our team — we'll help you find the right solution for your business.</p>
          <div className="services-cta__actions">
            <Link to="/contact" className="btn btn--gold">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link to="/partner" className="btn btn--outline">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  )
}
