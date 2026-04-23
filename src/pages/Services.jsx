import { useState } from 'react'
import ServiceModal from '../components/ServiceModal'
import './Services.css'

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
  },
  {
    icon: '🏭',
    title: 'Factory Sourcing',
    summary: 'We connect businesses with verified, reliable manufacturers and factories that meet quality and compliance standards. Our sourcing process is thorough, vetting each partner to ensure your supply chain is dependable.',
    features: ['Factory Vetting', 'Sample Coordination', 'Audit Support']
  },
  {
    icon: '💼',
    title: 'B2B Sales Support',
    summary: 'Our B2B sales support services help your team close deals faster with the right product knowledge, pricing tools, and sales collateral. We act as an extension of your team to drive revenue growth.',
    features: ['Sales Materials', 'Pricing Tools', 'Deal Support']
  },
  {
    icon: '📋',
    title: 'Contract Management',
    summary: 'From supplier agreements to client contracts, we assist with drafting, reviewing, and managing distribution agreements that protect your interests and keep business relationships clearly defined.',
    features: ['Contract Drafting', 'Compliance Review', 'Renewal Tracking']
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-eyebrow">What We Do</p>
          <h1 className="page-hero__title">Our Services</h1>
        </div>
      </section>

      <section className="services-full">
        <div className="container">
          <div className="section-header" style={{ marginTop: '4rem' }}>
            <p className="section-eyebrow">Explore Our Offerings</p>
            <h2 className="section-title">Click Any Service to Learn More</h2>
          </div>
          <div className="services-full-grid">
            {services.map((service, i) => (
              <button
                key={i}
                className="service-full-card"
                onClick={() => setSelectedService(service)}
              >
                <div className="service-full-card__icon">{service.icon}</div>
                <div className="service-full-card__body">
                  <h3>{service.title}</h3>
                  <div className="service-full-card__tags">
                    {service.features.map((f, j) => (
                      <span key={j} className="service-tag">{f}</span>
                    ))}
                  </div>
                </div>
                <span className="service-full-card__arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  )
}
