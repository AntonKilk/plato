import React, { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <span className="logo-text">Academia Platonica</span>
      </a>
      <div className="nav-links">
        <NavLink href="#about" title="О нас" />
        <NavLink href="#events" title="События" />
      </div>
    </nav>
  );
}
