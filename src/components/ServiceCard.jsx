import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function ServiceCard({ service }) {
  return <Link className="service-card" to={`/services/${service.slug}`}>
    <img src={`/assets/${service.image}`} alt="" loading="lazy"/>
    <span className="service-card-shade"/>
    <span className="service-card-content"><strong>{service.title}</strong><small>Explore service <ArrowUpRight size={15}/></small></span>
  </Link>;
}
