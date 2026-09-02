"use client";

import { ArrowUpRight, CircleDot, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export function TeamExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("Team");

  const team = [
    { name: "Achille", role: t("members.achille.role"), initials: "AC", focus: t("members.achille.focus"), lead: true },
    { name: "Wilson", role: t("members.wilson.role"), initials: "WT", focus: t("members.wilson.focus"), lead: true },
    { name: "Brandon", role: t("members.brandon.role"), initials: "BR", focus: t("members.brandon.focus") },
    { name: "Stéphane", role: t("members.stephane.role"), initials: "ST", focus: t("members.stephane.focus") },
    { name: "Ted", role: t("members.ted.role"), initials: "TD", focus: t("members.ted.focus") },
    { name: "Daniel", role: t("members.daniel.role"), initials: "DN", focus: t("members.daniel.focus") },
    { name: "André Marie", role: t("members.andre.role"), initials: "AM", focus: t("members.andre.focus") },
  ];

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
      <div className="section-label light" data-reveal><span>{t("label")}</span><i /></div>
      <div className="team-experience__heading" data-reveal>
        <p className="eyebrow light">{t("eyebrow")}</p>
        <h2 id="team-title" dangerouslySetInnerHTML={{ __html: t.raw("title") }} />
        <p>{t("copy")}</p>
      </div>
      <div className="team-grid" onPointerMove={handlePointerMove} onPointerLeave={resetCard}>
        {team.map((member, index) => (
          <article className={`team-member${member.lead ? " team-member--lead" : ""}`} data-reveal tabIndex={0} key={member.name}>
            <div className="team-member__spotlight" aria-hidden="true" />
            <div className="team-member__portrait" aria-label={`Emplacement de la photo de ${member.name}`}>
              <span className="team-member__monogram">{member.initials}</span>
              <span className="team-member__silhouette" aria-hidden="true" />
              <span className="team-member__scan" aria-hidden="true" />
              <small>{t("photoPlaceholder")}</small>
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
      <div className="team-experience__footer"><span>{t("footer1")}</span><i /><span>{t("footer2")}</span><i /><span>{t("footer3")}</span></div>
    </section>
  );
}
