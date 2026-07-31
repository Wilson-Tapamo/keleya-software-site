"use client";

import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { PageHero, PageShell } from "../components/SiteShell";

const options = ["Application web", "Application mobile", "Outil métier", "Design UI/UX", "Automatisation & IA", "Conseil / cadrage", "Autre"];
const faqs = [
  ["Quel est le délai habituel pour un projet ?", "La durée dépend de l’ambition et du périmètre. Après un premier échange, nous vous proposons des étapes claires, un calendrier réaliste et un premier résultat utile aussi tôt que possible."],
  ["Travaillez-vous avec des clients hors du Cameroun ?", "Oui. Notre organisation est pensée pour collaborer efficacement à distance, en Afrique comme à l’international."],
  ["Pouvez-vous reprendre un projet existant ?", "Oui. Nous commençons par un diagnostic simple de l’existant, puis recommandons ce qu’il faut conserver, améliorer ou repenser."],
  ["Assurez-vous le suivi après le lancement ?", "Oui. Nous pouvons accompagner la prise en main, suivre les performances, corriger les points de friction et faire évoluer la solution."],
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const toggle = (item: string) => setSelected((items) => items.includes(item) ? items.filter(x => x !== item) : [...items, item]);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };

  return <PageShell current="/contact"><main id="contenu">
    <PageHero index="04" kicker="Nous contacter" title="Vous avez une ambition ?" accent="Donnons-lui de l’élan." copy="Racontez-nous ce que vous souhaitez changer. Nous vous répondons avec des questions utiles, des idées claires et une prochaine étape concrète." />
    <section className="contact-zone light-section" id="form">
      <div className="contact-info" data-reveal><p className="eyebrow">Commençons simplement</p><h2>Parlons de votre<br /><em>prochain mouvement.</em></h2><p>Quelques lignes suffisent. Aucun jargon nécessaire : dites-nous ce qui vous ralentit aujourd’hui et ce que vous aimeriez rendre possible demain.</p><div className="contact-details"><a href="mailto:hello@keleya.agency"><Mail /> <span><small>E-MAIL</small>hello@keleya.agency</span></a><a href="tel:+237600000000"><Phone /> <span><small>TÉLÉPHONE</small>+237 600 000 000</span></a><div><MapPin /> <span><small>LOCALISATION</small>Yaoundé, Cameroun</span></div><div><Clock3 /> <span><small>RÉPONSE</small>Sous 1 à 2 jours ouvrés</span></div></div></div>
      <form className="contact-form" onSubmit={submit} data-reveal>
        {sent ? <div className="success-message"><CheckCircle2 /><p className="eyebrow">Demande enregistrée</p><h3>Merci. La conversation commence ici.</h3><p>Votre demande est prête. Dans cette version de démonstration, aucun e-mail n’a été envoyé.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Modifier ma demande</button></div> : <>
          <div className="form-row"><label>Votre nom<input required name="name" placeholder="Comment vous appelez-vous ?" /></label><label>Votre e-mail<input required type="email" name="email" placeholder="vous@entreprise.com" /></label></div>
          <label>Votre organisation<input name="company" placeholder="Nom de votre entreprise ou institution" /></label>
          <fieldset><legend>Sur quoi souhaitez-vous avancer ?</legend><div className="choice-grid">{options.map(item => <button type="button" key={item} className={selected.includes(item) ? "is-selected" : ""} onClick={() => toggle(item)}>{selected.includes(item) && <CheckCircle2 />}{item}</button>)}</div></fieldset>
          <label>Parlez-nous du projet<textarea required name="message" rows={6} placeholder="Le contexte, l’objectif, le calendrier… tout ce qui vous semble utile." /></label>
          <button className="submit-button" type="submit">Envoyer la demande <ArrowUpRight /></button>
        </>}
      </form>
    </section>
    <section className="after-contact dark-section"><div className="section-label light" data-reveal><span>Après votre message</span><i /></div><h2 data-reveal>Simple, humain,<br /><em>sans détour.</em></h2><div className="after-grid"><article data-reveal><span>01</span><h3>Nous vous écoutons</h3><p>Un échange pour comprendre le contexte, les personnes concernées et le résultat attendu.</p></article><article data-reveal><span>02</span><h3>Nous clarifions</h3><p>Nous reformulons le besoin, les priorités et la meilleure première étape pour avancer.</p></article><article data-reveal><span>03</span><h3>Nous proposons un cap</h3><p>Vous recevez une approche, un périmètre et un chemin de collaboration lisibles.</p></article></div></section>
    <section className="faq-section light-section"><div className="faq-title" data-reveal><p className="eyebrow">Questions fréquentes</p><h2>Avant de<br /><em>commencer.</em></h2></div><div className="faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0} data-reveal><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="cta-band"><p className="eyebrow light">Vous préférez écrire directement ?</p><h2 data-reveal>hello@keleya.agency</h2><a className="button white" href="mailto:hello@keleya.agency">Écrire un e-mail <ArrowUpRight /></a></section>
  </main></PageShell>;
}
