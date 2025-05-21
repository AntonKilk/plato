export default function About() {
  return (
    <div className="about-content">
      <div className="about-left">
        <div className="about-image animate-on-scroll"></div>
      </div>
      <div className="about-right">
        <div className="animate-on-scroll">
          <h3>Наша задача</h3>
          Рассказать простым языком о сложности мира и дать каждому возможность
          попробовать себя в роли философа, потому что философия — это искусство
          быть счастливым.
        </div>
        <div className="principles animate-on-scroll">
          <h3>Что мы делаем</h3>
          <ul>
            <li>
              <span className="principle-icon">Ω</span>
              <div>
                <h4>Лекции</h4>
                <p>Краткое и понятное введение в сложные темы</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">δ</span>
              <div>
                <h4>Междисциплинарные дискуссии</h4>
                <p>Связываем идеи философии, науки и искусства</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">α</span>
              <div>
                <h4>Классы</h4>
                <p>Практические занятия и чтение источников</p>
              </div>
            </li>
            <li>
              <span className="principle-icon">π</span>
              <div>
                <h4>Лаборатории</h4>
                <p>
                  Экспериментальные форматы, где участники пробуют философию «в
                  действии
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
