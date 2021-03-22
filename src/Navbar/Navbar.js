import React, { useState } from "react";
import "./Navbar.css";

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
      <ul style={navDisplay}>
        <li>Accueil</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
