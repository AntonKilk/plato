import React from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  light?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  light = false,
}: SectionProps) {
  return (
    <section id={id} className={`section ${light ? "light" : "dark"}`}>
      <div className="section-content">
        <h2 className="section-title animate-on-scroll">{title}</h2>
        {subtitle && (
          <p className="section-subtitle animate-on-scroll">{subtitle}</p>
        )}
        <div className="section-body animate-on-scroll">{children}</div>
      </div>
    </section>
  );
}
