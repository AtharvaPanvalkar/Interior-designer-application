import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Layers, Maximize, Clock, Wallet, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, Share2Icon } from '../components/SocialIcons';
import PageHeader from '../components/PageHeader';
import { projects } from '../data';
import './ProjectDetail.css';

const galleryExtra = [
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=300&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=300&q=80",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=300&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=300&q=80",
];

const materials = [
  { name: "Italian Marble", color: "#d8cfc0" },
  { name: "Walnut Veneer", color: "#5c4530" },
  { name: "Brushed Brass", color: "#b08d52" },
  { name: "Charcoal Stone", color: "#3a3a3a" },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id)) || projects[0];
  const [activeImg, setActiveImg] = useState(project.image);

  const detailFacts = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Layers, label: "Project Type", value: project.category },
    { icon: Maximize, label: "Area", value: project.area },
    { icon: Clock, label: "Timeline", value: "8 Months" },
    { icon: Wallet, label: "Budget", value: "₹ 2.8 Cr." },
  ];

  return (
    <div className="project-detail">
      <PageHeader
        title={project.title}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: project.title }]}
      />

      <section className="section pd-section">
        <div className="container">
          {/* GALLERY */}
          <div className="pd-gallery">
            <div className="pd-main-img">
              <img src={activeImg} alt={project.title} />
              <button className="pd-view-gallery"><Expand size={14} /> View Gallery</button>
              <div className="pd-arrows">
                <button><ChevronLeft size={16} /></button>
                <button><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="pd-thumbs">
              {[project.image, ...galleryExtra].map((img, i) => (
                <button key={i} className={`pd-thumb ${activeImg === img ? 'active' : ''}`} onClick={() => setActiveImg(img)}>
                  <img src={img} alt={`view ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* FACTS BAR */}
          <div className="pd-facts">
            {detailFacts.map(f => (
              <div key={f.label} className="pd-fact">
                <f.icon size={18} className="pd-fact-icon" />
                <div>
                  <span className="pd-fact-label">{f.label}</span>
                  <span className="pd-fact-value">{f.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* OVERVIEW + STYLE */}
          <div className="pd-overview-row">
            <div className="pd-overview">
              <h2>Project Overview</h2>
              <p>
                This {project.category.toLowerCase()} is a perfect blend of modern luxury and timeless
                elegance. Every corner reflects the personality of our client while ensuring
                comfort and functionality throughout the home.
              </p>
            </div>
            <div className="pd-style">
              <h2>Design Style</h2>
              <p className="pd-style-name">{project.style}</p>
              <div className="pd-share">
                <span>Share:</span>
                <a href="#"><FacebookIcon size={14} /></a>
                <a href="#"><InstagramIcon size={14} /></a>
                <a href="#"><Share2Icon size={14} /></a>
                <a href="#"><LinkedinIcon size={14} /></a>
              </div>
            </div>
          </div>

          {/* CHALLENGE / SOLUTION */}
          <div className="pd-challenge-row">
            <div>
              <h2>The Challenge</h2>
              <p>
                The client wanted a luxurious home that felt warm, welcoming, and perfect for large
                family gatherings while maintaining privacy throughout the property.
              </p>
            </div>
            <div>
              <h2>Our Solution</h2>
              <p>
                We designed open, flowing spaces with bespoke furniture, premium materials, and
                statement lighting that brought their vision to life across every room.
              </p>
            </div>
          </div>

          {/* BEFORE AFTER */}
          <div className="pd-before-after">
            <h2>Before &amp; After</h2>
            <div className="ba-images">
              <div className="ba-img">
                <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=700&q=80" alt="Before" />
                <span className="ba-tag ba-before">Before</span>
              </div>
              <div className="ba-divider"><span>+</span></div>
              <div className="ba-img">
                <img src={project.image} alt="After" />
                <span className="ba-tag ba-after">After</span>
              </div>
            </div>
          </div>

          {/* MATERIALS + FEEDBACK */}
          <div className="pd-bottom-row">
            <div className="pd-materials">
              <h2>Materials Used</h2>
              <div className="materials-swatches">
                {materials.map(m => (
                  <div key={m.name} className="swatch">
                    <span className="swatch-color" style={{ background: m.color }} />
                    <span className="swatch-name">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pd-feedback">
              <h2>Client Feedback</h2>
              <p className="feedback-text">
                "The team at Luxora Interiors transformed our dreams into reality. Their attention
                to detail and creative ideas are truly unmatched."
              </p>
              <div className="feedback-footer">
                <span>— Rohit &amp; Neha Mehra</span>
                <span className="feedback-stars">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="pd-back">
            <Link to="/portfolio" className="btn-outline">
              <ChevronLeft size={14} /> Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
