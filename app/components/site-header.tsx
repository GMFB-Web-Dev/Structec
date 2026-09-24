"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Process", "#process"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <span>Residential</span><span>Commercial</span><span>Rural</span>
          <div><a href="tel:+64224313406">022 431 3406</a><a href="mailto:office@structec.co.nz">office@structec.co.nz</a></div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="shell nav-bar__inner">
          <a className="brand" href="#home" aria-label="Structec Construction home" onClick={() => setOpen(false)}>
            <Image src="/images/structec-logo.webp" alt="Structec Construction Ltd" width={250} height={137} priority loading="eager" />
          </a>
          <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="nav-links__contact" href="#contact" onClick={() => setOpen(false)}>Reach out</a>
          </nav>
          <button className={open ? "menu-toggle is-open" : "menu-toggle"} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
