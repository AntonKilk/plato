import { useT } from "../i18n/t";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-phi">Φ</span>
          <div className="footer-logo-text">
            <span className="logo-name">ACADEMIA PLATONICA</span>
            <span className="logo-tagline">{t("footer.tagline")}</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h4>{t("footer.socialTitle")}</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61574957652748"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Academia_Platonica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright", { year: currentYear })}</p>
      </div>
    </footer>
  );
}
