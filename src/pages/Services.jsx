import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './Services.css';

const serviceList = [
  {
    title: "Residential Interiors",
    desc: "From cozy apartments to sprawling estates, we design homes that feel like a true reflection of who you are.",
    points: ["Full home design", "Space planning", "Custom furniture", "Lighting design"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  },
  {
    title: "Modular Kitchens",
    desc: "Functional, beautiful kitchens built around how you actually cook, gather, and live.",
    points: ["Custom cabinetry", "Premium countertops", "Smart storage", "Appliance integration"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  },
  {
    title: "Bedroom Design",
    desc: "Serene, restful retreats tailored to your routines and the way you wind down at the end of the day.",
    points: ["Custom wardrobes", "Ambient lighting", "Premium textiles", "Walk-in closets"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
  },
  {
    title: "Living Room Design",
    desc: "Statement spaces designed for both everyday comfort and memorable gatherings.",
    points: ["Furniture curation", "Entertainment units", "Accent walls", "Art & decor styling"],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  },
  {
    title: "Office Interiors",
    desc: "Workplaces engineered to inspire focus, collaboration, and a sense of pride in the brand.",
    points: ["Workspace planning", "Meeting rooms", "Branding integration", "Ergonomic furniture"],
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80",
  },
  {
    title: "Renovation Services",
    desc: "Breathing new life into existing spaces with thoughtful, minimally disruptive redesign.",
    points: ["Structural consultation", "Phased execution", "Material upgrades", "Budget planning"],
    img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=700&q=80",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "We learn about your lifestyle, taste, and goals for the space." },
  { step: "02", title: "Concept & Design", desc: "Our team develops mood boards, layouts, and 3D visualizations." },
  { step: "03", title: "Material Selection", desc: "We source premium finishes, furniture, and fixtures together with you." },
  { step: "04", title: "Execution", desc: "Our craftsmen bring the design to life with precision and care." },
  { step: "05", title: "Handover", desc: "A final walkthrough ensures every detail meets our standard." },
];

export default function Services() {
  return (
    <div className="services-page">
      <PageHeader title="Our Services" crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <section className="section service-list-section">
        <div className="container">
          {serviceList.map((s, i) => (
            <div key={s.title} className={`service-row ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-row-img">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="service-row-text">
                <p className="section-label"><span className="gold-line" />Service {String(i + 1).padStart(2, '0')}</p>
                <h2>{s.title}</h2>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-points">
                  {s.points.map(p => (
                    <li key={p}><Check size={14} />{p}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline">Enquire Now <ArrowRight size={14} /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-center">
            <p className="section-label"><span className="gold-line" />How We Work</p>
            <h2 className="section-title">Our Design Process</h2>
          </div>
          <div className="process-grid">
            {process.map(p => (
              <div key={p.step} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1400&q=80" alt="" />
          <div className="cta-banner-overlay" />
        </div>
        <div className="container cta-banner-content">
          <p className="section-label"><span className="gold-line" />Get Started</p>
          <h2>Let's discuss<br /><em>your space</em></h2>
          <p>Book a free consultation and let's explore what's possible.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
