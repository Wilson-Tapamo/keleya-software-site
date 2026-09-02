"use client";

import { ArrowUpRight, BarChart3, CloudCog, Workflow } from "lucide-react";
import { PageHero, PageShell } from "@/app/components/SiteShell";
import { EngineeringProcess, ServiceUniverse } from "@/app/components/ServiceExperiences";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ServicesPage() {
  const t = useTranslations("Services");

  return <PageShell current="/services"><main id="contenu">
    <PageHero index="03" kicker={t("heroKicker")} title={t("heroTitle")} accent={t("heroAccent")} copy={t("heroCopy")} />
    <ServiceUniverse />
    <section className="outcomes dark-section">
      <div className="section-label light" data-reveal><span>{t("outcomesLabel")}</span><i /></div>
      <h2 data-reveal dangerouslySetInnerHTML={{ __html: t.raw("outcomesTitle") }} />
      <div className="outcome-grid"><article data-reveal><Workflow /><h3>{t("outcomes.o1.title")}</h3><p>{t("outcomes.o1.text")}</p></article><article data-reveal><BarChart3 /><h3>{t("outcomes.o2.title")}</h3><p>{t("outcomes.o2.text")}</p></article><article data-reveal><CloudCog /><h3>{t("outcomes.o3.title")}</h3><p>{t("outcomes.o3.text")}</p></article></div>
    </section>
    <EngineeringProcess />
    <section className="cta-band"><p className="eyebrow light">{t("ctaEyebrow")}</p><h2 data-reveal dangerouslySetInnerHTML={{ __html: t.raw("ctaTitle") }} /><Link className="button white" href="/contact">{t("ctaButton")} <ArrowUpRight /></Link></section>
  </main></PageShell>;
}
