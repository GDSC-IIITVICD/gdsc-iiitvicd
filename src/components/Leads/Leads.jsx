import React from "react";
import image_bg from "/LeadsBackground.png";
import "./Leads.scss";
import { LeadsDB } from "./LeadsDB";
import PeopleCard from "./PeopleCard";
import gdsc_lead_photo from "/leadsPhoto.png";
const Leads = () => {
  return (
    <div className={"Leads"}>
      <div className={"bg-leads-intro"}>
        {/* <img className={""} src={image_bg} alt="bg-image" /> */}
        <h1>MEET THE LEADS</h1>
        <p>
          Together, we craft a symphony of excellence, fostering an environment
          where collaboration is our driving force. Our shared journey lights
          the way, inspiring growth and etching our legacy as a testament to
          united aspirations.
        </p>
      </div>
      <div className={"bg-leads"}>
        <h2>GDSC Lead 2023</h2>
        <div className={"gdsc-lead"}>
          <PeopleCard
            image={gdsc_lead_photo}
            name="Ved Vekhande"
            domain="GDSC Lead"
            contact={["link1", "link2", "link3"]}
          />
        </div>
        <h2>Domain Leads</h2>
        <div className={"domain-leads"}>
          {LeadsDB.map((Lead, index) => (
            <PeopleCard key={index} {...Lead} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Leads;
