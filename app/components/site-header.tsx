"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "../lib/site-data";

const mainLinks = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Projects", "/projects"],
  ["Process", "/process"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-bar">
        <div className="shell nav-bar__inner">
          <Link className="brand" href="/" aria-label="Structec Construction home" onClick={closeMenu}>
            <Image src="/images/structec-logo.webp" alt="Structec Construction Ltd" width={250} height={137} priority loading="eager" />
          </Link>

          <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <Link href="/" className={pathname === "/" ? "is-active" : ""} onClick={closeMenu}>Home</Link>

            <div className={servicesOpen ? "nav-dropdown is-open" : "nav-dropdown"}>
              <div className="nav-dropdown__trigger">
                <Link href="/services" className={pathname.startsWith("/services") ? "is-active" : ""} onClick={() => setOpen(false)}>Services</Link>
                <button type="button" aria-label="Show services" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>
                  <svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
              <div className="nav-dropdown__menu">
                <Link href="/services" onClick={closeMenu}>All services</Link>
                {services.map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug} onClick={closeMenu}>{service.shortTitle}</Link>
                ))}
              </div>
            </div>

            {mainLinks.slice(1).map(([label, href]) => (
              <Link href={href} className={pathname === href ? "is-active" : ""} key={href} onClick={closeMenu}>{label}</Link>
            ))}
            <Link className="nav-links__contact" href="/contact" onClick={closeMenu}>Contact</Link>
          </nav>

          <button className={open ? "menu-toggle is-open" : "menu-toggle"} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
