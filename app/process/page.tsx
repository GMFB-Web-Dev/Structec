import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../components/arrow";

export const metadata: Metadata = { title: "Our Process | Structec Construction", description: "A clear, collaborative construction process from the first conversation through to handover." };

const stages = [
  ["01", "Listen & understand", "We start with the site, your goals and the practical realities of the project. Early clarity creates better decisions later."],
  ["02", "Scope & plan", "We shape the build approach, programme, materials and key decisions into a plan everyone can work from."],
  ["03", "Build & communicate", "You get hands-on delivery, reliable coordination and useful updates throughout the work—not silence between milestones."],
  ["04", "Finish & hand over", "We work carefully through the final details, complete the handover and leave you with a build ready to use and enjoy."],
];

export default function ProcessPage() {
  return (
    <main>
      <section className="page-hero"><Image src="/images/structec-interior-detail.png" alt="Detailed interior construction by Structec" fill priority sizes="100vw" /><div className="page-hero__wash" /><div className="shell page-hero__content"><p className="eyebrow">How we work</p><h1>A clear path from<br /><span>first idea to final detail.</span></h1><p>Good construction is easier when expectations are clear, decisions are timely and communication never disappears.</p></div></section>
      <section className="process-page section"><div className="shell process-page__intro"><div><p className="eyebrow">The Structec approach</p><h2>Built to keep the project moving—and you informed.</h2></div><p>Every build is different, but the fundamentals stay the same: listen properly, plan carefully, communicate clearly and take responsibility for the finish.</p></div><div className="shell process-page__stages">{stages.map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</div></section>
      <section className="process-banner"><Image src="/images/structec-roof-framing.png" alt="Structec framing in progress" fill sizes="100vw" /><div className="process-banner__wash" /><div className="shell process-banner__content"><p className="eyebrow">Ready to begin?</p><h2>Bring us the idea.<br />We’ll help shape the build.</h2><Link className="button button--gold" href="/contact">Talk to the team <Arrow /></Link></div></section>
    </main>
  );
}
