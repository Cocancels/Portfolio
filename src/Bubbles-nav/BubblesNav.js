import "./BubblesNav.css";
import React from "react";
import {
  Link,
} from "react-scroll";


export function BubblesNav() {
  return (
    <div className="bubbles">
      <Link
        activeClass="active"
        className="button-link"
        to="header-container"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className="bubble" id="bubble-header"></div>
      </Link>

      <Link
        activeClass="active"
        className="button-link"
        to="presentation"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className="bubble" id="bubble-presentation"></div>
      </Link>
      <Link
        activeClass="active"
        className="button-link"
        to="projets"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className="bubble" id="bubble-projets"></div>
      </Link>
    </div>
  );
}
