import React, { useEffect, useState } from "react";
import { useI18n, useT } from "../i18n/t";

interface NavLinkProps {
  href: string;
  title: string;
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useI18n();
  const t = useT();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, title }: NavLinkProps) => (
    <a href={href} className="nav-link">
      {title}
    </a>
  );

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo">
        <span className="phi">Φ</span>
        <span className="logo-text">{t("site.name")}</span>
      </a>
      <div className="nav-links">
        <NavLink href="#about" title={t("nav.about")} />
        <NavLink href="#events" title={t("nav.events")} />
      </div>
      <div className="lang-switcher">
        {(["ru", "et"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`lang-btn ${lang === l ? "active" : ""}`}
            aria-pressed={lang === l}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}
