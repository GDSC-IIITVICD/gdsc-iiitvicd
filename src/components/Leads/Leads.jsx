import React from "react";
import image_bg from "/LeadsBackground.png";
import "./Leads.scss";
const Leads = () => {
  return (
    <div className={"Leads"}>
      <img className={"bg-image"} src={image_bg} alt="bg-image" />
      <div className={"bg-leads"}>white</div>
    </div>
  );
};

export default Leads;