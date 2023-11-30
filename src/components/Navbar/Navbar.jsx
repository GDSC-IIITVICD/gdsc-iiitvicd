// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
// import gdsc_logo from '../../assets/DSC IIITV International Campus, Diu Light Horizontal-Logo.png'
import SvgLogo from "../SVG_Logos/SvgLogo.jsx";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isTeamMenuOpen, setTeamOpen] = useState(false);
  const [isMiniNavOpen, setMiniNav] = useState(false);
  // useEffect(() => {
  //     document.addEventListener('DOMContentLoaded', () => {
  //
  //         const dropdownButton = document.getElementsByClassName('dropdown-toggle')
  //         const dropdownContent = document.getElementsByClassName('team-menu')
  //         document.addEventListener('click', (event) => {
  //             console.log(event.target)
  //             if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
  //                 setTeamOpen(false)
  //             }
  //         })
  //     });
  // }, [])

  return (
    <>
      <header className={"navs"}>
        <div className={"navbar navbar-secondary"} role={"navigation"}>
          <div className={"container"}>
            <div className={"navbar-left"}>
              <a className={"navbar-brand"} href={"/"}>
                <img
                  src={"/GDSC_IIITVICD.svg"}
                  className={"svg"}
                  alt={"Google Developer Student Clubs IIITV-ICD logo"}
                />
              </a>
            </div>
            <button
              type={"button"}
              className={"navbar-toggle collapsed"}
              onClick={() => setMiniNav((prevState) => !prevState)}
            >
              <SvgLogo name={isMiniNavOpen ? "cross" : "ham"} />
            </button>
            <div
              className={`collapse navbar-collapse ${
                isMiniNavOpen ? "in" : ""
              }`}
              id={"main-nav"}
            >
              <ul className={"navbar-right"}>
                <li className={"navbar-menu"}>
                  <a href={"/#about-us"}>About Us</a>
                </li>
                <li className={"navbar-menu"}>
                  <a href={"/#events"}>Events</a>
                </li>
                <li className={`navbar-menu${isTeamMenuOpen ? " open" : ""}`}>
                  <a
                    href={""}
                    className={"dropdown-toggle"}
                    id={"involved-menu"}
                    data-toggle={"dropdown"}
                    aria-expanded={isTeamMenuOpen}
                    onClick={(event) => {
                      event.preventDefault();
                      setTeamOpen((prevState) => !prevState);
                    }}
                  >
                    Our Team
                    <span className={"caret"}></span>
                  </a>

                  <ul className={"team-menu dropdown-menu"} role={"menu"}>
                    <li role={"presentation"}>
                      <Link
                        role={"menu-item"}
                        tabIndex={-1}
                        to={"/leads"}
                        onClick={(event) => {
                          setTeamOpen((prevState) => !prevState);
                        }}
                      >
                        Leads
                      </Link>
                    </li>
                    {/* <li role={"presentation"}>
                      <Link role={"menu-item"} tabIndex={-1} to={"/alumni"}>
                        Alumni
                      </Link>
                    </li> */}
                    <li role={"presentation"}>
                      <Link
                        role={"menu-item"}
                        tabIndex={-1}
                        to={"/volunteers"}
                        onClick={(event) => {
                          setTeamOpen((prevState) => !prevState);
                        }}
                      >
                        Volunteers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={"navbar-menu"}>
                  <a
                    href={
                      "https://gdsc.community.dev/indian-institute-of-information-technology-vadodara-international-campus-diu-diu/"
                    }
                    aria-label={"JoinUs"}
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
