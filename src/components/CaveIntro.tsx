import { useEffect, useRef } from "react";

export default function CaveIntro() {
  const caveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!caveRef.current) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const opacity = 1 - Math.min(scrollPosition / (viewportHeight * 0.7), 1);

      caveRef.current.style.opacity = String(opacity);

      // Parallax effect for shadows
      const shadows = caveRef.current.querySelectorAll(".shadow");
      shadows.forEach((shadow, index) => {
        const speed = 0.05 + index * 0.03;
        const yPos = -(scrollPosition * speed);
        (shadow as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={caveRef} className="cave-intro">
      <div className="cave-content">
        <h1 className="title fade-in">Academia Platonica</h1>
        <p className="subtitle fade-in">Путь от теней к истине</p>
        <div className="quote-container fade-in">
          <blockquote>
            «Представь, что люди находятся в подземном жилище наподобие
            пещеры...»
            <footer>
              — Платон, <cite>Государство, Книга VII</cite>
            </footer>
          </blockquote>
        </div>
        <div className="scroll-indicator fade-in">
          <p>Прокрутите вниз, чтобы выйти из пещеры</p>
          <div className="arrow">↓</div>
        </div>
      </div>

      <div className="shadows-container">
        <div className="shadow shadow-1"></div>
        <div className="shadow shadow-2"></div>
        <div className="shadow shadow-3"></div>
      </div>
    </div>
  );
}
