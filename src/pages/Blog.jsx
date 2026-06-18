import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './Blog.css';

const posts = [
  {
    title: "5 Timeless Design Principles Every Home Should Follow",
    excerpt: "Discover the foundational ideas that keep interiors feeling relevant decades after they're built.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
    date: "June 2, 2026",
    read: "6 min read",
    category: "Design Tips",
    featured: true,
  },
  {
    title: "How to Choose the Right Lighting for Every Room",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&q=80",
    date: "May 24, 2026",
    read: "4 min read",
    category: "Lighting",
  },
  {
    title: "Modular Kitchens: Trends to Watch in 2026",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
    date: "May 12, 2026",
    read: "5 min read",
    category: "Kitchens",
  },
  {
    title: "Small Space, Big Style: Designing Compact Apartments",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80",
    date: "April 30, 2026",
    read: "7 min read",
    category: "Apartments",
  },
  {
    title: "The Psychology of Color in Interior Design",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&q=80",
    date: "April 18, 2026",
    read: "5 min read",
    category: "Design Theory",
  },
  {
    title: "Sustainable Materials That Don't Compromise on Luxury",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&q=80",
    date: "April 5, 2026",
    read: "6 min read",
    category: "Sustainability",
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <div className="blog-page">
      <PageHeader title="Our Blog" crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

      <section className="section blog-section">
        <div className="container">
          {/* FEATURED POST */}
          <Link to="#" className="blog-featured">
            <div className="blog-featured-img">
              <img src={featured.img} alt={featured.title} />
            </div>
            <div className="blog-featured-body">
              <span className="blog-category">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="blog-meta">
                <span><Calendar size={13} /> {featured.date}</span>
                <span><Clock size={13} /> {featured.read}</span>
              </div>
              <span className="blog-read-more">Read Article <ArrowRight size={14} /></span>
            </div>
          </Link>

          {/* GRID */}
          <div className="blog-grid">
            {rest.map(p => (
              <Link to="#" key={p.title} className="blog-card">
                <div className="blog-card-img"><img src={p.img} alt={p.title} /></div>
                <div className="blog-card-body">
                  <span className="blog-category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <div className="blog-meta">
                    <span><Calendar size={12} /> {p.date}</span>
                    <span><Clock size={12} /> {p.read}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div>
            <p className="section-label"><span className="gold-line" />Stay Inspired</p>
            <h2>Subscribe to our newsletter</h2>
            <p className="newsletter-sub">Get design tips, trends, and project reveals delivered monthly.</p>
          </div>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn-gold">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
