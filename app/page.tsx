"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Bot,
  ChartNoAxesCombined,
  Check,
  Code2,
  Database,
  Gauge,
  Layers3,
  Route,
  Settings2,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PageShell } from "./components/SiteShell";

const expertise = [
  { icon: Smartphone, scene: [Smartphone, Code2, Blocks], tag: "CONCEVOIR", title: "Applications web & mobiles", text: "Des applications fluides et intuitives qui donnent à vos équipes et à vos clients un outil qu’ils aiment vraiment utiliser." },
  { icon: Workflow, scene: [Workflow, Settings2, Gauge], tag: "SIMPLIFIER", title: "Digitalisation des opérations", text: "Nous transformons les tâches lentes, répétitives ou dispersées en parcours simples, connectés et mesurables." },
  { icon: Layers3, scene: [Layers3, Route, Check], tag: "PILOTER", title: "Conception & gestion de projet", text: "De l’idée à la mise en ligne, nous cadrons les priorités, coordonnons les acteurs et gardons le projet orienté résultats." },
  { icon: ChartNoAxesCombined, scene: [ChartNoAxesCombined, Database, Bot], tag: "ACCÉLÉRER", title: "Data, automatisation & IA", text: "Des tableaux de bord, automatisations et usages pertinents de l’IA pour mieux décider et gagner du temps." },
];

const phases = [
  ["01", "Analyse & Cadrage.", "Comprendre votre organisation, vos objectifs et les blocages quotidiens pour cibler les opportunités qui comptent vraiment."],
  ["02", "Stratégie & Conception.", "Transformer les besoins en un plan clair, priorisé et réaliste, partagé par toutes les parties prenantes."],
  ["03", "Design de l’Expérience.", "Dessiner des parcours simples et élégants, testés tôt pour réduire les incertitudes et favoriser l’adoption."],
  ["04", "Création sur Mesure.", "Construire une solution rapide, fiable et évolutive, avec des points de contrôle réguliers et des résultats visibles."],
  ["05", "Lancement & Impact.", "Déployer sereinement, accompagner vos équipes et mesurer les gains pour améliorer la solution dans la durée."],
];

function SplashScreen() {
  return (
    <div className="splash" role="status" aria-label="Chargement de l’expérience Keleya">
      <div className="splash__panel splash__panel--one" aria-hidden="true" />
      <div className="splash__panel splash__panel--two" aria-hidden="true" />
      <div className="splash__top">
        <span className="splash__brand"><Image src="/keleya-mark-red.png" alt="" width="84" height="84" priority />Keleya</span>
        <span>INITIALISATION / SYSTÈME</span>
      </div>
      <div className="splash__center" aria-hidden="true">
        <span>K</span>
        <div className="splash__word">
          {"KELEYA".split("").map((letter, index) => (
            <i key={`${letter}-${index}`} style={{ "--letter": index } as React.CSSProperties}>{letter}</i>
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

function ProcessExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(0.999, Math.max(0, -rect.top / distance));
      const nextPhase = Math.min(phases.length - 1, Math.floor(progress * phases.length));
      section.style.setProperty("--process-progress", `${progress * 100}%`);
      setActivePhase((current) => current === nextPhase ? current : nextPhase);
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={`process-experience process-experience--${activePhase + 1}`} id="process" ref={sectionRef}>
      <div className="process-stage">
        <div className="process-grid" aria-hidden="true" />
        <div className="process-rail" aria-hidden="true"><i /></div>
        <div className="process-stage__top">
          <span>03 / Notre méthode</span>
          <p>Une progression <em>sans zone floue.</em></p>
        </div>
        <div className="process-phases" aria-live="polite">
          {phases.map(([number, title, text], index) => (
            <article
              className={`process-phase${index === activePhase ? " is-active" : ""}${index < activePhase ? " is-past" : ""}`}
              aria-hidden={index !== activePhase}
              key={number}
            >
              <small>Phase {Number(number)}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="process-stage__bottom">
          <span>{String(activePhase + 1).padStart(2, "0")} / {String(phases.length).padStart(2, "0")}</span>
          <div>{phases.map(([, title], index) => <i className={index <= activePhase ? "is-active" : ""} key={title} />)}</div>
          <span>Défiler pour avancer</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShowSplash(false), reducedMotion ? 350 : 3300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>{showSplash && <SplashScreen />}<PageShell current="/">
      <main id="contenu">
        <section className="home-hero">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata"><source src="/keleya-hero.mp4" type="video/mp4" /></video>
          <div className="hero-overlay" /><div className="hero-grid" />
          <div className="home-hero-content">
            <p className="eyebrow light hero-in one"><i /> Digitalisation opérationnelle · Cameroun</p>
            <h1><span className="hero-in two">Accélérez votre</span><em className="hero-in three">performance</em><span className="hero-in four">avec élégance.</span></h1>
            <div className="hero-lower hero-in five">
              <p>Nous concevons les systèmes digitaux qui libèrent le potentiel de vos équipes et donnent à votre organisation une longueur d’avance.</p>
              <div><a className="button red" href="/contact">Parler de votre projet <ArrowUpRight /></a><a className="text-link light" href="#vision">Découvrir Keleya <ArrowDown /></a></div>
            </div>
          </div>
          <div className="hero-stamp"><span>KELEYA</span><small>DIGITAL<br />OPERATIONS</small></div>
        </section>

        <section className="vision-section light-section" id="vision">
          <div className="section-label" data-reveal><span>01 / Notre vision</span><i /></div>
          <div className="vision-layout">
            <h2 data-reveal>Libérer le potentiel des organisations par une digitalisation <em>opérationnelle</em> de leurs systèmes.</h2>
            <div className="vision-aside" data-reveal><p>La digitalisation de l’Afrique n’est pas seulement une grande opportunité. C’est également une grande responsabilité.</p><p>Nous créons des outils ancrés dans les réalités du terrain, capables de rayonner partout.</p></div>
          </div>
          <div className="value-strip" data-reveal><div><span>01</span><strong>Efficacité</strong><small>Créer un progrès visible.</small></div><div><span>02</span><strong>Élégance</strong><small>Rendre le complexe évident.</small></div><div><span>03</span><strong>Excellence</strong><small>Soigner chaque détail utile.</small></div></div>
        </section>

        <section className="expertise-section dark-section" id="expertise">
          <div className="section-label light" data-reveal><span>02 / Domaines d’expertise</span><i /></div>
          <div className="section-intro" data-reveal><p className="eyebrow light">Ce que nous faisons</p><h2>Du besoin métier<br />à l’outil <em>qui change tout.</em></h2></div>
          <div className="expertise-grid">
            {expertise.map((item, i) => { const Icon = item.icon; return <article className="expertise-card" data-reveal key={item.title}>
              <div className="expertise-card__glow" aria-hidden="true" />
              <div className="expertise-visual" aria-hidden="true">
                <span className="expertise-visual__orbit" />
                {item.scene.map((SceneIcon, iconIndex) => <i className={`expertise-visual__icon icon-${iconIndex + 1}`} key={iconIndex}><SceneIcon /></i>)}
                <Sparkles className="expertise-visual__spark" />
              </div>
              <div className="card-top"><span>0{i + 1}</span><Icon /></div>
              <div className="expertise-card__copy"><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p></div>
              <ArrowUpRight className="card-arrow" />
            </article>; })}
          </div>
        </section>

        <ProcessExperience />

        <section className="precision-section light-section">
          <div className="precision-mark" data-reveal><div className="precision-logo"><Image src="/keleya-mark-black.png" alt="" width="1600" height="1600" /><strong>Keleya</strong></div><span>+ SYS_GEOMETRY / 01</span></div>
          <div className="precision-copy" data-reveal><p className="eyebrow">Notre signature</p><h2>Précision<br /><em>& Vision</em></h2><p>La précision transforme une idée en système fiable. La vision lui donne une direction. Chez Keleya, les deux avancent ensemble.</p><ul><li><Check /> Des décisions guidées par l’usage</li><li><Check /> Une qualité perceptible, du fond à la forme</li><li><Check /> Des solutions pensées pour durer</li></ul></div>
        </section>

        <section className="cta-band"><p className="eyebrow light">Une idée, un blocage, une ambition ?</p><h2 data-reveal>Faisons-en votre<br /><em>prochain avantage.</em></h2><a className="button white" href="/contact">Démarrer la conversation <ArrowUpRight /></a></section>
      </main>
    </PageShell></>
  );
}
