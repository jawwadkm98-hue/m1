import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mumin">MUMIN</span>
              <span className="footer__logo-dist">DISTRIBUTORS</span>
            </div>
            <p className="footer__tagline">
              Premium distribution services connecting businesses with quality products worldwide.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/partner">Partner With Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li>
                <Mail size={14} />
                <a href="mailto:info@mumindistributors.com">info@mumindistributors.com</a>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <MapPin size={14} />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Mumin Distributors. All rights reserved.</p>
          <Link to="/admin" className="footer__admin-link">Admin Login</Link>
        </div>
      </div>
    </footer>
  )
}
