export interface EventCardProps {
  title: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

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
    <div className="event-card">
      <div
        className="event-image"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      ></div>
      <div className="event-info">
        <h3>{title}</h3>
        <div className="event-date">{date}</div>
        <p>{description}</p>
      </div>
      <button className="event-button" onClick={handleButtonClick}>
        Узнать больше
      </button>
    </div>
  );
};

export default EventCard;
