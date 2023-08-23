import React from "react";
import hero_logo from "../../assets/DSC IIITV International Campus, Diu Light Horizontal-Logo.png";
import ParticlesBackground from "./ParticlesBackground";
import "./Home.scss"
const Home = () => {
  return (
    <div className={"Home"}>
      <div className={'image'}>
        <img src={hero_logo} alt="GDSC IIITV-ICD" />
      </div>
      <div className={"animation_bg"}><ParticlesBackground /></div>
    </div>
  );
};

export default Home;
