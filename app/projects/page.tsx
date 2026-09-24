import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../components/arrow";
import { projects } from "../lib/site-data";

export const metadata: Metadata = { title: "Projects | Structec Construction", description: "Explore residential, commercial and renovation work by Structec Construction." };

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero"><Image src="/images/structec-site-crew.png" alt="Structec construction site" fill priority sizes="100vw" /><div className="page-hero__wash" /><div className="shell page-hero__content"><p className="eyebrow">Selected work</p><h1>Work we’re<br /><span>proud to stand behind.</span></h1><p>Residential, commercial and renovation projects shaped by practical thinking and a sharp eye for detail.</p></div></section>
      <section className="project-page section"><div className="shell"><div className="project-page__grid">{projects.map((project, index) => <article className={index % 3 === 0 ? "project-page-card project-page-card--wide" : "project-page-card"} key={project.title}><Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 760px) 92vw, 48vw" /><div className="project-card__overlay" /><div className="project-card__label"><span>{project.category}</span><h2>{project.title}</h2></div></article>)}</div></div></section>
      <section className="cta"><div className="shell cta__inner"><div><p className="eyebrow">Have a project in mind?</p><h2>Let’s talk about<br />what’s possible.</h2></div><Link className="button button--charcoal" href="/contact">Start a conversation <Arrow /></Link></div></section>
    </main>
  );
}
