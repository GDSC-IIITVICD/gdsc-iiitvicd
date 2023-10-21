// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import hero_logo from "/iiitvicd.svg";
import ParticlesBackground from "./ParticlesBackground";
import { EventsDB } from "./EventsDB";
import "./Home.scss";
import EventCard from "./EventCard";

const Home = () => {
  // useEffect(() => {
  //     const section2 = document.querySelector('.about-us');
  //
  //     window.addEventListener('scroll', () => {
  //         const section1Height = document.querySelector('.header-section').getBoundingClientRect().height;
  //         if (window.scrollY > section1Height * 0.5) { // Adjust the threshold as needed
  //             section2.classList.add('active');
  //         } else {
  //             section2.classList.remove('active');
  //         }
  //     });
  //
  //     const section1 = document.querySelector('.header-section');
  //
  //     window.addEventListener('scroll', () => {
  //         const section2Height = document.querySelector('.about-us').getBoundingClientRect().height;
  //         if (window.scrollY > section2Height * 0.5) { // Adjust the threshold as needed
  //             section1.classList.add('active');
  //         } else {
  //             section1.classList.remove('active');
  //         }
  //     });
  // })

  return (
    <>
      <div className={"header-section"}>
        <div className={"brand"}>
          <img src={hero_logo} alt="GDSC IIITV-ICD" />
          <a>JOIN US</a>
        </div>
        <div className={"animation_bg"}>
          <ParticlesBackground />
        </div>
      </div>
      <div id={"about-us"} className={"about-us"}>
        <div className={"about-us-inner"}>
          <div className={"about-us-info"}>
            <h1>Google Developers Student Club</h1>
            <span>IIITV-ICD</span>
            <p>
              Google Developer Student Clubs are university based community
              groups for students interested in Google developer technologies.By
              joining a GDSC, students grow their knowledge in a peer-to-peer
              learning environment and build solutions for local businesses and
              their community.
            </p>
          </div>
          <img src={"/about-image.svg"} />
        </div>
      </div>
      <div id={"events"} className={"events"}>
        <div className={"inner-events"}>
          <h2>Recent Events</h2>
          <div className={"all-event-cards"}>
            {EventsDB.map((evento, index) => (
              <EventCard key={index} {...evento} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
