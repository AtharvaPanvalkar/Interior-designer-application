import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './Styles.css';

const styles = [
  {
    name: "Modern Luxury",
    desc: "Clean lines, rich materials, and statement lighting come together for spaces that feel effortlessly grand.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
  {
    name: "Contemporary",
    desc: "Sleek silhouettes and a neutral palette punctuated with bold accents for an of-the-moment feel.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80",
  },
  {
    name: "Minimalist",
    desc: "Pared-back forms and a restrained palette let craftsmanship and proportion take center stage.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
  },
  {
    name: "Modern Classic",
    desc: "Traditional silhouettes reinterpreted with contemporary materials and a lighter touch.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  },
  {
    name: "Industrial",
    desc: "Exposed textures, raw metals, and warm wood create spaces with honest, tactile character.",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=700&q=80",
  },
  {
    name: "Coastal Luxe",
    desc: "Airy, light-filled interiors with natural textures inspired by sun, sand, and sea.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80",
  },
];

export default function Styles() {
  return (
    <div className="styles-page">
      <PageHeader title="Design Styles" crumbs={[{ label: 'Home', to: '/' }, { label: 'Styles' }]} />

      <section className="section styles-intro">
        <div className="container">
          <div className="section-center">
            <p className="section-label"><span className="gold-line" />Find Your Aesthetic</p>
            <h2 className="section-title">Styles We Specialize In</h2>
            <p className="styles-intro-text">
              Every space tells a story. Explore the design languages we work in most often,
              each adapted to fit your home and the way you live in it.
            </p>
          </div>
        </div>
      </section>

      <section className="section styles-grid-section">
        <div className="container">
          <div className="styles-grid">
            {styles.map(s => (
              <div key={s.name} className="style-card">
                <div className="style-img">
                  <img src={s.img} alt={s.name} />
                </div>
                <div className="style-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <Link to="/portfolio" className="style-link">
                    See Examples <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=80" alt="" />
          <div className="cta-banner-overlay" />
        </div>
        <div className="container cta-banner-content">
          <p className="section-label"><span className="gold-line" />Not Sure Which Style?</p>
          <h2>We'll help you<br /><em>find it</em></h2>
          <p>Our designers can help you discover the aesthetic that fits you best.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
