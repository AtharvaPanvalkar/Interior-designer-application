// import { Link } from 'react-router-dom';
// import { ArrowRight, ChevronRight } from 'lucide-react';
// import { projects, services, stats, testimonials } from '../data';
// import './Home.css';

// function StatCard({ value, label }) {
//   return (
//     <div className="stat-card">
//       <span className="stat-value">{value}</span>
//       <span className="stat-label">{label}</span>
//     </div>
//   );
// }

// function ProjectCard({ project, large }) {
//   return (
//     <Link to={`/portfolio/${project.id}`} className={`project-card ${large ? 'large' : ''}`}>
//       <img src={project.image} alt={project.title} loading="lazy" />
//       <div className="project-overlay">
//         <div className="project-info">
//           <p className="project-location">{project.location}</p>
//           <h3>{project.title}</h3>
//         </div>
//         <div className="project-arrow"><ArrowRight size={18} /></div>
//       </div>
//     </Link>
//   );
// }

// export default function Home() {
//   const featured = projects.filter(p => p.featured);

//   return (
//     <div className="home">
//       {/* HERO */}
//       <section className="hero">
//         <div className="hero-bg">
//           <img
//             src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85"
//             alt="Luxury interior"
//           />
//           <div className="hero-overlay" />
//         </div>
//         <div className="hero-content container">
//           <p className="hero-eyebrow">
//             <span className="gold-line" />
//             Luxury Interior Design
//           </p>
//           <h1 className="hero-title">
//             Designing<br />
//             <em>Timeless Spaces</em><br />
//             For Inspired Living
//           </h1>
//           <p className="hero-sub">
//             We create luxury interiors that reflect your style, elevate<br />
//             your lifestyle, and stand the test of time.
//           </p>
//           <div className="hero-actions">
//             <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
//             <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
//           </div>
//         </div>
//         <div className="hero-stats">
//           {stats.map(s => <StatCard key={s.label} {...s} />)}
//         </div>
//       </section>

//       {/* FEATURED PROJECTS */}
//       <section className="section featured-section">
//         <div className="container">
//           <div className="section-header">
//             <div>
//               <p className="section-label"><span className="gold-line" />Featured Projects</p>
//               <h2 className="section-title">Our Finest Work</h2>
//             </div>
//             <Link to="/portfolio" className="view-all">
//               View All Projects <ChevronRight size={15} />
//             </Link>
//           </div>

//           <div className="featured-grid">
//             <ProjectCard project={featured[0]} large />
//             <div className="featured-stack">
//               <ProjectCard project={featured[1]} />
//               <ProjectCard project={featured[2]} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="section services-section">
//         <div className="container">
//           <div className="section-center">
//             <p className="section-label"><span className="gold-line" />What We Offer</p>
//             <h2 className="section-title">Our Services</h2>
//           </div>
//           <div className="services-grid">
//             {services.map(s => (
//               <div key={s.title} className="service-card">
//                 <span className="service-icon">{s.icon}</span>
//                 <h3>{s.title}</h3>
//                 <p>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="services-cta">
//             <Link to="/services" className="btn-outline">
//               Explore All Services <ArrowRight size={14} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA BANNER */}
//       <section className="cta-banner">
//         <div className="cta-banner-bg">
//           <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1400&q=80" alt="" />
//           <div className="cta-banner-overlay" />
//         </div>
//         <div className="container cta-banner-content">
//           <p className="section-label"><span className="gold-line" />Transforming Spaces, Elevating Lives</p>
//           <h2>Let's Create Your<br /><em>Dream Space</em></h2>
//           <p>Book a free consultation with our experts today.</p>
//           <Link to="/contact" className="btn-gold">Schedule Consultation <ArrowRight size={14} /></Link>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="section testimonials-section">
//         <div className="container">
//           <div className="section-center">
//             <p className="section-label"><span className="gold-line" />Client Stories</p>
//             <h2 className="section-title">What Our Clients Say</h2>
//           </div>
//           <div className="testi-grid">
//             {testimonials.map((t, i) => (
//               <div key={i} className="testi-card">
//                 <div className="testi-stars">
//                   {'★'.repeat(t.rating)}
//                 </div>
//                 <p className="testi-text">"{t.text}"</p>
//                 <div className="testi-author">
//                   <span className="author-name">— {t.author}</span>
//                   <span className="author-project">{t.project}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CloudDownload } from "lucide-react"; // Added CloudDownload icon
import { projects, services, stats, testimonials } from "../data";
import { getAssetUrl } from "../utils/s3Client"; // 🚀 Integrated your Local S3 gateway
import "./Home.css";

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function ProjectCard({ project, large }) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className={`project-card ${large ? "large" : ""}`}
    >
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="project-overlay">
        <div className="project-info">
          <p className="project-location">{project.location}</p>
          <h3>{project.title}</h3>
        </div>
        <div className="project-arrow">
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  // 🚀 Dynamically map to the file stored inside your Docker LocalStack S3 container
  const cloudAssetUrl = getAssetUrl("test-config.json");

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85"
            alt="Luxury interior"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content container">
          <p className="hero-eyebrow">
            <span className="gold-line" />
            Luxury Interior Design
          </p>
          <h1 className="hero-title">
            Designing
            <br />
            <em>Timeless Spaces</em>
            <br />
            For Inspired Living
          </h1>
          <p className="hero-sub">
            We create luxury interiors that reflect your style, elevate
            <br />
            your lifestyle, and stand the test of time.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">
              Book Free Consultation
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">
                <span className="gold-line" />
                Featured Projects
              </p>
              <h2 className="section-title">Our Finest Work</h2>
            </div>
            <Link to="/portfolio" className="view-all">
              View All Projects <ChevronRight size={15} />
            </Link>
          </div>

          <div className="featured-grid">
            <ProjectCard project={featured[0]} large />
            <div className="featured-stack">
              <ProjectCard project={featured[1]} />
              <ProjectCard project={featured[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <div className="section-center">
            <p className="section-label">
              <span className="gold-line" />
              What We Offer
            </p>
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn-outline">
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER & CLOUD ASSET DOWNLOAD */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1400&q=80"
            alt=""
          />
          <div className="cta-banner-overlay" />
        </div>
        <div className="container cta-banner-content">
          <p className="section-label">
            <span className="gold-line" />
            Transforming Spaces, Elevating Lives
          </p>
          <h2>
            Let's Create Your
            <br />
            <em>Dream Space</em>
          </h2>
          <p>
            Book a free consultation or inspect our automated system manifests.
          </p>

          <div
            className="hero-actions"
            style={{ justifyContent: "center", gap: "16px" }}
          >
            <Link to="/contact" className="btn-gold">
              Schedule Consultation <ArrowRight size={14} />
            </Link>

            {/* ⚡ Real S3 Cloud Storage Download Button */}
            <a
              href={cloudAssetUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CloudDownload size={16} /> Fetch Cloud Manifest
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-center">
            <p className="section-label">
              <span className="gold-line" />
              Client Stories
            </p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">{"★".repeat(t.rating)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <span className="author-name">— {t.author}</span>
                  <span className="author-project">{t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}