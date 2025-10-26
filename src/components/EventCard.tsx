import { useState } from "react";
import { useT } from "../i18n/t";

export interface EventCardProps {
  title: string;
  starts_at: string;
  address?: string;
  url?: string;
  image_url?: string;
}

const EventCard = (props: EventCardProps) => {
  const { title, starts_at, address, url, image_url } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useT();

  const handleCardClick = (e: React.MouseEvent) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`event-card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: url && !isExpanded ? "pointer" : "default" }}
    >
      <div
        className="event-image"
        style={image_url ? { backgroundImage: `url(${image_url})` } : {}}
      ></div>
      <div className="event-info">
        <h3>{title}</h3>
        <div className="event-date">{starts_at}</div>
        {address && <div className="event-address">{address}</div>}
      </div>
      <div className="event-button">{t("events.buyTicket")}</div>
    </div>
  );
};

export default EventCard;
