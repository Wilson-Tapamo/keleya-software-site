"use client";

import {
  Blocks, Bot, Check, Code2, Compass, Database, Gauge, Layers3, LayoutTemplate,
  PanelsTopLeft, Rocket, ScanSearch, Smartphone, Store, Workflow, type LucideIcon
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

type Service = {
  icon: LucideIcon;
  scene: [LucideIcon, LucideIcon, LucideIcon];
  signal: string;
  title: string;
  text: string;
  deliverables: string[];
};

function ServiceVisual({ service }: { service: Service }) {
  return (
    <div className="service-scene" aria-hidden="true">
      <div className="service-scene__grid" />
      <div className="service-scene__window window-main">
        <span className="service-scene__bar"><i /><i /><i /></span>
        <div className="service-scene__metrics"><i /><i /><i /><i /><i /></div>
        <div className="service-scene__chart"><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="service-scene__window window-float"><i /><i /></div>
      <div className="service-scene__orbit">
        {service.scene.map((Icon, index) => <span className={`scene-icon scene-icon--${index + 1}`} key={index}><Icon /></span>)}
      </div>
      <span className="service-scene__pulse" />
    </div>
  );
}

export function ServiceUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Services");

  const services: Service[] = [
    { icon: Smartphone, scene: [Smartphone, Code2, Blocks], signal: t("universeServices.apps.signal"), title: t("universeServices.apps.title"), text: t("universeServices.apps.text"), deliverables: [t("universeServices.apps.d1"), t("universeServices.apps.d2"), t("universeServices.apps.d3")] },
    { icon: Workflow, scene: [Workflow, Gauge, Database], signal: t("universeServices.ops.signal"), title: t("universeServices.ops.title"), text: t("universeServices.ops.text"), deliverables: [t("universeServices.ops.d1"), t("universeServices.ops.d2"), t("universeServices.ops.d3")] },
    { icon: LayoutTemplate, scene: [LayoutTemplate, PanelsTopLeft, Check], signal: t("universeServices.design.signal"), title: t("universeServices.design.title"), text: t("universeServices.design.text"), deliverables: [t("universeServices.design.d1"), t("universeServices.design.d2"), t("universeServices.design.d3")] },
    { icon: Blocks, scene: [Compass, Layers3, Workflow], signal: t("universeServices.pm.signal"), title: t("universeServices.pm.title"), text: t("universeServices.pm.text"), deliverables: [t("universeServices.pm.d1"), t("universeServices.pm.d2"), t("universeServices.pm.d3")] },
    { icon: Bot, scene: [Bot, Database, Gauge], signal: t("universeServices.data.signal"), title: t("universeServices.data.title"), text: t("universeServices.data.text"), deliverables: [t("universeServices.data.d1"), t("universeServices.data.d2"), t("universeServices.data.d3")] },
    { icon: Store, scene: [Store, Rocket, Check], signal: t("universeServices.commerce.signal"), title: t("universeServices.commerce.title"), text: t("universeServices.commerce.text"), deliverables: [t("universeServices.commerce.d1"), t("universeServices.commerce.d2"), t("universeServices.commerce.d3")] },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const panels = Array.from(container.querySelectorAll<HTMLElement>(".service-universe__panel"));
    let frame = 0;

    const update = () => {
      const viewport = Math.max(1, window.innerHeight);
      panels.forEach((panel) => {
        const top = panel.getBoundingClientRect().top;
        const enter = Math.min(1, Math.max(0, (viewport - top) / viewport));
        panel.style.setProperty("--service-enter", String(enter));
        panel.style.setProperty("--service-y", `${(1 - enter) * 72}px`);
        panel.style.setProperty("--service-scale", String(0.92 + enter * 0.08));
        panel.style.setProperty("--service-alpha", String(0.2 + enter * 0.8));
        panel.style.setProperty("--service-visual-x", `${(1 - enter) * 88}px`);
      });
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="service-universe" ref={containerRef} aria-labelledby="service-universe-title">
      <div className="service-universe__intro light-section">
        <div className="section-label" data-reveal><span>{t("universeLabel")}</span><i /></div>
        <div className="services-heading" data-reveal><p className="eyebrow">{t("universeEyebrow")}</p><h2 id="service-universe-title" dangerouslySetInnerHTML={{ __html: t.raw("universeTitle") }} /></div>
      </div>
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <article className={`service-universe__panel service-tone-${index + 1}`} key={service.title}>
            <div className="service-universe__noise" aria-hidden="true" />
            <div className="service-universe__content">
              <div className="service-universe__copy">
                <div className="service-universe__meta"><span>0{index + 1} / 06</span><small>{service.signal}</small></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.deliverables.map((item) => <li key={item}><Check />{item}</li>)}</ul>
              </div>
              <div className="service-universe__visual"><ServiceVisual service={service} /></div>
            </div>
            <div className="service-universe__edge" aria-hidden="true"><Icon /><span>KELEYA / {t("universeEdge")}</span></div>
          </article>
        );
      })}
    </section>
  );
}

export function EngineeringProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Services");

  const steps = [
    { number: "01", icon: Compass, title: t("processSteps.s1.title"), text: t("processSteps.s1.text"), output: t("processSteps.s1.output") },
    { number: "02", icon: PanelsTopLeft, title: t("processSteps.s2.title"), text: t("processSteps.s2.text"), output: t("processSteps.s2.output") },
    { number: "03", icon: LayoutTemplate, title: t("processSteps.s3.title"), text: t("processSteps.s3.text"), output: t("processSteps.s3.output") },
    { number: "04", icon: Code2, title: t("processSteps.s4.title"), text: t("processSteps.s4.text"), output: t("processSteps.s4.output") },
    { number: "05", icon: ScanSearch, title: t("processSteps.s5.title"), text: t("processSteps.s5.text"), output: t("processSteps.s5.output") },
    { number: "06", icon: Rocket, title: t("processSteps.s6.title"), text: t("processSteps.s6.text"), output: t("processSteps.s6.output") },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    let frame = 0;
    let distance = 1;

    const measure = () => {
      distance = Math.max(1, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + distance}px`;
      update();
    };
    const update = () => {
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance));
      section.style.setProperty("--engineering-progress", `${progress * 100}%`);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="engineering-process" ref={sectionRef} aria-labelledby="engineering-process-title">
      <div className="engineering-process__stage">
        <div className="engineering-process__heading">
          <p className="eyebrow light">{t("processEyebrow")}</p>
          <h2 id="engineering-process-title" dangerouslySetInnerHTML={{ __html: t.raw("processTitle") }} />
        </div>
        <div className="engineering-process__line"><i /></div>
        <div className="engineering-process__track" ref={trackRef}>
          <div className="engineering-process__spacer" aria-hidden="true" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="engineering-step" key={step.number}>
                <span className="engineering-step__ghost" aria-hidden="true">{step.number}</span>
                <span className="engineering-step__node" aria-hidden="true" />
                <div className="engineering-step__icon"><Icon /></div>
                <div className="engineering-step__title"><small>{step.number}.</small><h3>{step.title}</h3></div>
                <p>{step.text}</p>
                <span className="engineering-step__output">{step.output}</span>
              </article>
            );
          })}
          <div className="engineering-process__finish"><Rocket /><small>{t("processFinish")}</small><strong>{t("processFinishStrong")}</strong></div>
        </div>
        <div className="engineering-process__progress"><i /></div>
      </div>
    </section>
  );
}
