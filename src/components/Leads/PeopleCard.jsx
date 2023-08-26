import React from "react";
import "./PeopleCard.scss";
import SvgLogo from "../SVG_Logos/SvgLogo.jsx";
import tempImg from "/contact.jpeg"
const PeopleCard = (props) => {
    const {image, name, domain, contact} = props;
    return (
        <div className={`outer-card card-${props?.index}`}>
            <div className="person-card">
                <div className={"profile-pic"}>
                        <img src={image||tempImg} alt="lead"/>
                </div>
                <div className={"details"}>
                    <h2>{name}</h2>
                    <p>{domain}</p>
                    <p className={"links"}>
                        {Object.entries(contact).map(([platform, link], index) =>
                            <a href={link.toString()} key={index}>
                                <SvgLogo name={platform}/>
                            </a>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PeopleCard;
