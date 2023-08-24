import React from "react";
import "./PeopleCard.scss";
const PeopleCard = (props) => {
  const { image, name, domain, contact } = props;
  return (
    <div className="outer-card">
      <div className="person-card">
        <div className={"profile-pic"}>
          <img src={image} alt="lead" />
        </div>
        <div className={"details"}>
          <h2>{name}</h2>
          <p>{domain}</p>
          <p className={"links"}>
            {contact.map((link, index) => (
              <a href={link} key={index}>
                {link}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
