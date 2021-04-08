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
        smooth={true}
        duration={1000}
      >
        <div className="bubble" id="bubble-header"></div>
      </Link>

      <Link
        activeClass="active"
        className="button-link"
        to="presentation"
        smooth={true}
        duration={1000}
      >
        <div className="bubble" id="bubble-presentation"></div>
      </Link>

      <Link
        activeClass="active"
        className="button-link"
        to="projets"
        smooth={true}
        duration={1000}
      >
        <div className="bubble" id="bubble-projets"></div>
      </Link>
    </div>
  );
}
