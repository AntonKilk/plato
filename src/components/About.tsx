import { useT } from "../i18n/t";

export default function About() {
  const t = useT();
  return (
    <div className="about-content">
      <div className="about-left">
        <div className="about-image animate-on-scroll"></div>
      </div>
      <div className="about-right">
        <div className="animate-on-scroll">
          <h3>{t("about.missionTitle")}</h3>
          <p>{t("about.missionText")}</p>
        </div>
        <div className="principles animate-on-scroll">
          <h3>{t("about.whatWeDoTitle")}</h3>
          <ul>
            <li>
              <span className="principle-icon">Ω</span>
              <div>
                <h4>{t("about.items.lectures.title")}</h4>
                <p>{t("about.items.lectures.text")}</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">δ</span>
              <div>
                <h4>{t("about.items.discussions.title")}</h4>
                <p>{t("about.items.discussions.text")}</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">α</span>
              <div>
                <h4>{t("about.items.classes.title")}</h4>
                <p>{t("about.items.classes.text")}</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">π</span>
              <div>
                <h4>{t("about.items.labs.title")}</h4>
                <p>{t("about.items.labs.text")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
