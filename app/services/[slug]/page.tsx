import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "../../components/arrow";
import { serviceBySlug, services } from "../../lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: `${service.title} | Structec Construction`, description: service.summary };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <main>
      <section className="page-hero page-hero--service-detail">
        <Image src={service.image} alt={service.alt} fill priority sizes="100vw" />
        <div className="page-hero__wash" />
        <div className="shell page-hero__content"><p className="eyebrow">Service {service.number}</p><h1>{service.title}</h1><p>{service.summary}</p><Link className="button button--gold" href="/contact">Discuss your project <Arrow /></Link></div>
      </section>

      <section className="service-detail section">
        <div className="shell service-detail__intro">
          <div><p className="eyebrow">How we can help</p><h2>{service.intro}</h2></div>
          <div className="service-detail__features"><span>Services include</span>{service.features.map((feature) => <p key={feature}>{feature}</p>)}</div>
        </div>
        <div className="shell service-detail__body">
          <div className="service-detail__image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 800px) 92vw, 56vw" /></div>
          <div className="service-detail__outcomes"><p className="eyebrow">What to expect</p><h2>Clear thinking.<br />Careful delivery.</h2>{service.outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><p>{outcome}</p></div>)}<Link className="button button--gold" href="/contact">Start a conversation <Arrow /></Link></div>
        </div>
      </section>

      <section className="next-service"><div className="shell next-service__inner"><div><span>Next service</span><h2>{nextService.title}</h2></div><Link className="button button--charcoal" href={`/services/${nextService.slug}`}>Explore service <Arrow /></Link></div></section>
    </main>
  );
}
