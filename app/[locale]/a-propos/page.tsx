"use client";

import { ArrowUpRight, Compass, Feather, Gauge, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";
import { PageHero, PageShell } from "@/app/components/SiteShell";
import { TeamExperience } from "@/app/components/TeamExperience";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AboutPage() {
  const t = useTranslations("About");

  return <PageShell current="/a-propos"><main id="contenu">
    <PageHero index="02" kicker={t("heroKicker")} title={t("heroTitle")} accent={t("heroAccent")} copy={t("heroCopy")} />
    <section className="about-manifesto light-section">
      <div className="section-label" data-reveal><span>{t("manifestoLabel")}</span><i /></div>
      <h2 className="about-manifesto__statement" data-reveal dangerouslySetInnerHTML={{ __html: t.raw("manifestoStatement") }} />
      <div className="about-origin">
        <div className="origin-mark" data-reveal><Image src="/keleya-mark-red.png" alt="" width="1600" height="1600" unoptimized /><span>KELEYA / 2026</span></div>
        <div className="origin-copy" data-reveal><p className="eyebrow">{t("originEyebrow")}</p><p className="lead">{t("originLead")}</p><p>{t("originText")}</p></div>
      </div>
    </section>
    <section className="beliefs dark-section">
      <div className="beliefs-title" data-reveal><p className="eyebrow light">{t("beliefsEyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t.raw("beliefsTitle") }} /></div>
      <div className="belief-grid">
        <article data-reveal><Compass /><span>01 / {t("beliefsList.b1.tag")}</span><h3>{t("beliefsList.b1.title")}</h3><p>{t("beliefsList.b1.text")}</p></article>
        <article data-reveal><Globe2 /><span>02 / {t("beliefsList.b2.tag")}</span><h3>{t("beliefsList.b2.title")}</h3><p>{t("beliefsList.b2.text")}</p></article>
        <article data-reveal><Sparkles /><span>03 / {t("beliefsList.b3.tag")}</span><h3>{t("beliefsList.b3.title")}</h3><p>{t("beliefsList.b3.text")}</p></article>
      </div>
    </section>
    <section className="values-section light-section">
      <div className="section-label" data-reveal><span>{t("valuesLabel")}</span><i /></div>
      <div className="values-intro" data-reveal><p className="eyebrow">{t("valuesEyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t.raw("valuesTitle") }} /></div>
      <div className="values-list">
        <article data-reveal><span>01</span><Gauge /><h3>{t("valuesList.v1.title")}</h3><p>{t("valuesList.v1.text")}</p></article>
        <article data-reveal><span>02</span><Feather /><h3>{t("valuesList.v2.title")}</h3><p>{t("valuesList.v2.text")}</p></article>
        <article data-reveal><span>03</span><Sparkles /><h3>{t("valuesList.v3.title")}</h3><p>{t("valuesList.v3.text")}</p></article>
      </div>
    </section>
    <TeamExperience />
    <section className="africa-statement"><div className="africa-glow" /><p className="eyebrow light">{t("africaEyebrow")}</p><h2 data-reveal dangerouslySetInnerHTML={{ __html: t.raw("africaTitle") }} /><Link className="button red" href="/contact">{t("africaButton")} <ArrowUpRight /></Link></section>
  </main></PageShell>;
}
