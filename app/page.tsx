import Image from "next/image";
import { SiteHeader } from "./components/site-header";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
    <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Residential",
    copy: "Considered new homes built around how you live, with practical guidance from early planning through to handover.",
    image: "/images/architectural-build.jpg",
  },
  {
    number: "02",
    title: "Commercial & rural",
    copy: "Reliable, well-managed construction for light commercial and rural projects across Canterbury and the South Island.",
    image: "/images/structec-site-crew.png",
  },
  {
    number: "03",
    title: "Renovations",
    copy: "Thoughtful renovations, extensions, landscaping and outdoor living that make an existing place work beautifully again.",
    image: "/images/residential-renovation.jpg",
  },
];

const projects = [
  {
    title: "Architectural builds",
    category: "Residential",
    image: "/images/architectural-build.jpg",
    className: "project-card project-card--large",
  },
  {
    title: "Multi-unit framing",
    category: "Residential",
    image: "/images/structec-roof-framing.png",
    className: "project-card",
  },
  {
    title: "Outdoor living",
    category: "Renovation",
    image: "/images/structec-landscaping.png",
    className: "project-card",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home" aria-labelledby="hero-title">
        <Image
          className="hero__image"
          src="/images/structec-hero.webp"
          alt="Modern black-clad townhouses completed by Structec Construction"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__wash" />
        <div className="hero__content shell">
          <p className="eyebrow hero__eyebrow reveal reveal--1">Canterbury builders · Since 1994</p>
          <h1 id="hero-title" className="reveal reveal--2">
            Built with purpose.<br />
            <span>Finished with pride.</span>
          </h1>
          <p className="hero__intro reveal reveal--3">
            Quality residential, commercial and rural construction—delivered with honest advice, clear communication and hands-on craftsmanship.
          </p>
          <div className="hero__actions reveal reveal--4">
            <a className="button button--gold" href="#services">
              Explore our services <Arrow />
            </a>
            <a className="button button--glass" href="#contact">
              Start a project <Arrow />
            </a>
          </div>
        </div>
        <div className="hero__trust shell reveal reveal--4" aria-label="Why choose Structec">
          <div><strong>30+</strong><span>Years of experience</span></div>
          <div><strong>Local</strong><span>Canterbury owned</span></div>
          <div><strong>Hands-on</strong><span>From start to finish</span></div>
          <div><strong>Quality</strong><span>Without compromise</span></div>
        </div>
        <a className="hero__scroll" href="#about" aria-label="Scroll to about Structec">
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="intro section" id="about">
        <div className="shell intro__grid">
          <div className="intro__copy">
            <p className="eyebrow">Built on trust</p>
            <h2>Good building starts with a good conversation.</h2>
            <p className="lead">
              Structec Construction brings more than three decades of practical experience to builds throughout Canterbury and the South Island.
            </p>
            <p>
              From the first ideas to the final details, we keep the process clear, collaborative and focused on the result. No unnecessary noise—just capable people, honest advice and workmanship made to last.
            </p>
            <a className="text-link" href="#process">How we work <Arrow /></a>
          </div>

          <div className="intro__media" aria-label="Structec projects and experience">
            <div className="intro__photo intro__photo--main">
              <Image src="/images/structec-site-crew.png" alt="Structec vehicle on an active timber-framed building site" fill sizes="(max-width: 800px) 92vw, 42vw" />
            </div>
            <div className="intro__photo intro__photo--detail">
              <Image src="/images/structec-roof-framing.png" alt="Timber roof framing in progress" fill sizes="(max-width: 800px) 45vw, 18vw" />
            </div>
            <div className="intro__stamp">
              <span>Est.</span>
              <strong>1994</strong>
              <small>Canterbury, NZ</small>
            </div>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">What we build</p>
              <h2>One team. Every stage.</h2>
            </div>
            <p>From ground-up builds to the finishing touches, we bring the same care and accountability to every project.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <Image src={service.image} alt="" fill sizes="(max-width: 760px) 92vw, 31vw" />
                <div className="service-card__shade" />
                <div className="service-card__content">
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <a href="#contact" aria-label={`Discuss a ${service.title.toLowerCase()} project`}><Arrow /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Made to be lived in.</h2>
            </div>
            <a className="text-link" href="#contact">Discuss your project <Arrow /></a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.className} key={project.title}>
                <Image src={project.image} alt={`${project.title} by Structec Construction`} fill sizes="(max-width: 760px) 92vw, 50vw" />
                <div className="project-card__overlay" />
                <div className="project-card__label">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="shell process__grid">
          <div className="process__image">
            <Image src="/images/structec-interior-detail.png" alt="Curved timber and acoustic interior detail under construction" fill sizes="(max-width: 800px) 92vw, 46vw" />
            <div className="process__image-note">
              <span>Detail matters</span>
              <strong>From design to completion</strong>
            </div>
          </div>

          <div className="process__content">
            <p className="eyebrow">A clear process</p>
            <h2>Know what’s happening, every step of the way.</h2>
            <div className="process__steps">
              <div><span>01</span><div><h3>Listen & plan</h3><p>We understand the brief, the site, your priorities and the decisions ahead.</p></div></div>
              <div><span>02</span><div><h3>Build & communicate</h3><p>Hands-on delivery, reliable scheduling and clear updates throughout the build.</p></div></div>
              <div><span>03</span><div><h3>Finish & hand over</h3><p>A carefully finished project, ready for the way you want to use it.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell cta__inner">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s build something<br />worth talking about.</h2>
          </div>
          <a className="button button--charcoal" href="#contact">Start a conversation <Arrow /></a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact__grid">
          <div className="contact__copy">
            <p className="eyebrow">Get in touch</p>
            <h2>Tell us what you’re planning.</h2>
            <p>Whether it’s an early idea or a project ready to move, we’d be glad to hear about it.</p>
            <div className="contact__details">
              <a href="tel:+64224313406"><span>Call</span><strong>022 431 3406</strong></a>
              <a href="mailto:office@structec.co.nz"><span>Email</span><strong>office@structec.co.nz</strong></a>
              <div><span>Based in</span><strong>Christchurch, NZ</strong></div>
            </div>
          </div>

          <form className="contact-form" action="mailto:office@structec.co.nz" method="post" encType="text/plain">
            <div className="form-row">
              <label>Name<input type="text" name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label>Phone<input type="tel" name="phone" autoComplete="tel" placeholder="Your phone" /></label>
            </div>
            <label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@email.co.nz" /></label>
            <label>Tell us about your project<textarea name="message" required rows={4} placeholder="A little about your project, location and timing..." /></label>
            <button className="button button--gold" type="submit">Send enquiry <Arrow /></button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__main">
          <a className="footer__brand" href="#home" aria-label="Structec Construction home">
            <Image src="/images/structec-logo.webp" alt="Structec Construction Ltd" width={250} height={137} />
          </a>
          <div className="footer__links">
            <div><span>Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a></div>
            <div><span>Contact</span><a href="tel:+64224313406">022 431 3406</a><a href="mailto:office@structec.co.nz">office@structec.co.nz</a><p>Christchurch, NZ</p></div>
            <div><span>Hours</span><p>Mon–Fri, 7am–5pm</p><p>Weekends by appointment</p></div>
          </div>
        </div>
        <div className="shell footer__bottom">
          <span>© {new Date().getFullYear()} Structec Construction Ltd.</span>
          <span>Quality builds across Canterbury & the South Island.</span>
        </div>
      </footer>
    </main>
  );
}
