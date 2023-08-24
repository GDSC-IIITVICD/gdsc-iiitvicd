import React from "react";
import "./EventCard.scss";
const EventCard = (props) => {
  const { image, title, date, description, link } = props;
  const truncatedDescription =
    description.length > 300 ? `${description.slice(0, 300)}...` : description;
  return (
    <>
      <div href={link} className={"outer-card-events"}>
        <div className={"inner-card-events"}>
          <div className={"image-event"}>
            <img src={image} alt={title} />
          </div>
          <div className={"details-event"}>
            <a href={link}>{title}</a>
            <span className={"event-date"}>{date}</span>
            <p>{truncatedDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
