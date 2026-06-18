import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Styles', to: '/styles' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="logo-main">LUXORA</span>
          <span className="logo-sub">INTERIORS</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link to="/contact" className="btn-gold nav-cta">Book Consultation</Link>
          <button className="nav-burger" onClick={() => setOpen(o => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className={location.pathname === link.to ? 'active' : ''}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
