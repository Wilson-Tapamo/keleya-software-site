"use client";

import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { PageHero, PageShell } from "@/app/components/SiteShell";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const toggle = (item: string) => setSelected((items) => items.includes(item) ? items.filter(x => x !== item) : [...items, item]);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };

  const t = useTranslations("Contact");
  const options = [t("formOptions.o1"), t("formOptions.o2"), t("formOptions.o3"), t("formOptions.o4"), t("formOptions.o5"), t("formOptions.o6"), t("formOptions.o7")];
  
  const faqs = [
    [t("faqs.q1.q"), t("faqs.q1.a")],
    [t("faqs.q2.q"), t("faqs.q2.a")],
    [t("faqs.q3.q"), t("faqs.q3.a")],
    [t("faqs.q4.q"), t("faqs.q4.a")],
  ];

  return <PageShell current="/contact"><main id="contenu">
    <PageHero index="04" kicker={t("heroKicker")} title={t("heroTitle")} accent={t("heroAccent")} copy={t("heroCopy")} />
    <section className="contact-zone light-section" id="form">
      <div className="contact-info" data-reveal><p className="eyebrow">{t("infoEyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t.raw("infoTitle") }} /><p>{t("infoCopy")}</p><div className="contact-details"><a href="mailto:contact@keleya.app"><Mail /> <span><small>{t("emailLabel")}</small>contact@keleya.app</span></a><a href="tel:+237600000000"><Phone /> <span><small>{t("phoneLabel")}</small>+237 600 000 000</span></a><div><MapPin /> <span><small>{t("locationLabel")}</small>{t("locationValue")}</span></div><div><Clock3 /> <span><small>{t("replyLabel")}</small>{t("replyValue")}</span></div></div></div>
      <form className="contact-form" onSubmit={submit} data-reveal>
        {sent ? <div className="success-message"><CheckCircle2 /><p className="eyebrow">{t("formSuccessEyebrow")}</p><h3>{t("formSuccessTitle")}</h3><p>{t("formSuccessText")}</p><button type="button" className="text-link" onClick={() => setSent(false)}>{t("formSuccessModify")}</button></div> : <>
          <div className="form-row"><label>{t("formNameLabel")}<input required name="name" placeholder={t("formNamePlaceholder")} /></label><label>{t("formEmailLabel")}<input required type="email" name="email" placeholder={t("formEmailPlaceholder")} /></label></div>
          <label>{t("formCompanyLabel")}<input name="company" placeholder={t("formCompanyPlaceholder")} /></label>
          <fieldset><legend>{t("formLegend")}</legend><div className="choice-grid">{options.map(item => <button type="button" key={item} className={selected.includes(item) ? "is-selected" : ""} onClick={() => toggle(item)}>{selected.includes(item) && <CheckCircle2 />}{item}</button>)}</div></fieldset>
          <label>{t("formMessageLabel")}<textarea required name="message" rows={6} placeholder={t("formMessagePlaceholder")} /></label>
          <button className="submit-button" type="submit">{t("formSubmit")} <ArrowUpRight /></button>
        </>}
      </form>
    </section>
    <section className="after-contact dark-section"><div className="section-label light" data-reveal><span>{t("afterLabel")}</span><i /></div><h2 data-reveal dangerouslySetInnerHTML={{ __html: t.raw("afterTitle") }} /><div className="after-grid"><article data-reveal><span>01</span><h3>{t("afterSteps.s1.title")}</h3><p>{t("afterSteps.s1.text")}</p></article><article data-reveal><span>02</span><h3>{t("afterSteps.s2.title")}</h3><p>{t("afterSteps.s2.text")}</p></article><article data-reveal><span>03</span><h3>{t("afterSteps.s3.title")}</h3><p>{t("afterSteps.s3.text")}</p></article></div></section>
    <section className="faq-section light-section"><div className="faq-title" data-reveal><p className="eyebrow">{t("faqEyebrow")}</p><h2 dangerouslySetInnerHTML={{ __html: t.raw("faqTitle") }} /></div><div className="faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0} data-reveal><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="cta-band"><p className="eyebrow light">{t("ctaEyebrow")}</p><h2 data-reveal>contact@keleya.app</h2><a className="button white" href="mailto:contact@keleya.app">{t("ctaButton")} <ArrowUpRight /></a></section>
  </main></PageShell>;
}
