import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const close = () => { setOpen(false); setServiceOpen(false); };
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="brand" onClick={close}><img src="/assets/logo.jpg" alt="Moffylo Limited logo" /><span>MOFFYLO <b>LIMITED</b></span></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <div className="nav-dropdown">
          <button onClick={() => setServiceOpen(!serviceOpen)} aria-expanded={serviceOpen}>Services <ChevronDown size={15}/></button>
          <div className={serviceOpen ? 'dropdown-panel show' : 'dropdown-panel'}>
            {services.map(s => <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}>{s.title}</Link>)}
          </div>
        </div>
        <NavLink to="/about" onClick={close}>About Us</NavLink>
        <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
      </nav>
    </div>
  </header>;
}
