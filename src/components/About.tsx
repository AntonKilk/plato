export default function About() {
  return (
    <div className="about-content">
      <div className="about-left">
        <div className="about-image animate-on-scroll"></div>
      </div>
      <div className="about-right">
        <p className="animate-on-scroll">
          <strong>Платоновский клуб</strong> — это место встречи для тех, кто
          стремится к истине, к познанию себя и мира через призму философской
          мысли.
        </p>
        <p className="animate-on-scroll">
          Подобно пленникам в аллегории пещеры Платона, многие из нас видят лишь
          тени истины. Наш клуб — это возможность повернуться к выходу из
          пещеры, увидеть истинный свет знания и разделить этот опыт с
          единомышленниками.
        </p>
        <div className="principles animate-on-scroll">
          <h3>Наши принципы:</h3>
          <ul>
            <li>
              <span className="principle-icon">☉</span>
              <div>
                <h4>Поиск истины</h4>
                <p>Стремление к знанию через диалог и критическое мышление</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">♾</span>
              <div>
                <h4>Открытость</h4>
                <p>
                  Готовность рассматривать разные точки зрения и философские
                  традиции
                </p>
              </div>
            </li>
            <li>
              <span className="principle-icon">⚖</span>
              <div>
                <h4>Гармония</h4>
                <p>
                  Баланс между теоретическим познанием и практическим
                  применением мудрости
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
