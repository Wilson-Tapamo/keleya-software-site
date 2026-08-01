import type { Metadata } from "next";
import { ArrowUpRight, BarChart3, CloudCog, Workflow } from "lucide-react";
import { PageHero, PageShell } from "../components/SiteShell";
import { EngineeringProcess, ServiceUniverse } from "../components/ServiceExperiences";

export const metadata: Metadata = { title: "Services", description: "Applications, digitalisation des opérations, design produit, automatisation et accompagnement digital par Keleya." };

export default function ServicesPage() {
  return <PageShell current="/services"><main id="contenu">
    <PageHero index="02" kicker="Nos services" title="Le digital qui simplifie." accent="L’impact qui se mesure." copy="Des solutions conçues pour vos réalités, adoptées par vos équipes et capables d’accompagner votre croissance." />
    <ServiceUniverse />
    <section className="outcomes dark-section">
      <div className="section-label light" data-reveal><span>Ce que cela change</span><i /></div>
      <h2 data-reveal>Moins de friction.<br />Plus de <em>mouvement.</em></h2>
      <div className="outcome-grid"><article data-reveal><Workflow /><h3>Des opérations fluides</h3><p>Moins de doubles saisies, d’attente et d’informations perdues entre les équipes.</p></article><article data-reveal><BarChart3 /><h3>Des décisions plus claires</h3><p>La bonne information devient lisible et disponible au moment où vous en avez besoin.</p></article><article data-reveal><CloudCog /><h3>Une base qui évolue</h3><p>Votre solution accompagne la croissance sans vous forcer à tout recommencer.</p></article></div>
    </section>
    <EngineeringProcess />
    <section className="cta-band"><p className="eyebrow light">Votre besoin ne rentre pas dans une case ?</p><h2 data-reveal>Parlons du résultat<br /><em>que vous visez.</em></h2><a className="button white" href="/contact">Étudier mon projet <ArrowUpRight /></a></section>
  </main></PageShell>;
}
