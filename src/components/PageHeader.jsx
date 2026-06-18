import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHeader.css';

export default function PageHeader({ title, crumbs }) {
  return (
    <section className="page-header">
      <div className="page-header-bg" />
      <div className="container page-header-content">
        <h1>{title}</h1>
        <div className="breadcrumbs">
          {crumbs.map((c, i) => (
            <span key={i} className="crumb">
              {i > 0 && <ChevronRight size={13} />}
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
