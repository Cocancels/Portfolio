import React, { useState } from "react";
import "./Navbar.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function Navbar() {
  const [navDisplay, setNavDisplay] = useState({
    opacity: "0",
    display: "none",
  });

  const [navHeight, setNavHeight] = useState({
    height: "20px",
  });

  function showNav() {
    if (navDisplay.display != "flex" && navDisplay.opacity != "1") {
      setNavHeight({ height: "80px" });
      setNavDisplay({ display: "flex", opacity: "0" });

      setTimeout(() => {
        setNavDisplay({ display: "flex", opacity: "1" });
      }, 100);
    }
  }

  function hideNav() {
    if (navDisplay.display != "none" && navDisplay.opacity != "0") {
      setNavHeight({ height: "20px" });
      setNavDisplay({ display: "flex", opacity: "0" });
      setTimeout(() => {
        setNavDisplay({ display: "none", opacity: "0" });
      }, 300);
    }
  }

  return (
    <nav
      style={navHeight}
      onMouseEnter={showNav}
      onMouseLeave={hideNav}
      id="navbar"
    >
      <img
        timer={1000}
        style={navDisplay}
        src="./logos/logo_big_border_red.png"
        alt="logo"
      />
      <ul className="navLinks" style={navDisplay}>
        <li>
          <Link
            activeClass="active"
            className="navlink navHome"
            to="header-presentation"
            smooth={true}
            duration={1000}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            className="navlink navPresentation"
            to="presentation"
            smooth={true}
            duration={1000}
          >
            A propos
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            className="navlink navProjets"
            to="projets"
            smooth={true}
            duration={1000}
          >
            Projets
          </Link>
        </li>
      </ul>
    </nav>
  );
}
