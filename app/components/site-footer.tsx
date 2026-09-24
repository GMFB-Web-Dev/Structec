import Image from "next/image";
import Link from "next/link";
import { services } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer__main">
        <Link className="footer__brand" href="/" aria-label="Structec Construction home">
          <Image src="/images/structec-logo.webp" alt="Structec Construction Ltd" width={250} height={137} />
        </Link>
        <div className="footer__links">
          <div>
            <span>Explore</span>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/process">Process</Link>
            <Link href="/#about">About</Link>
          </div>
          <div>
            <span>Services</span>
            {services.slice(0, 4).map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</Link>)}
          </div>
          <div>
            <span>Contact</span>
            <a href="tel:+64224313406">022 431 3406</a>
            <a href="mailto:office@structec.co.nz">office@structec.co.nz</a>
            <p>Christchurch, NZ</p>
            <p>Mon–Fri, 7am–5pm</p>
          </div>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© {new Date().getFullYear()} Structec Construction Ltd.</span>
        <span>Quality builds across Canterbury & the South Island.</span>
      </div>
    </footer>
  );
}
