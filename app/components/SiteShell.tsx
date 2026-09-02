"use client";

import { ArrowUpRight, Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="language-switcher flex items-center gap-2 text-xs uppercase tracking-wider font-medium">
      <Globe size={14} className="opacity-70" />
      <button
        onClick={() => switchLanguage("fr")}
        style={{ fontWeight: locale === "fr" ? "700" : "400", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
      >
        FR
      </button>
      <span style={{ opacity: 0.3 }}>|</span>
      <button
        onClick={() => switchLanguage("en")}
        style={{ fontWeight: locale === "en" ? "700" : "400", background: "none", border: "none", cursor: "pointer", color: "inherit" }}
      >
        EN
      </button>
    </div>
  );
}

export function Brand() {
  return (
    <Link className="brand flex items-center gap-2" href="/" aria-label="Keleya — Accueil">
      <Image src="/keleya-mark-red.png" alt="" width="84" height="84" unoptimized />
      <span>Keleya</span>
    </Link>
  );
}

export function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("SiteShell.nav");
  const cta = useTranslations("SiteShell");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    [t("home"), "/"],
    [t("about"), "/a-propos"],
    [t("services"), "/services"],
    [t("contact"), "/contact"],
  ];

  return (
    <header className={`site-header flex items-center justify-between w-full flex-nowrap ${scrolled ? "is-scrolled" : ""}`}>
      <Brand />

      <nav className={`flex-1 justify-center ${open ? "site-nav is-open" : "site-nav"}`} aria-label="Navigation principale">
        {links.map(([label, href]) => (
          <Link key={href} className={current === href ? "is-active" : ""} href={href as any} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>

      {/* ml-auto pousse tout ce bloc au fond à droite */}
      <div className="flex items-center gap-5 ml-auto">
        <LanguageSwitcher />
        <Link className="header-cta whitespace-nowrap" href="/contact">
          {cta("headerCta")} <ArrowUpRight size={16} />
        </Link>
      </div>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <span className="header-signal" />
    </header>
  );
}

export function Footer() {
  const t = useTranslations("SiteShell");

  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow light">{t("footerLead")}</p>
        <h2 dangerouslySetInnerHTML={{ __html: t.raw("footerTitle") }} />
        <Link className="circle-link" href="/contact" aria-label="Lancer un projet"><ArrowUpRight /></Link>
      </div>
      <div className="footer-meta">
        <Brand />
        <div><small>{t("footerWrite")}</small><a href="mailto:contact@keleya.app">contact@keleya.app</a></div>
        <div><small>{t("footerFind")}</small><a href="#">LinkedIn</a><a href="#">Instagram</a></div>
      </div>
      <div className="footer-bottom"><span>{t("footerRights")}</span><span>{t("footerLocation")}</span></div>
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
  const t = useTranslations("SiteShell");
  return <><a className="skip-link" href="#contenu">{t("skip")}</a><Header current={current} /><RevealObserver />{children}<Footer /></>;
}

export function PageHero({ index, kicker, title, accent, copy }: { index: string; kicker: string; title: string; accent: string; copy: string }) {
  const t = useTranslations("SiteShell");
  return (
    <section className="page-hero">
      <div className="page-hero-grid" />
      <div className="page-hero-top"><span>{index}</span><span>{kicker}</span></div>
      <h1><span>{title}</span><em>{accent}</em></h1>
      <p>{copy}</p>
      <div className="scroll-cue"><span>{t("scrollCue")}</span><i /></div>
    </section>
  );
}