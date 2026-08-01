"use client";

import { ArrowUpRight, CircleDot, Sparkles } from "lucide-react";
import { useRef } from "react";

const team = [
  { name: "Achille", role: "Coordinateur", initials: "AC", focus: "Aligne la vision, les priorités et l’exécution.", lead: true },
  { name: "Wilson", role: "Superviseur", initials: "WT", focus: "Transforme l’exigence en systèmes cohérents.", lead: true },
  { name: "Brandon", role: "Lead developer", initials: "BR", focus: "Conçoit les fondations techniques qui durent." },
  { name: "Stéphane", role: "Dev full-stack", initials: "ST", focus: "Relie l’expérience aux capacités du produit." },
  { name: "Ted", role: "Dev full-stack", initials: "TD", focus: "Façonne des interfaces précises et vivantes." },
  { name: "Daniel", role: "Dev mobile", initials: "DN", focus: "Crée des expériences mobiles fluides et utiles." },
  { name: "André Marie", role: "Dev mobile", initials: "AM", focus: "Pense chaque interaction pour le terrain." },
];

export function TeamExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".team-member");
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--team-x", `${x * 100}%`);
    card.style.setProperty("--team-y", `${y * 100}%`);
    card.style.setProperty("--team-rx", `${(0.5 - y) * 5}deg`);
    card.style.setProperty("--team-ry", `${(x - 0.5) * 7}deg`);
  };

  const resetCard = (event: React.PointerEvent<HTMLElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".team-member");
    if (!card) return;
    card.style.setProperty("--team-rx", "0deg");
    card.style.setProperty("--team-ry", "0deg");
  };

  return (
    <section className="team-experience" ref={sectionRef} aria-labelledby="team-title">
      <div className="team-experience__halo" aria-hidden="true" />
      <div className="section-label light" data-reveal><span>L’équipe / 07 talents</span><i /></div>
      <div className="team-experience__heading" data-reveal>
        <p className="eyebrow light">Les personnes derrière la précision</p>
        <h2 id="team-title">Des regards différents.<br /><em>Une même exigence.</em></h2>
        <p>Une équipe resserrée, pluridisciplinaire et responsable de bout en bout de la qualité de chaque produit.</p>
      </div>
      <div className="team-grid" onPointerMove={handlePointerMove} onPointerLeave={resetCard}>
        {team.map((member, index) => (
          <article className={`team-member${member.lead ? " team-member--lead" : ""}`} data-reveal tabIndex={0} key={member.name}>
            <div className="team-member__spotlight" aria-hidden="true" />
            <div className="team-member__portrait" aria-label={`Emplacement de la photo de ${member.name}`}>
              <span className="team-member__monogram">{member.initials}</span>
              <span className="team-member__silhouette" aria-hidden="true" />
              <span className="team-member__scan" aria-hidden="true" />
              <small>PHOTO / À REMPLACER</small>
            </div>
            <div className="team-member__meta">
              <span>0{index + 1}</span>
              <CircleDot />
            </div>
            <div className="team-member__copy">
              <small>{member.role}</small>
              <h3>{member.name}</h3>
              <p>{member.focus}</p>
            </div>
            <div className="team-member__signal" aria-hidden="true"><Sparkles /><ArrowUpRight /></div>
          </article>
        ))}
      </div>
      <div className="team-experience__footer"><span>Coordination</span><i /><span>Design & ingénierie</span><i /><span>Mobile & terrain</span></div>
    </section>
  );
}
