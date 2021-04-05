import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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

  const [navHeight, setNavHeight] = useState();

  const [burgerDisplay, setBurgerDisplay] = useState({
    display: "block",
    opacity: "1",
  });

  const [responsiveDisplay, setResponsiveDisplay] = useState();

  const [navOn, setNavOn] = useState(false)


  function showNav() {
    if (window.innerWidth> 1024) {
      if (navDisplay.display != "flex" && navDisplay.opacity != "1") {
        setNavHeight({ height: "80px" });
        setNavDisplay({ display: "flex", opacity: "0" });
        setBurgerDisplay({ display: "block", opacity: "0" });

        setTimeout(() => {
          setNavDisplay({ display: "flex", opacity: "1" });
          setBurgerDisplay({ display: "none", opacity: "0" });
        }, 100);
      }
    } 
  }


  function hideNav() {
    if (window.innerWidth >   1024) {
      if (navDisplay.display != "none" && navDisplay.opacity != "0") {
        setNavHeight({ height: "20px" });
        setNavDisplay({ display: "flex", opacity: "0" });

        setTimeout(() => {
          setNavDisplay({ display: "none", opacity: "0" });
          setBurgerDisplay({ display: "block", opacity: "0" });
          setTimeout(() => {
            setBurgerDisplay({ display: "block", opacity: "1" });
          }, 100);
        }, 200);
      }
    }
  }

  function responsiveNavAnimation() {
    if(window.innerWidth <= 1024 && navOn === false){
      setNavOn(true)
      setNavHeight({height: "100vh", transition: "1s"})
      setNavDisplay({display: "flex", opacity: "0"})
      setBurgerDisplay({display: "flex", opacity: "0", transition: "0.25s"})
      setTimeout(() => {
        setNavDisplay({display: "flex", opacity: "1", transition: "1s"})
        setBurgerDisplay({display: "flex", opacity: "1", transition: "0.25s"})
      }, 500)
    } else if (window.innerWidth <= 1024 && navOn === true){
      setNavOn(false)
      setNavHeight({height: "30px"})
      setNavDisplay({display: "flex", opacity: "0", transition: "1s"})
      setBurgerDisplay({display: "flex", opacity: "0", transition: "0.25s"})

      setTimeout(() => {
        setNavDisplay({display: "none", opacity: "0", transition: "1s"})
        setBurgerDisplay({display: "flex", opacity: "1", transition: "0.25s"})

      }, 500)

    }
  }

  return (
    <nav
      style={navHeight}
      onMouseEnter={showNav}
      onMouseLeave={hideNav}
      id="navbar"
    >
      <FontAwesomeIcon
        onClick={responsiveNavAnimation}
        style={burgerDisplay}
        id="burger-icon"
        icon={faBars}
      />

      <img
        timer={1000}
        style={navDisplay}
        src="./logos/logo_big_border_red.png"
        alt="logo"
        className="nav-logo"
      />
      <ul className="navLinks" style={navDisplay}>
        <li>
          <Link
            activeClass="active"
            className="navlink navHome"
            to="header-presentation"
            smooth={true}
            duration={1000}
            onClick={responsiveNavAnimation}
          >
            Accueil
          </Link>
        </li>

        <hr></hr>
        <li>
          <Link
            activeClass="active"
            className="navlink navPresentation"
            to="presentation"
            smooth={true}
            duration={1000}
            onClick={responsiveNavAnimation}
          >
            A propos
          </Link>
        </li>
        <hr></hr>

        <li>
          {" "}
          <Link
            activeClass="active"
            className="navlink navProjets"
            to="projets"
            smooth={true}
            duration={1000}
            onClick={responsiveNavAnimation}
          >
            Projets
          </Link>
        </li>
        <hr></hr>
      </ul>
    </nav>
  );
}
