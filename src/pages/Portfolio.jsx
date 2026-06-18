import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { projects, categories } from '../data';
import './Portfolio.css';

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [visible, setVisible] = useState(6);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <div className="portfolio-page">
      <PageHeader title="Our Portfolio" crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]} />

      <section className="section portfolio-section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => { setActive(cat); setVisible(6); }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {shown.map(p => (
              <Link to={`/portfolio/${p.id}`} key={p.id} className="portfolio-card">
                <div className="portfolio-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="portfolio-card-body">
                  <h3>{p.title}</h3>
                  <p className="portfolio-location">{p.location}</p>
                  <div className="portfolio-meta">
                    <span>{p.area}</span>
                    <span className="meta-dot">•</span>
                    <span>{p.style}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible < filtered.length && (
            <div className="load-more">
              <button className="btn-outline" onClick={() => setVisible(v => v + 6)}>
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80" alt="" />
          <div className="cta-banner-overlay" />
        </div>
        <div className="container cta-banner-content">
          <p className="section-label"><span className="gold-line" />Let's Talk</p>
          <h2>Have a project<br /><em>in mind?</em></h2>
          <p>Let's bring your vision to life with our expert interior design solutions.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
