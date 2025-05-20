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
      {/* Facebook Link Tab */}

      <a
        href="https://www.facebook.com/profile.php?id=61574957652748"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook-tab"
        aria-label="Visit our Facebook page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="facebook-icon"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      </a>
      <div className="cave-content">
        <div className="logo-container fade-in">
          <img
            src="/logo.png"
            alt="Academia Platonica Logo"
            className="logo-image"
            width="800"
            height="500"
          />
        </div>
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
