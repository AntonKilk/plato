import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
}

export default function Events() {
  const eventsList: EventCardProps[] = [
    {
      title: "Диалог о справедливости",
      date: "20 мая 2025",
      description:
        "Обсуждение концепции справедливости в контексте современного общества, от Платона до Джона Ролза.",
    },
    {
      title: "Симпозиум: Природа красоты",
      date: "15 июня 2025",
      description:
        "Философский вечер, посвященный вопросам эстетики и восприятия прекрасного в античной и современной философии.",
    },
    {
      title: "Мастер-класс: Логика и аргументация",
      date: "10 июля 2025",
      description:
        "Практический семинар по построению логически безупречных аргументов и распознаванию логических ошибок.",
    },
  ];

  const EventCard = ({ title, date, description, image }: EventCardProps) => (
    <div className="event-card animate-on-scroll">
      <div className="event-image"></div>
      <div className="event-info">
        <h3>{title}</h3>
        <div className="event-date">{date}</div>
        <p>{description}</p>
        <button className="event-button">Узнать больше</button>
      </div>
    </div>
  );

  return (
    <div className="events-container">
      <div className="events-intro animate-on-scroll">
        <p>
          Присоединяйтесь к нашим встречам, семинарам и дискуссиям, где мы
          вместе исследуем глубины философской мысли.
        </p>
      </div>

      <div className="events-grid">
        {eventsList.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <div className="events-cta animate-on-scroll">
        <a href="#contact" className="cta-button">
          Все события
        </a>
      </div>
    </div>
  );
}
