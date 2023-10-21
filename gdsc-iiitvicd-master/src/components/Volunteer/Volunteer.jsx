import React from "react";
import image_bg from "/LeadsBackground.png";
import "../Leads/Leads.scss";
import {VolunteerDB} from "./VolunteerDB";
import PeopleCard from "../PeopleCard/PeopleCard";
import gdsc_lead_photo from "/leadsPhoto.png";

const Volunteer = () => {
    return (
        <div className={"Leads"}>
            <div className={"bg-leads-intro"}>
                <h1>Meet The Volunteer</h1>
                <p>
                    Together, we craft a symphony of excellence, fostering an environment
                    where collaboration is our driving force. Our shared journey lights
                    the way, inspiring growth and etching our legacy as a testament to
                    united aspirations.
                </p>
            </div>
            <div className={"bg-leads"}>
                <div className={'bg-leads-inner'}>
                    <div className={'domain-leads-container'}>
                        <h2>Vounteer</h2>
                        <div className={"domain-leads"}>
                            {VolunteerDB.map((Lead, index) => (
                                <PeopleCard key={index} {...Lead} index={index % 4}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Volunteer;
