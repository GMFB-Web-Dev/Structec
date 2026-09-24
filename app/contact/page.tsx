import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../components/contact-form";

export const metadata: Metadata = { title: "Contact | Structec Construction", description: "Talk to Structec Construction about your next Canterbury building project." };

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero page-hero--contact"><Image src="/images/structec-hero.webp" alt="Structec homes in Canterbury" fill priority sizes="100vw" /><div className="page-hero__wash" /><div className="shell page-hero__content"><p className="eyebrow">Reach out</p><h1>Let’s talk about<br /><span>your next project.</span></h1><p>Share what you’re planning and we’ll come back to you with a clear next step.</p></div></section>
      <section className="contact section"><div className="shell contact__grid"><div className="contact__copy"><p className="eyebrow">Get in touch</p><h2>Start with a conversation.</h2><p>Whether your project is just taking shape or ready to price, we’d be glad to hear from you.</p><div className="contact__details"><a href="tel:+64224313406"><span>Matt</span><strong>022 431 3406</strong></a><a href="tel:+64211673409"><span>Tim</span><strong>021 167 3409</strong></a><a href="mailto:office@structec.co.nz"><span>Office</span><strong>office@structec.co.nz</strong></a><div><span>Based in</span><strong>Christchurch, NZ</strong></div></div></div><ContactForm /></div></section>
    </main>
  );
}
