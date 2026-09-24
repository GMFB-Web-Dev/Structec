import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./components/arrow";
import { ContactForm } from "./components/contact-form";
import { projects, services } from "./lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <Image className="hero__image" src="/images/structec-hero.webp" alt="Modern black-clad townhouses completed by Structec Construction" fill priority sizes="100vw" />
        <div className="hero__wash" />
        <div className="hero__content shell">
          <p className="eyebrow hero__eyebrow reveal reveal--1">Canterbury builders · Since 1994</p>
          <h1 id="hero-title" className="reveal reveal--2">Built with purpose.<br /><span>Finished with pride.</span></h1>
          <p className="hero__intro reveal reveal--3">Quality residential, commercial and rural construction—delivered with honest advice, clear communication and hands-on craftsmanship.</p>
          <div className="hero__actions reveal reveal--4">
            <Link className="button button--gold" href="/services">Explore our services <Arrow /></Link>
            <Link className="button button--glass" href="/contact">Start a project <Arrow /></Link>
          </div>
        </div>
        <div className="hero__trust shell reveal reveal--4" aria-label="Why choose Structec">
          <div><strong>30+</strong><span>Years of experience</span></div>
          <div><strong>Local</strong><span>Canterbury owned</span></div>
          <div><strong>Hands-on</strong><span>From start to finish</span></div>
          <div><strong>Quality</strong><span>Without compromise</span></div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="shell intro__grid">
          <div className="intro__copy">
            <p className="eyebrow">Built on trust</p>
            <h2>Good building starts with a good conversation.</h2>
            <p className="lead">Structec Construction brings more than three decades of practical experience to builds throughout Canterbury and the South Island.</p>
            <p>From the first ideas to the final details, we keep the process clear, collaborative and focused on the result. No unnecessary noise—just capable people, honest advice and workmanship made to last.</p>
            <Link className="text-link" href="/process">How we work <Arrow /></Link>
          </div>
          <div className="intro__media" aria-label="Structec projects and experience">
            <div className="intro__photo intro__photo--main"><Image src="/images/structec-site-crew.png" alt="Structec vehicle on an active timber-framed building site" fill sizes="(max-width: 800px) 92vw, 42vw" /></div>
            <div className="intro__photo intro__photo--detail"><Image src="/images/structec-roof-framing.png" alt="Timber roof framing in progress" fill sizes="(max-width: 800px) 45vw, 18vw" /></div>
            <div className="intro__stamp"><span>Est.</span><strong>1994</strong><small>Canterbury, NZ</small></div>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div><p className="eyebrow">What we build</p><h2>One team. Every stage.</h2></div>
            <div className="section-heading__aside"><p>Explore the full Structec offering, from residential builds to reroofing and outdoor living.</p><Link className="text-link" href="/services">View all services <Arrow /></Link></div>
          </div>
          <div className="service-grid service-grid--six">
            {services.map((service) => (
              <article className="service-card service-card--compact" key={service.slug}>
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 92vw, 31vw" />
                <div className="service-card__shade" />
                <div className="service-card__content">
                  <span>{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.summary}</p><Link href={`/services/${service.slug}`} aria-label={`View ${service.title}`}><Arrow /></Link></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Made to be lived in.</h2></div>
            <Link className="text-link" href="/projects">View our projects <Arrow /></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <Link className={index === 0 ? "project-card project-card--large" : "project-card"} href="/projects" key={project.title}>
                <Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 760px) 92vw, 50vw" />
                <div className="project-card__overlay" /><div className="project-card__label"><span>{project.category}</span><h3>{project.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="shell process__grid">
          <div className="process__image"><Image src="/images/structec-interior-detail.png" alt="Curved timber and acoustic interior detail under construction" fill sizes="(max-width: 800px) 92vw, 46vw" /><div className="process__image-note"><span>Detail matters</span><strong>From design to completion</strong></div></div>
          <div className="process__content">
            <p className="eyebrow">A clear process</p><h2>Know what’s happening, every step of the way.</h2>
            <div className="process__steps">
              <div><span>01</span><div><h3>Listen & plan</h3><p>We understand the brief, the site, your priorities and the decisions ahead.</p></div></div>
              <div><span>02</span><div><h3>Build & communicate</h3><p>Hands-on delivery, reliable scheduling and clear updates throughout the build.</p></div></div>
              <div><span>03</span><div><h3>Finish & hand over</h3><p>A carefully finished project, ready for the way you want to use it.</p></div></div>
            </div>
            <Link className="text-link" href="/process">See the full process <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="cta"><div className="shell cta__inner"><div><p className="eyebrow">Ready when you are</p><h2>Let’s build something<br />worth talking about.</h2></div><Link className="button button--charcoal" href="/contact">Start a conversation <Arrow /></Link></div></section>

      <section className="contact section" id="contact">
        <div className="shell contact__grid">
          <div className="contact__copy"><p className="eyebrow">Get in touch</p><h2>Tell us what you’re planning.</h2><p>Whether it’s an early idea or a project ready to move, we’d be glad to hear about it.</p><div className="contact__details"><a href="tel:+64224313406"><span>Call</span><strong>022 431 3406</strong></a><a href="mailto:office@structec.co.nz"><span>Email</span><strong>office@structec.co.nz</strong></a><div><span>Based in</span><strong>Christchurch, NZ</strong></div></div></div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
