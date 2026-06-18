import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      <PageHeader title="Contact Us" crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="section-label"><span className="gold-line" />Get In Touch</p>
            <h2>Let's Start a<br /><em>Conversation</em></h2>
            <p className="contact-intro">
              Whether you have a clear vision or just an idea, we'd love to hear about your
              project. Reach out and one of our designers will get back to you within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <MapPin size={18} />
                <div>
                  <span className="detail-label">Studio Address</span>
                  <span>42 Design District, Connaught Place, New Delhi – 110001</span>
                </div>
              </div>
              <div className="contact-detail">
                <Phone size={18} />
                <div>
                  <span className="detail-label">Phone</span>
                  <span>+91 98765 43210</span>
                </div>
              </div>
              <div className="contact-detail">
                <Mail size={18} />
                <div>
                  <span className="detail-label">Email</span>
                  <span>hello@luxorainteriors.in</span>
                </div>
              </div>
              <div className="contact-detail">
                <Clock size={18} />
                <div>
                  <span className="detail-label">Studio Hours</span>
                  <span>Mon – Sat, 10:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <h3>Thank you</h3>
                <p>Your message has been sent. A member of our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label>Project Type</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select a project type</option>
                    <option>Residential Interiors</option>
                    <option>Modular Kitchen</option>
                    <option>Office Interiors</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Project</label>
                  <textarea rows="5" placeholder="Share a few details about your space and timeline..." required />
                </div>
                <button type="submit" className="btn-gold form-submit">
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Studio location"
          src="https://maps.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </section>
    </div>
  );
}
