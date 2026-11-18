import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { services, contact } from './data';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function Home() {
  const slides = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const previousSlide = () => {
    setActiveSlide((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      (current + 1) % slides.length
    );
  };

  return <>
    <section className="hero">

      <div className="hero-image hero-slideshow">
        <img
          key={activeSlide}
          src={`/assets/${slides[activeSlide]}`}
          alt={`Moffylo Limited slideshow ${activeSlide + 1}`}
        />
      </div>

      <div className="hero-content">
        <p className="eyebrow">INDUSTRIAL • SUPPLY • LOGISTICS</p>
        <h1>Reliable Solutions.<br/><em>Lasting Partnerships.</em></h1>

        <p>
          Moffylo Limited delivers practical industrial, distribution,
          recycling and logistics solutions to businesses across Nigeria.
        </p>

        <div className="hero-actions">
          <Link className="button button-gold" to="/services">
            Explore Our Services <ArrowRight size={17}/>
          </Link>

          <Link className="button button-light" to="/contact">
            Talk to Our Team
          </Link>
        </div>
      </div>

      <div className="hero-caption">
        MOFFYLO LIMITED <span>•</span> EST. 2018
      </div>

      <button
        className="slide-arrow slide-prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <button
        className="slide-arrow slide-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <div className="slide-dots">
        {slides.map((slide, index) => (
          <button
            key={slide}
            className={activeSlide === index ? 'active' : ''}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>

    <section className="intro section-shell">
      <div>
        <p className="eyebrow">WHO WE ARE</p>
        <h2>One partner for <em>many needs.</em></h2>
      </div>
      <div>
        <p>
          Moffylo Limited is a Nigerian company founded in 2018 and
          registered in 2019. We support clients with dependable supply,
          industrial services and operational solutions.
        </p>
        <Link className="text-link" to="/about">
          Discover Moffylo <ArrowRight size={16}/>
        </Link>
      </div>
    </section>

    <section className="services-section section-shell" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Our <em>Services</em></h2>
        </div>
        <p>
          Explore our range of services, built around quality,
          reliability and responsive customer support.
        </p>
      </div>
      <div className="services-grid">
        {services.map(s => (
          <ServiceCard key={s.slug} service={s}/>
        ))}
      </div>
    </section>

    <section className="cta-band">
      <div>
        <p className="eyebrow">LET'S WORK TOGETHER</p>
        <h2>Have a requirement?<br/><em>Let's make it happen.</em></h2>
      </div>
      <Link className="button button-gold" to="/contact">
        Contact Moffylo <ArrowRight size={17}/>
      </Link>
    </section>
  </>;
}

function About() {
  const partners = ['OA.jpg','CFM.jpg','OG.jpg','DGT.jpg','SFM.jpg','NFM.jpg','AS.jpg','LUO.jpg','NPAC.jpg'];
  return <>
    <section className="inner-hero about-hero"><div><p className="eyebrow">GET TO KNOW US</p><h1>About <em>Moffylo</em></h1><p>Excellence, reliability and innovation across our services.</p></div></section>
    <section className="about-story section-shell"><div><p className="eyebrow">OUR STORY</p><h2>Built on service.<br/><em>Driven by trust.</em></h2></div><div><p>Moffylo Limited is a company doing business across multiple states in Nigeria. Founded by Mr. Moffat Victor in 2018 and registered with the Corporate Affairs Commission in 2019, the company is focused on helping customers enhance productivity, streamline operations and pursue sustainable growth.</p><p>We aim to be a trusted partner for industrial needs through dependable service, quality work and strong business relationships.</p></div></section>
    <section className="team-section section-shell">
    <div className="team-heading">
      <p className="eyebrow">THE PEOPLE BEHIND MOFFYLO</p>
      <h2>Meet Our <em>Leadership Team</em></h2>
      <p>
        Our leadership team brings together experience,
        dedication and commitment to delivering excellence
        across our business operations.
      </p>
    </div>

    <div className="team-grid">

      <div className="team-card">
        <div className="team-image">
          <img src="/assets/ceo.jpg" alt="Mr. Moffat Victor" />
        </div>
        <div className="team-info">
          <h3>Mr. Moffat Victor</h3>
          <p>Chief Executive Officer</p>
        </div>
      </div>

      <div className="team-card">
        <div className="team-image">
          <img src="/assets/operations.jpg" alt="Mr. Obieshi Ifeanyi" />
        </div>
        <div className="team-info">
          <h3>Mr. Obieshi Ifeanyi</h3>
          <p>Head of Operations</p>
        </div>
      </div>

      <div className="team-card">
        <div className="team-image">
          <img src="/assets/admin.jpg" alt="Ms. Uzordinma Amarachi" />
        </div>
        <div className="team-info">
          <h3>Ms. Uzordinma Amarachi</h3>
          <p>Admin</p>
        </div>
      </div>

      <div className="team-card">
        <div className="team-image">
          <img src="/assets/supervisor.jpg" alt="Mr. Bassey Shedrach" />
        </div>
        <div className="team-info">
          <h3>Mr. Bassey Shedrach</h3>
          <p>Branch Operations Supervisor</p>
        </div>
      </div>

    </div>
  </section>
    <section className="mission-section"><div className="mission-card"><p className="eyebrow">OUR VISION</p><h2>To be one of the best companies in our field in the global market.</h2><p>To become customers' preferred choice through quality, timely delivery and excellent service.</p></div><div className="mission-card dark"><p className="eyebrow">OUR MISSION</p><h2>To make industrial and recycling services more efficient.</h2><ul><li><CheckCircle2/> Make collection and transportation of scrap more efficient at source.</li><li><CheckCircle2/> Explore opportunities in reuse and recycling.</li><li><CheckCircle2/> Support safe disposal of scrap and electronic waste.</li></ul></div></section>
    <section className="partners section-shell"><p className="eyebrow">OUR NETWORK</p><h2>Partnerships built on <em>confidence.</em></h2><div className="partner-grid">{partners.map(p=><div key={p}><img src={`/assets/${p}`} alt="Business partner"/></div>)}</div></section>
  </>;
}

function Contact() {
  return <>
    <section className="inner-hero contact-hero"><div><p className="eyebrow">WE'RE READY TO HELP</p><h1>Contact <em>Us</em></h1><p>Tell us what you need. Our team will be glad to hear from you.</p></div></section>
    <section className="contact-layout section-shell"><div><p className="eyebrow">GET IN TOUCH</p><h2>Let's start a <em>conversation.</em></h2>
      <a className="contact-row" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/><span><b>WhatsApp</b><small>{contact.phones[0]}</small></span></a>
      {contact.phones.map(p=><a className="contact-row" key={p} href={`tel:${p.replaceAll(' ','')}`}><Phone/><span><b>Call us</b><small>{p}</small></span></a>)}
      <a className="contact-row" href={`mailto:${contact.email}`}><Mail/><span><b>Email</b><small>{contact.email}</small></span></a>
      {contact.addresses.map(a=><div className="contact-row" key={a}><MapPin/><span><b>Office address</b><small>{a}</small></span></div>)}
      <a className="text-link" href={contact.map} target="_blank" rel="noreferrer">View Apapa office on map <ArrowRight size={16}/></a>
    </div><div className="contact-panel"><h3>Send us an enquiry</h3><p>For now, use email or WhatsApp to reach our team directly.</p><a className="button button-gold" href={`mailto:${contact.email}?subject=Website%20Enquiry`}>Compose an email <ArrowRight size={17}/></a><a className="button button-outline" href={contact.whatsapp} target="_blank" rel="noreferrer">Message on WhatsApp</a><small className="form-note">A live website contact form will need a server-side endpoint or form service before launch. The original PHP mail handler is not used by this React frontend.</small></div></section>
  </>;
}

function ServicesIndex() { return <><section className="inner-hero services-hero"><div><p className="eyebrow">OUR CAPABILITIES</p><h1>Our <em>Services</em></h1><p>Practical solutions for industrial, commercial and distribution needs.</p></div></section><section className="services-section section-shell"><div className="services-grid">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section></>; }

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s=>s.slug===slug);
  if (!service) return <section className="section-shell not-found"><h2>Service not found</h2><Link to="/services">View all services</Link></section>;
  const gallery = Array.from({length:service.count},(_,i)=>`${service.gallery}${i+1}.jpg`);
  return <><section className="inner-hero service-hero" style={{'--service-image':`url('/assets/${service.image}')`}}><div><p className="eyebrow">MOFFYLO LIMITED • OUR SERVICES</p><h1>{service.title}</h1><p>{service.description}</p><Link className="button button-gold" to="/contact">Make an enquiry <ArrowRight size={17}/></Link></div></section><section className="service-detail section-shell"><div><p className="eyebrow">WHAT WE OFFER</p><h2>{service.title.split(' ')[0]} <em>Solutions</em></h2><p>{service.description}</p><Link className="text-link" to="/contact">Discuss your requirements <ArrowRight size={16}/></Link></div><div className="gallery-grid">{gallery.map((img,i)=><img key={img} src={`/assets/${img}`} alt={`${service.title} example ${i+1}`} loading="lazy"/>)}</div></section><section className="cta-band"><div><p className="eyebrow">NEED THIS SERVICE?</p><h2>Let's discuss your <em>requirements.</em></h2></div><Link className="button button-gold" to="/contact">Contact Us <ArrowRight size={17}/></Link></section></>;
}

export default function App() {
  return <><ScrollToTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/services" element={<ServicesIndex/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="*" element={<section className="section-shell not-found"><h2>Page not found</h2><Link to="/">Return home</Link></section>}/></Routes></main><Footer/></>;
}
