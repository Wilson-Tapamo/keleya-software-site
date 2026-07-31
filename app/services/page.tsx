import type { Metadata } from "next";
import { ArrowUpRight, BarChart3, Blocks, Bot, Check, CloudCog, LayoutTemplate, Smartphone, Store, Workflow } from "lucide-react";
import { PageHero, PageShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "Services", description: "Applications, digitalisation des opérations, design produit, automatisation et accompagnement digital par Keleya." };

const services = [
  { icon: Smartphone, signal: "CRÉATION", title: "Applications web & mobiles", text: "Portails clients, applications métier et produits numériques rapides, fiables et conçus autour des vrais usages.", deliverables: ["Applications métier", "Produits web & mobile", "Portails clients"] },
  { icon: Workflow, signal: "OPÉRATIONS", title: "Digitalisation des processus", text: "Nous connectons les étapes, les équipes et les données pour supprimer les lenteurs et rendre votre activité plus fluide.", deliverables: ["Audit des processus", "Automatisations", "Outils internes"] },
  { icon: LayoutTemplate, signal: "EXPÉRIENCE", title: "Design UI/UX & prototypage", text: "Des interfaces élégantes, accessibles et intuitives, validées avec vos utilisateurs avant d’investir dans la réalisation.", deliverables: ["Parcours utilisateur", "Prototypes", "Systèmes de design"] },
  { icon: Blocks, signal: "PILOTAGE", title: "Conception & gestion de projet", text: "Nous transformons une ambition en feuille de route et pilotons chaque étape pour maintenir les délais, la qualité et la valeur.", deliverables: ["Cadrage", "Feuille de route", "Direction de projet"] },
  { icon: Bot, signal: "INTELLIGENCE", title: "Data, automatisation & IA", text: "Des usages pragmatiques de la donnée et de l’intelligence artificielle qui accélèrent les décisions et les tâches répétitives.", deliverables: ["Tableaux de bord", "Assistants IA", "Flux automatisés"] },
  { icon: Store, signal: "CROISSANCE", title: "Commerce & plateformes", text: "Des expériences de vente et de service qui renforcent la confiance, facilitent l’achat et grandissent avec votre activité.", deliverables: ["E-commerce", "Plateformes SaaS", "Paiements & intégrations"] },
];

const steps = [
  ["01", "On vous écoute", "Nous clarifions ce qui fonctionne, ce qui bloque et ce que le projet doit réellement changer."],
  ["02", "On trace le cap", "Nous transformons vos priorités en plan d’action simple, réaliste et partagé."],
  ["03", "On donne forme", "Vous voyez et testez l’expérience avant la construction finale. Les ajustements se font tôt."],
  ["04", "On construit ensemble", "Nous avançons par étapes visibles, avec des démonstrations régulières et un langage clair."],
  ["05", "On lance et on améliore", "Nous préparons vos équipes, suivons les résultats et faisons évoluer ce qui doit l’être."],
];

export default function ServicesPage() {
  return <PageShell current="/services"><main id="contenu">
    <PageHero index="02" kicker="Nos services" title="Le digital qui simplifie." accent="L’impact qui se mesure." copy="Des solutions conçues pour vos réalités, adoptées par vos équipes et capables d’accompagner votre croissance." />
    <section className="services-list light-section">
      <div className="section-label" data-reveal><span>Expertises / 06</span><i /></div>
      <div className="services-heading" data-reveal><p className="eyebrow">Une expertise complète</p><h2>Votre ambition,<br /><em>notre terrain de jeu.</em></h2></div>
      <div className="service-cards">
        {services.map((service, i) => { const Icon = service.icon; return <article className="service-card" data-reveal key={service.title}><div className="service-number">0{i + 1}</div><div className="service-icon"><Icon /></div><div className="service-content"><small>{service.signal}</small><h3>{service.title}</h3><p>{service.text}</p><ul>{service.deliverables.map(x => <li key={x}><Check />{x}</li>)}</ul></div><ArrowUpRight className="service-arrow" /></article>; })}
      </div>
    </section>
    <section className="outcomes dark-section">
      <div className="section-label light" data-reveal><span>Ce que cela change</span><i /></div>
      <h2 data-reveal>Moins de friction.<br />Plus de <em>mouvement.</em></h2>
      <div className="outcome-grid"><article data-reveal><Workflow /><h3>Des opérations fluides</h3><p>Moins de doubles saisies, d’attente et d’informations perdues entre les équipes.</p></article><article data-reveal><BarChart3 /><h3>Des décisions plus claires</h3><p>La bonne information devient lisible et disponible au moment où vous en avez besoin.</p></article><article data-reveal><CloudCog /><h3>Une base qui évolue</h3><p>Votre solution accompagne la croissance sans vous forcer à tout recommencer.</p></article></div>
    </section>
    <section className="plain-process">
      <div className="plain-process-intro" data-reveal><p className="eyebrow light">Notre manière de travailler</p><h2>Un parcours clair,<br />du premier échange<br /><em>au premier impact.</em></h2><p>Pas besoin de parler technique. Nous vous guidons, vous montrez ce qui avance et gardons chaque décision compréhensible.</p></div>
      <div className="plain-steps">{steps.map(([n,t,d]) => <article data-reveal key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
    </section>
    <section className="cta-band"><p className="eyebrow light">Votre besoin ne rentre pas dans une case ?</p><h2 data-reveal>Parlons du résultat<br /><em>que vous visez.</em></h2><a className="button white" href="/contact">Étudier mon projet <ArrowUpRight /></a></section>
  </main></PageShell>;
}
