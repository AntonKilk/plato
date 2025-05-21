export interface EventCardProps {
  title: string;
  starts_at: string;
  address?: string;
  description: string;
  url?: string;
  image_url?: string;
}

const EventCard = (props: EventCardProps) => {
  const { title, starts_at, address, description, url, image_url } = props;
  const handleCardClick = () => {
    console.log("here");
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div
      className="event-card"
      onClick={handleCardClick}
      style={{ cursor: url ? "pointer" : "default" }}
    >
      <div
        className="event-image"
        style={image_url ? { backgroundImage: `url(${image_url})` } : {}}
      ></div>
      <div className="event-info">
        <h3>{title}</h3>
        <div className="event-date">{starts_at}</div>
        <p>{description}</p>
      </div>
      {/* on click show more info */}
      <button className="event-button">Больше</button>
    </div>
  );
};

export default EventCard;
