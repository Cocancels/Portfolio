import React, { useState, useEffect } from "react";
import "./Navlinks.css";
import { useInView } from "react-intersection-observer";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Navlinks(props) {
  const [linksDisplay, setLinksDisplay] = useState({
    opacity: 0,
    transform: "translateY(10px)",
  });

  const [buttonRotation, setButtonRotation] = useState({
    transform: "rotate(0deg)",
  });

  const [pointer, setPointer] = useState({
    pointerEvents: "none",
  });

  const [isOn, setIsOn] = useState(false);

  const allLinks = props.links.map((item) => {
    return (
      <Link
        activeClass="active"
        className="button-link"
        to={item.link}
        spy={true}
        smooth={true}
        duration={1000}
        style={pointer}
        onClick={linkAnimation}
      >
        {item.name}
      </Link>
    );
  });

  function linkAnimation() {
    if (!isOn) {
      setButtonRotation({
        transform: "rotate(180deg)",
        transition: "0.5s ease-in-out",
      });
      setLinksDisplay({
        opacity: "0",
        transform: "translateY(10px)",
        transition: "0.5s",
      });
      setTimeout(() => {
        setLinksDisplay({
          opacity: "1",
          transform: "translateY(0px)",
          transition: "0.5s",
        });
        setPointer({ pointerEvents: "auto" });
        setIsOn(true);
      }, 100);
    } else {
      setButtonRotation({
        transform: "rotate(0deg)",
        transition: "0.5s ease-in-out",
      });
      setLinksDisplay({
        opacity: "0",
        transform: "translateY(10px)",
        transition: "0.5s",
      });
      setTimeout(() => {
        setLinksDisplay({
          opacity: "0",
          transform: "translateY(10px)",
          transition: "0.5s",
        });
        setPointer({ pointerEvents: "none" });

        setIsOn(false);
      }, 100);
    }
  }

  return (
    <div className="button-container">
      <div style={linksDisplay} className="links-container">
        {allLinks}
      </div>
      <FontAwesomeIcon
        onClick={linkAnimation}
        className="arrow-bottom-navlinks"
        style={buttonRotation}
        icon={faChevronDown}
      />
    </div>
  );
}
