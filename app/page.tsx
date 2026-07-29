"use client";

import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers3,
  LayoutDashboard,
  Monitor,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    signal: "OPTIMISER",
    title: "Logiciels métier",
    description:
      "Des outils sur mesure qui simplifient les opérations, connectent les équipes et transforment les processus critiques en avantage concurrentiel.",
    tags: ["Automatisation", "Opérations", "Intégrations"],
    icon: Gauge,
  },
  {
    signal: "LANCER",
    title: "Produits numériques",
    description:
      "De l’idée au marché, nous concevons des expériences web et mobile désirables, utiles et pensées pour grandir.",
    tags: ["Web & mobile", "Expérience produit", "Go-to-market"],
    icon: Layers3,
  },
  {
    signal: "ACCÉLÉRER",
    title: "Plateformes évolutives",
    description:
      "Des fondations cloud robustes, sécurisées et observables pour soutenir votre croissance sans ralentir votre ambition.",
    tags: ["Cloud", "Data", "Performance"],
    icon: Cloud,
  },
];

const process = [
  {
    number: "01",
    title: "Aligner",
    text: "Comprendre l’enjeu, les utilisateurs et la valeur à créer avant d’écrire la première ligne.",
    output: "Vision produit",
  },
  {
    number: "02",
    title: "Architecturer",
    text: "Transformer l’ambition en une trajectoire claire, une expérience cohérente et une base technique durable.",
    output: "Plan d’exécution",
  },
  {
    number: "03",
    title: "Construire",
    text: "Livrer par cycles courts, tester dans le réel et maintenir un niveau d’exigence constant.",
    output: "Produit fonctionnel",
  },
  {
    number: "04",
    title: "Élever",
    text: "Mesurer, optimiser et faire évoluer le produit pour qu’il reste performant à chaque nouvelle échelle.",
    output: "Impact durable",
  },
];

const principles = [
  {
    title: "Excellence par défaut",
    text: "La qualité n’est pas une étape finale. Elle guide chaque décision, du premier atelier à la mise en production.",
  },
  {
    title: "Clarté radicale",
    text: "Des choix expliqués, une progression visible et une communication directe tout au long du projet.",
  },
  {
    title: "Portée mondiale",
    text: "Une équipe ancrée au Cameroun, des produits conçus pour les usages, les marchés et les ambitions du monde.",
  },
];

const capabilityCards = [
  {
    icon: Workflow,
    title: "Automatisation",
    text: "Des flux plus courts, des équipes plus rapides.",
    signal: "FLOW",
  },
  {
    icon: LayoutDashboard,
    title: "Interfaces métier",
    text: "Toute la complexité rendue immédiatement lisible.",
    signal: "UX/UI",
  },
  {
    icon: Database,
    title: "Data & intelligence",
    text: "La bonne information, au bon moment, pour agir.",
    signal: "DATA",
  },
  {
    icon: ShieldCheck,
    title: "Cloud fiable",
    text: "Une architecture prête à grandir en toute confiance.",
    signal: "SCALE",
  },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand${inverse ? " brand--inverse" : ""}`} href="#accueil" aria-label="Keleya — Accueil">
      <span className="brand__mark" aria-hidden="true">
        <img src="/keleya-mark-red.png" alt="" width="1600" height="1600" />
      </span>
      <span className="brand__word">KELEYA</span>
    </a>
  );
}

function SplashScreen() {
  return (
    <div className="splash" role="status" aria-label="Chargement de l’expérience Keleya">
      <div className="splash__panel splash__panel--one" aria-hidden="true" />
      <div className="splash__panel splash__panel--two" aria-hidden="true" />
      <div className="splash__top">
        <Brand inverse />
        <span>INITIALISATION / SYSTÈME</span>
      </div>
      <div className="splash__center" aria-hidden="true">
        <span>K</span>
        <div className="splash__word">
          {"KELEYA".split("").map((letter, index) => (
            <i key={`${letter}-${index}`} style={{ "--letter": index } as React.CSSProperties}>
              {letter}
            </i>
          ))}
        </div>
      </div>
      <div className="splash__bottom">
        <span>ENGINEERING / EXCELLENCE</span>
        <div className="splash__progress"><i /></div>
        <span className="splash__count"><i>000</i><i>100</i></span>
      </div>
    </div>
  );
}

function DeviceLab() {
  const stageRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stage.style.setProperty("--stage-rx", `${y * -5}deg`);
    stage.style.setProperty("--stage-ry", `${x * 7}deg`);
    stage.style.setProperty("--stage-x", `${x * 12}px`);
    stage.style.setProperty("--stage-y", `${y * 12}px`);
  };

  const resetStage = () => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--stage-rx", "0deg");
    stage.style.setProperty("--stage-ry", "0deg");
    stage.style.setProperty("--stage-x", "0px");
    stage.style.setProperty("--stage-y", "0px");
  };

  return (
    <div
      className="device-stage"
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetStage}
      role="img"
      aria-label="Démonstration animée d’un environnement logiciel Keleya"
    >
      <div className="device-stage__aura" aria-hidden="true" />
      <div className="tech-orbit tech-orbit--cloud" aria-hidden="true"><Cloud /></div>
      <div className="tech-orbit tech-orbit--code" aria-hidden="true"><Code2 /></div>
      <div className="tech-orbit tech-orbit--spark" aria-hidden="true"><Sparkles /></div>

      <div className="desktop-device">
        <div className="desktop-device__bezel">
          <span className="desktop-device__camera" />
          <div className="product-ui">
            <aside className="product-ui__sidebar">
              <span className="product-ui__logo"><Zap /></span>
              <span className="is-active"><LayoutDashboard /></span>
              <span><Database /></span>
              <span><Workflow /></span>
              <span><ShieldCheck /></span>
              <span className="product-ui__avatar">KB</span>
            </aside>
            <div className="product-ui__main">
              <div className="product-ui__bar">
                <div>
                  <small>WELCOME BACK</small>
                  <strong>Performance center</strong>
                </div>
                <span className="product-ui__action">
                  <Sparkles /> Generate report
                </span>
              </div>
              <div className="metric-grid">
                <article>
                  <span>Revenue flow</span>
                  <strong>24.8M</strong>
                  <small>↑ 18.4%</small>
                </article>
                <article>
                  <span>Active systems</span>
                  <strong>1,284</strong>
                  <small>Live</small>
                </article>
                <article>
                  <span>Efficiency</span>
                  <strong>94.2%</strong>
                  <small>Optimal</small>
                </article>
              </div>
              <div className="dashboard-grid">
                <article className="chart-card">
                  <div className="chart-card__head">
                    <span>Growth trajectory</span>
                    <small>12 MONTHS</small>
                  </div>
                  <div className="bar-chart" aria-hidden="true">
                    {[38, 52, 46, 68, 58, 77, 66, 84, 72, 91, 82, 100].map((height, index) => (
                      <i key={index} style={{ "--bar": `${height}%`, "--delay": index } as React.CSSProperties} />
                    ))}
                  </div>
                  <div className="chart-card__labels"><span>JAN</span><span>JUN</span><span>DEC</span></div>
                </article>
                <article className="pulse-card">
                  <div className="pulse-card__head"><span>System pulse</span><i /></div>
                  <div className="pulse-score">
                    <strong>98</strong><span>/100</span>
                  </div>
                  <div className="pulse-ring" aria-hidden="true"><i /></div>
                  <small>All services operational</small>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-device__neck" />
        <div className="desktop-device__base" />
      </div>

      <div className="code-float glass-panel">
        <div className="window-top">
          <div><i /><i /><i /></div>
          <span><Terminal /> engine.ts</span>
          <small>LIVE</small>
        </div>
        <pre aria-label="Extrait de code animé"><code>
          <span><b>const</b> ambition = <em>await</em> keleya.define();</span>
          <span><b>const</b> product = ambition.toProduct(&#123;</span>
          <span>  standard: <strong>&quot;world-class&quot;</strong>,</span>
          <span>  performance: <strong>&quot;built-in&quot;</strong>,</span>
          <span>  impact: <strong>&quot;measurable&quot;</strong></span>
          <span>&#125;);</span>
          <span><em>export default</em> product.scale();</span>
        </code></pre>
        <div className="code-float__cursor" aria-hidden="true" />
      </div>

      <div className="site-float glass-panel">
        <div className="window-top">
          <div><i /><i /><i /></div>
          <span>keleya / launch</span>
          <small><MousePointer2 /></small>
        </div>
        <div className="site-preview">
          <span className="site-preview__label">DIGITAL PRODUCT / 2026</span>
          <strong>Move your<br />business <em>forward.</em></strong>
          <i className="site-preview__sphere" />
          <span className="site-preview__cta">EXPLORE <ArrowUpRight /></span>
        </div>
      </div>

      <div className="phone-device">
        <div className="phone-device__speaker" />
        <div className="phone-device__screen">
          <div className="mobile-top"><span>9:41</span><i /></div>
          <span className="mobile-kicker">DAILY OVERVIEW</span>
          <strong>Hello, Keleya.</strong>
          <div className="mobile-balance">
            <small>Business pulse</small>
            <b>84.6%</b>
            <span>↑ 12.8 today</span>
          </div>
          <div className="mobile-actions">
            <i><Gauge /></i><i><Database /></i><i><Zap /></i>
          </div>
          <div className="mobile-list"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const splashTimer = window.setTimeout(() => setShowSplash(false), reducedMotion ? 350 : 3300);

    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    let pointerFrame = 0;
    const handlePointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.clearTimeout(splashTimer);
      window.cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className="ambient-cursor" aria-hidden="true" />
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`} aria-label="Navigation principale">
        <Brand inverse />
        <nav className="site-nav" aria-label="Sections">
          <a className={activeSection === "lab" ? "is-active" : ""} href="#lab">Le lab</a>
          <a className={activeSection === "expertise" ? "is-active" : ""} href="#expertise">Expertise</a>
          <a className={activeSection === "approche" ? "is-active" : ""} href="#approche">Approche</a>
        </nav>
        <a className="header-cta" href="#contact">
          Démarrer un projet <span aria-hidden="true">↗</span>
        </a>
        <span className="site-header__progress" aria-hidden="true" />
      </header>

      <main id="contenu">
        <section className="hero" id="accueil" aria-labelledby="hero-title">
          <div className="hero__media" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/keleya-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero__veil" />
          <div className="hero__grid" aria-hidden="true" />

          <div className="hero__content">
            <div className="hero__eyebrow hero-animate hero-animate--one">
              <span className="status-dot" />
              <span>Studio d’ingénierie logicielle</span>
              <span className="hero__location">Cameroun — Worldwide</span>
            </div>

            <h1 className="hero__title" id="hero-title">
              <span className="hero-animate hero-animate--two">Le logiciel</span>
              <span className="hero__title-outline hero-animate hero-animate--three">comme avantage</span>
              <span className="hero__title-accent hero-animate hero-animate--four">décisif.</span>
            </h1>

            <div className="hero__footer hero-animate hero-animate--five">
              <p>
                Keleya conçoit des produits numériques et des systèmes métier qui
                donnent aux entreprises le pouvoir d’aller plus vite, plus loin.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  Lancer un projet <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#expertise">
                  Découvrir notre expertise <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-console glass-panel hero-animate hero-animate--five" aria-label="État du studio">
              <div className="hero-console__top">
                <span><Monitor /> Keleya operating system</span>
                <i>LIVE</i>
              </div>
              <div className="hero-console__grid">
                <span><small>ORIGIN</small><strong>CMR</strong></span>
                <span><small>STANDARD</small><strong>GLOBAL</strong></span>
                <span><small>FOCUS</small><strong>IMPACT</strong></span>
              </div>
              <div className="hero-console__signal" aria-hidden="true">
                {[32, 54, 38, 71, 48, 86, 58, 92, 64, 100].map((height, index) => (
                  <i key={index} style={{ "--signal": `${height}%`, "--delay": index } as React.CSSProperties} />
                ))}
              </div>
            </div>
          </div>

          <div className="hero__index" aria-hidden="true">
            K / 001
          </div>
          <div className="hero__scroll" aria-hidden="true">
            <span>Scroll</span>
            <i />
          </div>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-title">
          <div className="section-kicker reveal">
            <span>Pourquoi Keleya</span>
            <span className="section-kicker__line" />
            <span>Built for momentum</span>
          </div>
          <div className="manifesto__layout">
            <h2 className="manifesto__statement reveal" id="manifesto-title">
              Nous transformons les idées ambitieuses en logiciels{" "}
              <em>fiables, utiles</em> et prêts à changer d’échelle.
            </h2>
            <div className="manifesto__aside reveal">
              <span className="mini-label">NOTRE CONVICTION</span>
              <p>
                Un bon logiciel ne se contente pas de fonctionner. Il réduit la
                complexité, amplifie les équipes et ouvre de nouvelles possibilités.
              </p>
              <a className="text-link text-link--dark" href="#approche">
                Voir comment nous travaillons <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </section>

        <section className="digital-lab section-pad" id="lab" aria-labelledby="lab-title">
          <div className="lab-heading reveal">
            <div>
              <span className="mini-label mini-label--light">KELEYA PRODUCT LAB</span>
              <h2 id="lab-title">Des systèmes que l’on veut <em>utiliser.</em></h2>
            </div>
            <div className="lab-heading__copy">
              <span className="lab-heading__icon"><Monitor /></span>
              <p>
                Chaque interface donne une forme claire à la complexité : un code
                robuste derrière, une expérience évidente devant.
              </p>
              <span className="live-pill"><i /> Live product environment</span>
            </div>
          </div>

          <DeviceLab />

          <div className="capability-grid">
            {capabilityCards.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <article className="capability-card glass-panel reveal" key={capability.title}>
                  <div className="capability-card__top">
                    <span className="capability-card__icon"><Icon /></span>
                    <small>{capability.signal} / 0{index + 1}</small>
                  </div>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.text}</p>
                  </div>
                  <ArrowUpRight className="capability-card__arrow" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="expertise section-pad" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading reveal">
            <div>
              <span className="mini-label mini-label--light">CE QUE NOUS CONSTRUISONS</span>
              <h2 id="expertise-title">De l’idée au système.</h2>
            </div>
            <p>
              Stratégie, design et ingénierie réunis pour créer des solutions
              qui produisent un impact réel.
            </p>
          </div>

          <div className="services">
            {services.map((service) => {
              const Icon = service.icon;
              return (
              <article className="service-row reveal" key={service.title}>
                <span className="service-row__signal"><Icon /> {service.signal}</span>
                <div className="service-row__main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul className="service-row__tags" aria-label={`Domaines : ${service.tags.join(", ")}`}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="service-row__arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            )})}
          </div>
        </section>

        <div className="capability-rail" aria-label="Compétences">
          <div className="capability-rail__track">
            <span>Stratégie</span><i /> <span>Design produit</span><i />
            <span>Ingénierie</span><i /> <span>Cloud</span><i />
            <span>Data</span><i /> <span>IA appliquée</span><i />
            <span aria-hidden="true">Stratégie</span><i aria-hidden="true" />
            <span aria-hidden="true">Design produit</span><i aria-hidden="true" />
            <span aria-hidden="true">Ingénierie</span><i aria-hidden="true" />
          </div>
        </div>

        <section className="approach section-pad" id="approche" aria-labelledby="approach-title">
          <div className="approach__intro reveal">
            <span className="mini-label mini-label--light">NOTRE APPROCHE</span>
            <h2 id="approach-title">
              La vitesse,
              <br />
              <em>sans les raccourcis.</em>
            </h2>
            <p>
              Une méthode exigeante qui transforme les incertitudes en décisions,
              puis les décisions en produit.
            </p>
          </div>

          <ol className="process-list">
            {process.map((step) => (
              <li className="process-step reveal" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="process-step__output">{step.output}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="standards section-pad" id="exigence" aria-labelledby="standards-title">
          <div className="standards__top">
            <div className="standards__mark reveal" aria-hidden="true">
              <img src="/keleya-mark-red.png" alt="" width="1600" height="1600" />
            </div>
            <div className="standards__headline reveal">
              <span className="mini-label">LE STANDARD KELEYA</span>
              <h2 id="standards-title">
                Conçu pour durer.
                <br />
                <em>Mesuré pour performer.</em>
              </h2>
            </div>
          </div>

          <div className="principles">
            {principles.map((principle) => (
              <article className="principle reveal" key={principle.title}>
                <span className="principle__cross" aria-hidden="true">+</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__orbit" aria-hidden="true" />
          <span className="mini-label mini-label--light reveal">UN PROJET EN TÊTE ?</span>
          <h2 className="reveal" id="contact-title">
            Construisons votre
            <br />
            prochain avantage.
          </h2>
          <div className="contact__bottom reveal">
            <p>
              Racontez-nous le défi. Nous vous aiderons à trouver la trajectoire
              la plus claire entre l’ambition et le produit.
            </p>
            <a
              className="contact__button"
              href="mailto:contact@keleya.cm?subject=Nouveau%20projet%20—%20Keleya"
            >
              <span>Parler à Keleya</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Brand inverse />
        <p>Ingénierie logicielle · Cameroun → Monde</p>
        <div className="footer__links">
          <a href="#accueil">Retour en haut ↑</a>
          <a href="mailto:contact@keleya.cm">contact@keleya.cm</a>
        </div>
        <span className="footer__legal">© 2026 Keleya. Tous droits réservés.</span>
      </footer>
    </>
  );
}
