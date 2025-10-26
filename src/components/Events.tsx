import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import type { EventCardProps } from "./EventCard";
import { useI18n, useT } from "../i18n/t";

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
  const { lang } = useI18n();
  const t = useT();

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

        const locale = lang === 'et' ? 'et-EE' : 'ru-RU';
        const formattedEvents = data.events.map((event: any) => {
          const starts_at = event.starts_at
            ? new Date(event.starts_at).toLocaleDateString('et-EE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            : 'Date TBA';
          return {
            title: event.title,
            starts_at,
            address: event.address || '',
            url: event.url || '',
            image_url: event.image_url || ''
          };
        });

        setEvents(formattedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [lang]);

  return (
    <div className="events-container">
      <div className="events-intro">
        <p>{t("events.intro")}</p>
      </div>

  {loading && <div className="loading">{t("events.loading")}</div>}

  {error && <div className="error-message">{t("events.error")}</div>}

      <div className="events-grid">
        {events.length > 0 ? (
          events.map((eventProps, index) => (
            <EventCard key={index} {...eventProps} />
          ))
        ) : !loading && !error ? (
          <div
            className="no-events"
            dangerouslySetInnerHTML={{
              __html: t("events.noEvents", {
                telegram:
                  `<a href="https://t.me/AcademiaPlatonica" target="_blank" rel="noopener noreferrer">${t("events.telegram")}</a>`,
                email:
                  '<a href="mailto:academia@platonica.pro">academia@platonica.pro</a>'
              })
            }}
          />
        ) : null}
      </div>

      <div className="past-events-section">
        <h3>{t("events.pastEvents")}</h3>

        <div className="past-events-content">
          <div className="past-events-grid">
            <div className="past-event-video">
              <h4>{t("events.videos.plato")}</h4>
              <div className="video-embed">
                <iframe
                  width="100%"
                  min-height="200"
                  src="https://www.youtube.com/embed/5Be08G0hlBA"
                  title={t("events.videos.plato")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="past-event-video">
              <h4>{t("events.videos.consciousness")}</h4>
              <div className="video-embed">
                <iframe
                  width="100%"
                  min-height="200"
                  src="https://www.youtube.com/embed/FCVntA90Cv4"
                  title={t("events.videos.consciousness")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
