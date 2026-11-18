import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contact, services } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h3>Contact Us</h3>

          <p><Phone size={16} /> {contact.phones[0]}</p>
          <p><Phone size={16} /> {contact.phones[1]}</p>

          <p>
            <Mail size={16} />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>

          {contact.addresses.map((a) => (
            <p key={a}><MapPin size={16} /> {a}</p>
          ))}
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>

          {services.slice(0, 5).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Connect With Us</h3>

          <a href="https://www.youtube.com/@MoffyloLimited" target="_blank" rel="noreferrer">
            ▶ YouTube - MoffyloLimited
          </a>

          <a href="https://www.instagram.com/moffylo_limited/" target="_blank" rel="noreferrer">
            ◎ Instagram - moffylo_limited
          </a>

          <a href="https://www.linkedin.com/in/victor-moffat-0856a7377" target="_blank" rel="noreferrer">
            in - LinkedIn
          </a>

          <a href="https://www.tiktok.com/@moffylo" target="_blank" rel="noreferrer">
            ▶ TikTok - MoffyloLimited
          </a>

          <a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3>Send a Message</h3>

          <p>
            Have a project or supply enquiry?
            Contact our team by email or WhatsApp.
          </p>

          <a
            className="button button-outline"
            href={`mailto:${contact.email}?subject=Website%20Enquiry`}
          >
            Email Moffylo
          </a>
        </div>

      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Moffylo Limited. All rights reserved.
      </div>
    </footer>
  );
}