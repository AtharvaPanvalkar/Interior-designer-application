import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-main">LUXORA</span>
              <span className="logo-sub">INTERIORS</span>
            </div>
            <p className="footer-desc">
              We create luxury interiors that reflect your style, elevate your lifestyle, and stand the test of time.
            </p>
            <div className="footer-socials">
              <a href="#"><InstagramIcon size={16} /></a>
              <a href="#"><FacebookIcon size={16} /></a>
              <a href="#"><LinkedinIcon size={16} /></a>
              <a href="#"><YoutubeIcon size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map(l => (
                <li key={l}><Link to={`/${l.toLowerCase().replace(' ', '-')}`}>{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['Residential Interiors', 'Modular Kitchens', 'Bedroom Design', 'Living Room Design', 'Office Interiors', 'Renovation Services'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact">
              <div><MapPin size={14} /><span>42 Design District, Connaught Place, New Delhi – 110001</span></div>
              <div><Phone size={14} /><span>+91 98765 43210</span></div>
              <div><Mail size={14} /><span>hello@luxorainteriors.in</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Luxora Interiors. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
