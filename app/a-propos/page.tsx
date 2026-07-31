import type { Metadata } from "next";
import { ArrowUpRight, Compass, Feather, Gauge, Globe2, Sparkles } from "lucide-react";
import { PageHero, PageShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "À propos", description: "La vision, la mission et les valeurs de Keleya : efficacité, élégance et excellence." };

export default function AboutPage() {
  return <PageShell current="/a-propos"><main id="contenu">
    <PageHero index="03" kicker="À propos de Keleya" title="L’ambition africaine." accent="L’exigence sans frontières." copy="Nous créons des systèmes numériques capables d’améliorer le quotidien des organisations et de porter leurs ambitions plus loin." />
    <section className="about-manifesto light-section">
      <div className="section-label" data-reveal><span>Notre ADN & vision</span><i /></div>
      <h2 data-reveal>Accélérer votre efficacité<br /><em>avec élégance.</em></h2>
      <div className="about-origin"><div className="origin-mark" data-reveal><img src="/keleya-mark-red.png" alt="" /><span>KELEYA / 2026</span></div><div className="origin-copy" data-reveal><p className="eyebrow">Pourquoi nous existons</p><p className="lead">Nous sommes convaincus que la technologie doit rendre le travail plus simple, les décisions plus justes et les organisations plus libres d’avancer.</p><p>Keleya accompagne les entreprises et institutions qui veulent transformer leurs opérations, sans sacrifier l’humain, l’élégance ni l’ambition. Nous concevons au Cameroun des solutions pensées pour l’Afrique et prêtes pour le monde.</p></div></div>
    </section>
    <section className="beliefs dark-section">
      <div className="beliefs-title" data-reveal><p className="eyebrow light">Ce que nous croyons</p><h2>La technologie est un outil.<br /><em>Le progrès est l’objectif.</em></h2></div>
      <div className="belief-grid">
        <article data-reveal><Compass /><span>01 / LA MISSION</span><h3>Libérer le potentiel</h3><p>Transformer les systèmes de travail pour rendre chaque équipe plus capable, plus rapide et plus sereine.</p></article>
        <article data-reveal><Globe2 /><span>02 / LA RESPONSABILITÉ</span><h3>Faire grandir le digital africain</h3><p>Créer des solutions ancrées dans nos réalités, inclusives, ambitieuses et suffisamment solides pour devenir des références.</p></article>
        <article data-reveal><Sparkles /><span>03 / LA PROMESSE</span><h3>Rendre le complexe simple</h3><p>Écouter avant de construire, clarifier avant d’accélérer, et toujours livrer une expérience évidente.</p></article>
      </div>
    </section>
    <section className="values-section light-section">
      <div className="section-label" data-reveal><span>Nos valeurs / 03</span><i /></div>
      <div className="values-intro" data-reveal><p className="eyebrow">Notre boussole</p><h2>Trois exigences.<br /><em>Une seule signature.</em></h2></div>
      <div className="values-list">
        <article data-reveal><span>01</span><Gauge /><h3>Efficacité</h3><p>Chaque projet doit produire un progrès concret : du temps gagné, une expérience améliorée, une décision facilitée.</p></article>
        <article data-reveal><span>02</span><Feather /><h3>Élégance</h3><p>Nous retirons le bruit, soignons les détails et créons des solutions dont la simplicité inspire confiance.</p></article>
        <article data-reveal><span>03</span><Sparkles /><h3>Excellence</h3><p>Nous cherchons la justesse à chaque étape et considérons la qualité comme une habitude, jamais comme une option.</p></article>
      </div>
    </section>
    <section className="africa-statement"><div className="africa-glow" /><p className="eyebrow light">Notre engagement</p><h2 data-reveal>La digitalisation de l’Afrique est une opportunité immense.<br /><em>Et une responsabilité qui nous oblige.</em></h2><a className="button red" href="/contact">Construire avec nous <ArrowUpRight /></a></section>
  </main></PageShell>;
}
