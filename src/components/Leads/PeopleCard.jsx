import React from "react";
import "./PeopleCard.scss";
import SvgLogo from "../SVG_Logos/SvgLogo.jsx";

const PeopleCard = (props) => {
    const {image, name, domain, contact} = props;
    return (
        <div className={`outer-card card-${props?.index}`}>
            <div className="person-card">
                <div className={"profile-pic"}>
                    {/*<div className={'profile-image'}>*/}
                        <img src={'/leadsPhoto.jpg'} alt="lead"/>
                    {/*</div>*/}
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
