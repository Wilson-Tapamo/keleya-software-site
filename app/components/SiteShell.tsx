"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Accueil", "/"],
  ["À propos", "/a-propos"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Keleya — Accueil">
      <Image src="/keleya-mark-red.png" alt="" width="84" height="84" unoptimized />
      <span>Keleya</span>
    </Link>
  );
}

export function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Brand />
      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Navigation principale">
        {links.map(([label, href]) => (
          <a key={href} className={current === href ? "is-active" : ""} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/contact">Démarrer un projet <ArrowUpRight /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <span className="header-signal" />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow light">Votre prochain avantage commence ici</p>
        <h2>Bâtissons<br /><em>votre élan.</em></h2>
        <a className="circle-link" href="/contact" aria-label="Lancer un projet"><ArrowUpRight /></a>
      </div>
      <div className="footer-meta">
        <Brand />
        <div><small>ÉCRIVEZ-NOUS</small><a href="mailto:hello@keleya.agency">hello@keleya.agency</a></div>
        <div><small>RETROUVEZ-NOUS</small><a href="#">LinkedIn</a><a href="#">Instagram</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Keleya. Tous droits réservés.</span><span>Yaoundé, Cameroun — Pour l’Afrique et le monde.</span></div>
    </footer>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function PageShell({ current, children }: { current: string; children: React.ReactNode }) {
  return <><a className="skip-link" href="#contenu">Aller au contenu</a><Header current={current} /><RevealObserver />{children}<Footer /></>;
}

export function PageHero({ index, kicker, title, accent, copy }: { index: string; kicker: string; title: string; accent: string; copy: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" />
      <div className="page-hero-top"><span>{index}</span><span>{kicker}</span></div>
      <h1><span>{title}</span><em>{accent}</em></h1>
      <p>{copy}</p>
      <div className="scroll-cue"><span>Défiler</span><i /></div>
    </section>
  );
}
