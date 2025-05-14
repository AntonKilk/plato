export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-phi">Φ</span>
          <div className="footer-logo-text">
            <span className="logo-name">Платоновский клуб</span>
            <span className="logo-tagline">Путь от теней к истине</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Социальные сети</h4>
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
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} ACADEMIA PLATONICA MTÜ</p>
      </div>
    </footer>
  );
}
