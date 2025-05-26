import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import type { EventCardProps } from "./EventCard";

const organizerId = import.meta.env.FIENTA_ORGANIZER_ID;
const fientaUrl = import.meta.env.FIENTA_URL;
if (!organizerId) {
  console.error(
    "FIENTA_ORGANIZER_ID is not defined in the environment variables."
  );
}

export default function Events() {
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = `${fientaUrl}?organizer=${organizerId}`;
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data.events)) {
          console.error("API did not return an array:", data);
          setError("Received invalid data format from the events API.");
          setLoading(false);
          return;
        }

        const formattedEvents = data.events.map((event: any) => ({
          title: event.title,
          starts_at: event.starts_at
            ? new Date(event.starts_at).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Date TBA",
          address: event.address || "",

          url: event.url || "",
          image_url: event.image_url || "",
        }));

        setEvents(formattedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <div className="events-intro">
        <p>
          Присоединяйтесь к нашим встречам, семинарам и дискуссиям, где мы
          вместе исследуем глубины философской мысли.
        </p>
      </div>

      {loading && <div className="loading">Загружаю мероприятия...</div>}

      {error && <div className="error-message">{error}</div>}

      <div className="events-grid">
        {events.length > 0 ? (
          events.map((eventProps, index) => (
            <EventCard key={index} {...eventProps} />
          ))
        ) : !loading && !error ? (
          <div className="no-events">Ни одного мероприятия не найдено</div>
        ) : null}
      </div>

      <div className="past-events-section">
        <button
          className="past-event-button"
          onClick={() => setShowPastEvents(!showPastEvents)}
          style={{ cursor: "pointer", margin: "20px auto", display: "block" }}
        >
          {showPastEvents
            ? "Скрыть прошедшие события"
            : "Показать прошедшие события"}
        </button>

        {showPastEvents && (
          <div className="past-events-content">
            <div className="past-events-grid">
              <div className="past-event-video">
                <h4>Платон: Философия, изменившая мир</h4>
                <div className="video-embed">
                  <iframe
                    width="100%"
                    min-height="200"
                    src="https://www.youtube.com/embed/5Be08G0hlBA"
                    title="Платон: Философия, изменившая мир"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
