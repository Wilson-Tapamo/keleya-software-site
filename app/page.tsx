"use client";

import { ArrowDown, ArrowUpRight, Blocks, ChartNoAxesCombined, Check, Layers3, Smartphone, Workflow } from "lucide-react";
import { PageShell } from "./components/SiteShell";

const expertise = [
  { icon: Smartphone, tag: "CONCEVOIR", title: "Applications web & mobiles", text: "Des applications fluides et intuitives qui donnent à vos équipes et à vos clients un outil qu’ils aiment vraiment utiliser." },
  { icon: Workflow, tag: "SIMPLIFIER", title: "Digitalisation des opérations", text: "Nous transformons les tâches lentes, répétitives ou dispersées en parcours simples, connectés et mesurables." },
  { icon: Layers3, tag: "PILOTER", title: "Conception & gestion de projet", text: "De l’idée à la mise en ligne, nous cadrons les priorités, coordonnons les acteurs et gardons le projet orienté résultats." },
  { icon: ChartNoAxesCombined, tag: "ACCÉLÉRER", title: "Data, automatisation & IA", text: "Des tableaux de bord, automatisations et usages pertinents de l’IA pour mieux décider et gagner du temps." },
];

const phases = [
  ["01", "Analyse & Cadrage.", "Comprendre votre organisation, vos objectifs et les blocages quotidiens pour cibler les opportunités qui comptent vraiment."],
  ["02", "Stratégie & Conception.", "Transformer les besoins en un plan clair, priorisé et réaliste, partagé par toutes les parties prenantes."],
  ["03", "Design de l’Expérience.", "Dessiner des parcours simples et élégants, testés tôt pour réduire les incertitudes et favoriser l’adoption."],
  ["04", "Création sur Mesure.", "Construire une solution rapide, fiable et évolutive, avec des points de contrôle réguliers et des résultats visibles."],
  ["05", "Lancement & Impact.", "Déployer sereinement, accompagner vos équipes et mesurer les gains pour améliorer la solution dans la durée."],
];

export default function Home() {
  return (
    <PageShell current="/">
      <main id="contenu">
        <section className="home-hero">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata"><source src="/keleya-hero.mp4" type="video/mp4" /></video>
          <div className="hero-overlay" /><div className="hero-grid" />
          <div className="home-hero-content">
            <p className="eyebrow light hero-in one"><i /> Digitalisation opérationnelle · Cameroun</p>
            <h1><span className="hero-in two">Accélérez votre</span><em className="hero-in three">efficacité</em><span className="hero-in four">avec élégance.</span></h1>
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
            {expertise.map((item, i) => { const Icon = item.icon; return <article className="expertise-card" data-reveal key={item.title}><div className="card-top"><span>0{i + 1}</span><Icon /></div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="card-arrow" /></article>; })}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="process-title" data-reveal><p className="eyebrow light">De la clarté à l’impact</p><h2>Une progression<br />sans zone <em>floue.</em></h2><p>Chaque phase réduit le risque et rapproche votre organisation d’un résultat concret.</p></div>
          <div className="phase-list">
            {phases.map(([number, title, text]) => <article className="phase" data-reveal key={number}><div className="phase-marker"><span>{number}</span></div><div><small>PHASE {number}</small><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </section>

        <section className="precision-section light-section">
          <div className="precision-mark" data-reveal><img src="/keleya-mark-black.png" alt="" /><span>+ SYS_GEOMETRY / 01</span></div>
          <div className="precision-copy" data-reveal><p className="eyebrow">Notre signature</p><h2>Précision<br /><em>& Vision</em></h2><p>La précision transforme une idée en système fiable. La vision lui donne une direction. Chez Keleya, les deux avancent ensemble.</p><ul><li><Check /> Des décisions guidées par l’usage</li><li><Check /> Une qualité perceptible, du fond à la forme</li><li><Check /> Des solutions pensées pour durer</li></ul></div>
        </section>

        <section className="cta-band"><p className="eyebrow light">Une idée, un blocage, une ambition ?</p><h2 data-reveal>Faisons-en votre<br /><em>prochain avantage.</em></h2><a className="button white" href="/contact">Démarrer la conversation <ArrowUpRight /></a></section>
      </main>
    </PageShell>
  );
}
