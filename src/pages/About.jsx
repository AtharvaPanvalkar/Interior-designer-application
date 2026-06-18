import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Heart, Target } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { stats } from '../data';
import './About.css';

const values = [
  { icon: Target, title: "Purposeful Design", desc: "Every element serves both beauty and function in harmony." },
  { icon: Heart, title: "Client First", desc: "Your vision and lifestyle guide every decision we make." },
  { icon: Award, title: "Uncompromising Quality", desc: "We source only the finest materials and craftsmanship." },
  { icon: Users, title: "Collaborative Process", desc: "Design is a conversation, not a monologue." },
];

const team = [
  { name: "Ananya Kapoor", role: "Founder & Principal Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Vikram Rathi", role: "Head of Architecture", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Sana Iyer", role: "Lead Interior Stylist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];

export default function About() {
  return (
    <div className="about-page">
      <PageHeader title="About Us" crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      {/* STORY */}
      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-img">
            <img src="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=700&q=80" alt="Studio" />
          </div>
          <div className="about-story-text">
            <p className="section-label"><span className="gold-line" />Our Story</p>
            <h2>Fifteen Years of<br /><em>Crafting Beautiful Spaces</em></h2>
            <p>
              Founded in 2011, Luxora Interiors began with a simple belief: that the spaces we
              live and work in shape how we feel every single day. What started as a small
              studio in New Delhi has grown into one of India's most trusted luxury interior
              design firms.
            </p>
            <p>
              Today, our team of architects, designers, and craftsmen works across residential
              and commercial projects nationwide, bringing the same attention to detail to every
              square foot we touch — from intimate apartments to sprawling villas.
            </p>
            <Link to="/portfolio" className="btn-gold">View Our Work <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="container about-stats-grid">
          {stats.map(s => (
            <div key={s.label} className="about-stat">
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="container">
          <div className="section-center">
            <p className="section-label"><span className="gold-line" />What Drives Us</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <v.icon size={26} className="value-icon" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section team-section">
        <div className="container">
          <div className="section-center">
            <p className="section-label"><span className="gold-line" />Meet The Studio</p>
            <h2 className="section-title">The People Behind The Vision</h2>
          </div>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-img"><img src={t.img} alt={t.name} /></div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80" alt="" />
          <div className="cta-banner-overlay" />
        </div>
        <div className="container cta-banner-content">
          <p className="section-label"><span className="gold-line" />Work With Us</p>
          <h2>Ready to begin<br /><em>your project?</em></h2>
          <p>Tell us about your space and we'll bring it to life.</p>
          <Link to="/contact" className="btn-gold">Get In Touch <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
