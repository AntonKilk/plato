import EventCard from "./EventCard";
import { eventsList } from "../data/events";

export default function Events() {
  return (
    <div className="events-container">
      <div className="events-intro">
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
