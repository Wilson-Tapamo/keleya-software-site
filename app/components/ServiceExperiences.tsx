"use client";

import {
  Blocks,
  Bot,
  Check,
  Code2,
  Compass,
  Database,
  Gauge,
  Layers3,
  LayoutTemplate,
  PanelsTopLeft,
  Rocket,
  ScanSearch,
  Smartphone,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";

type Service = {
  icon: LucideIcon;
  scene: [LucideIcon, LucideIcon, LucideIcon];
  signal: string;
  title: string;
  text: string;
  deliverables: string[];
};

const services: Service[] = [
  { icon: Smartphone, scene: [Smartphone, Code2, Blocks], signal: "CRÉATION", title: "Applications web & mobiles", text: "Portails clients, applications métier et produits numériques rapides, fiables et conçus autour des vrais usages.", deliverables: ["Applications métier", "Produits web & mobile", "Portails clients"] },
  { icon: Workflow, scene: [Workflow, Gauge, Database], signal: "OPÉRATIONS", title: "Digitalisation des processus", text: "Nous connectons les étapes, les équipes et les données pour supprimer les lenteurs et rendre votre activité plus fluide.", deliverables: ["Audit des processus", "Automatisations", "Outils internes"] },
  { icon: LayoutTemplate, scene: [LayoutTemplate, PanelsTopLeft, Check], signal: "EXPÉRIENCE", title: "Design UI/UX & prototypage", text: "Des interfaces élégantes, accessibles et intuitives, validées avec vos utilisateurs avant d’investir dans la réalisation.", deliverables: ["Parcours utilisateur", "Prototypes", "Systèmes de design"] },
  { icon: Blocks, scene: [Compass, Layers3, Workflow], signal: "PILOTAGE", title: "Conception & gestion de projet", text: "Nous transformons une ambition en feuille de route et pilotons chaque étape pour maintenir les délais, la qualité et la valeur.", deliverables: ["Cadrage", "Feuille de route", "Direction de projet"] },
  { icon: Bot, scene: [Bot, Database, Gauge], signal: "INTELLIGENCE", title: "Data, automatisation & IA", text: "Des usages pragmatiques de la donnée et de l’intelligence artificielle qui accélèrent les décisions et les tâches répétitives.", deliverables: ["Tableaux de bord", "Assistants IA", "Flux automatisés"] },
  { icon: Store, scene: [Store, Rocket, Check], signal: "CROISSANCE", title: "Commerce & plateformes", text: "Des expériences de vente et de service qui renforcent la confiance, facilitent l’achat et grandissent avec votre activité.", deliverables: ["E-commerce", "Plateformes SaaS", "Paiements & intégrations"] },
];

const steps = [
  { number: "01", icon: Compass, title: "On vous écoute", text: "Nous clarifions ce qui fonctionne, ce qui bloque et ce que le projet doit réellement changer.", output: "Vision partagée" },
  { number: "02", icon: PanelsTopLeft, title: "On trace le cap", text: "Nous transformons vos priorités en plan d’action simple, réaliste et partagé.", output: "Feuille de route" },
  { number: "03", icon: LayoutTemplate, title: "On donne forme", text: "Vous voyez et testez l’expérience avant la construction finale. Les ajustements se font tôt.", output: "Prototype validé" },
  { number: "04", icon: Code2, title: "On construit ensemble", text: "Nous avançons par étapes visibles, avec des démonstrations régulières et un langage clair.", output: "Solution éprouvée" },
  { number: "05", icon: ScanSearch, title: "On vérifie tout", text: "Chaque détail fonctionnel, visuel et technique est testé avant la mise en production.", output: "Qualité maîtrisée" },
  { number: "06", icon: Rocket, title: "On lance et on améliore", text: "Nous préparons vos équipes, suivons les résultats et faisons évoluer ce qui doit l’être.", output: "Impact mesuré" },
];

function ServiceVisual({ service }: { service: Service }) {
  return (
    <div className="service-scene" aria-hidden="true">
      <div className="service-scene__grid" />
      <div className="service-scene__window window-main">
        <span className="service-scene__bar"><i /><i /><i /></span>
        <div className="service-scene__metrics"><i /><i /><i /><i /><i /></div>
        <div className="service-scene__chart"><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="service-scene__window window-float"><i /><i /></div>
      <div className="service-scene__orbit">
        {service.scene.map((Icon, index) => <span className={`scene-icon scene-icon--${index + 1}`} key={index}><Icon /></span>)}
      </div>
      <span className="service-scene__pulse" />
    </div>
  );
}

export function ServiceUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const panels = Array.from(container.querySelectorAll<HTMLElement>(".service-universe__panel"));
    let frame = 0;

    const update = () => {
      const viewport = Math.max(1, window.innerHeight);
      panels.forEach((panel) => {
        const top = panel.getBoundingClientRect().top;
        const enter = Math.min(1, Math.max(0, (viewport - top) / viewport));
        panel.style.setProperty("--service-enter", String(enter));
        panel.style.setProperty("--service-y", `${(1 - enter) * 72}px`);
        panel.style.setProperty("--service-scale", String(0.92 + enter * 0.08));
        panel.style.setProperty("--service-alpha", String(0.2 + enter * 0.8));
        panel.style.setProperty("--service-visual-x", `${(1 - enter) * 88}px`);
      });
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
    <section className="service-universe" ref={containerRef} aria-labelledby="service-universe-title">
      <div className="service-universe__intro light-section">
        <div className="section-label" data-reveal><span>Expertises / 06</span><i /></div>
        <div className="services-heading" data-reveal><p className="eyebrow">Une expertise complète</p><h2 id="service-universe-title">Votre ambition,<br /><em>notre terrain de jeu.</em></h2></div>
      </div>
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <article className={`service-universe__panel service-tone-${index + 1}`} key={service.title}>
            <div className="service-universe__noise" aria-hidden="true" />
            <div className="service-universe__content">
              <div className="service-universe__copy">
                <div className="service-universe__meta"><span>0{index + 1} / 06</span><small>{service.signal}</small></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.deliverables.map((item) => <li key={item}><Check />{item}</li>)}</ul>
              </div>
              <div className="service-universe__visual"><ServiceVisual service={service} /></div>
            </div>
            <div className="service-universe__edge" aria-hidden="true"><Icon /><span>KELEYA / EXPERTISE</span></div>
          </article>
        );
      })}
    </section>
  );
}

export function EngineeringProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    let frame = 0;
    let distance = 1;

    const measure = () => {
      distance = Math.max(1, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + distance}px`;
      update();
    };
    const update = () => {
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance));
      section.style.setProperty("--engineering-progress", `${progress * 100}%`);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="engineering-process" ref={sectionRef} aria-labelledby="engineering-process-title">
      <div className="engineering-process__stage">
        <div className="engineering-process__heading">
          <p className="eyebrow light">Notre manière de travailler</p>
          <h2 id="engineering-process-title">Un parcours clair,<br />du premier échange<br /><em>au premier impact.</em></h2>
        </div>
        <div className="engineering-process__line"><i /></div>
        <div className="engineering-process__track" ref={trackRef}>
          <div className="engineering-process__spacer" aria-hidden="true" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="engineering-step" key={step.number}>
                <span className="engineering-step__ghost" aria-hidden="true">{step.number}</span>
                <span className="engineering-step__node" aria-hidden="true" />
                <div className="engineering-step__icon"><Icon /></div>
                <div className="engineering-step__title"><small>{step.number}.</small><h3>{step.title}</h3></div>
                <p>{step.text}</p>
                <span className="engineering-step__output">{step.output}</span>
              </article>
            );
          })}
          <div className="engineering-process__finish"><Rocket /><small>PRÊT À DÉCOLLER</small><strong>Votre prochain avantage.</strong></div>
        </div>
        <div className="engineering-process__progress"><i /></div>
      </div>
    </section>
  );
}
