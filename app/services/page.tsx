import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../components/arrow";
import { services } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Construction Services | Structec Construction",
  description: "Explore Structec's residential, commercial, rural, renovation, recladding, reroofing, landscaping and decking services.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero page-hero--services">
        <Image src="/images/structec-roof-framing.png" alt="Timber framing by Structec Construction" fill priority sizes="100vw" />
        <div className="page-hero__wash" />
        <div className="shell page-hero__content"><p className="eyebrow">What we build</p><h1>Construction services,<br /><span>handled properly.</span></h1><p>One experienced team for new homes, renovations, outdoor spaces, commercial work and the essential upgrades that keep a building performing.</p></div>
      </section>

      <section className="service-index section">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Full service offering</p><h2>Built around the project in front of us.</h2></div><p>Every service is delivered with clear communication, capable project management and careful attention to the finish.</p></div>
          <div className="service-index__grid">
            {services.map((service) => (
              <article className="service-index-card" key={service.slug}>
                <Link className="service-index-card__image" href={`/services/${service.slug}`}>
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 92vw, 46vw" />
                  <span>{service.number}</span>
                </Link>
                <div className="service-index-card__body"><h2>{service.title}</h2><p>{service.summary}</p><ul>{service.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul><Link className="button button--charcoal" href={`/services/${service.slug}`}>View service <Arrow /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
