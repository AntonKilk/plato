import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export default function Events() {
  const eventsList: EventCardProps[] = [
    {
      title: "Платон NOW! Искусство мыслить свободно",
      date: "22 мая 2025",
      description:
        "Первая открытая встреча проекта ACADEMIA PLATONICA (Tallinn)",
      link: "https://fienta.com/ru/platon-now-iskusstvo-myslit-svobodno",
      image: "/events_Platon_NOW.png",
    },
    {
      title: "СОЗНАНИЕ это ИЛЛЮЗИЯ?",
      date: "29 мая 2025",
      description: "Открытая дискуссия проекта ACADEMIA PLATONICA (Tallinn)",
      link: "https://fienta.com/ru/soznanie-eto-illyuziya",
      image: "/events_Sozn.jpg",
    },
  ];

  const EventCard = ({
    title,
    date,
    description,
    link,
    image,
  }: EventCardProps) => {
    const handleButtonClick = () => {
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    };
    return (
      <div className="event-card animate-on-scroll">
        <div
          className="event-image"
          style={image ? { backgroundImage: `url(${image})` } : {}}
        ></div>
        <div className="event-info">
          <h3>{title}</h3>
          <div className="event-date">{date}</div>
          <p>{description}</p>
          <button className="event-button" onClick={handleButtonClick}>
            Узнать больше
          </button>
        </div>
      </div>
    );
  };

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

      {/* <div className="events-cta animate-on-scroll">
        <a href="#contact" className="cta-button">
          Все события
        </a>
      </div> */}
    </div>
  );
}
