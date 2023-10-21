import React from "react";
import image_bg from "/LeadsBackground.png";
import "./Leads.scss";
import {LeadsDB} from "./LeadsDB";
import PeopleCard from "../PeopleCard/PeopleCard";
import gdsc_lead_photo from "/leadsPhoto.png";

const Leads = () => {
    return (
        <div className={"Leads"}>
            <div className={"bg-leads-intro"}>
                <h1>Meet The Leads</h1>
                <p>
                    Together, we craft a symphony of excellence, fostering an environment
                    where collaboration is our driving force. Our shared journey lights
                    the way, inspiring growth and etching our legacy as a testament to
                    united aspirations.
                </p>
            </div>
            <div className={"bg-leads"}>
                <div className={'bg-leads-inner'}>
                    <div className={'gdsc-lead-container'}>
                        <h2>GDSC Lead 2023</h2>
                        <div className={"gdsc-lead"}>
                            <PeopleCard
                                image={gdsc_lead_photo}
                                name="Ved Vekhande"
                                domain="GDSC Lead"
                                contact={{github: '/link', linkedin: '/link'}}
                                index={0}
                            />
                        </div>
                    </div>
                    <div className={'domain-leads-container'}>
                        <h2>Domain Leads</h2>
                        <div className={"domain-leads"}>
                            {LeadsDB.map((Lead, index) => (
                                <PeopleCard key={index} {...Lead} index={index % 4}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Leads;
