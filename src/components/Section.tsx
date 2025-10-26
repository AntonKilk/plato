import React, { useEffect, useRef } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  light?: boolean;
  children?: React.ReactNode;
}

export default function Section({ id, title, subtitle, light, children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".animate-on-scroll");
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`section ${light ? "light" : ""}`}>
      <div className="section-content">
        {title && <h2 className="section-title animate-on-scroll">{title}</h2>}
        {subtitle && <p className="section-subtitle animate-on-scroll">{subtitle}</p>}
        <div className="section-body animate-on-scroll">{children}</div>
      </div>
    </section>
  );
}