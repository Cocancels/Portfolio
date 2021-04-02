import { Navbar } from "../Navbar/Navbar";
import { Navlinks } from "../NavLinks/Navlinks";
import "./Header.css";
import React, { useState, useEffect, useRef } from "react";
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


export function Header() {
  const [leftTraitHeight, setLeftTraitHeight] = useState({ height: "0px" });
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [titleCaret, setTitleCaret] = useState("");
  const [subTitleCaret, setSubTitleCaret] = useState("");
  const [icon1Display, setIcon1Display] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(50px)",
  });
  const [icon2Display, setIcon2Display] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(50px)",
  });
  const [icon3Display, setIcon3Display] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(50px)",
  });
  const [icon4Display, setIcon4Display] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(50px)",
  });
  const [pictureDisplay, setPictureDisplay] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(-50px)",
  });
  const [buttonDisplay, setButtonDisplay] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(50px)",
  });

  const [linksDisplay, setLinksDisplay] = useState({
    opacity: 0,
    transform: "translateY(10px)",
  });

  const [buttonRotation, setButtonRotation] = useState({
    transform: "rotate(0deg)",
  });
 

  let i = 0;
  let j = 0;
  let fullTitle = "Corentin Ancel";
  let fullSubTitle = "Développeur Web";

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLeftTraitHeight({ height: "400px" });
    setTimeout(() => {
      setTitleCaret("|");
      showTitle();
    }, 1000);
  }, []);

  function showTitle() {
    i++;
    setTitle((title) => title + fullTitle[i - 1]);

    if (i < fullTitle.length) {
      setTimeout(showTitle, 75);
    } else if ((i = fullTitle.length)) {
      setSubTitleCaret("|");
      setTitleCaret("");
      showSubtitle();
    }
  }

  function showSubtitle() {
    j++;
    setSubTitle((subTitle) => subTitle + fullSubTitle[j - 1]);
    if (j < fullSubTitle.length) {
      setTimeout(showSubtitle, 75);
    } else if ((i = fullSubTitle.length)) {
      setSubTitleCaret("");
      showIcons();
    }
  }

  function showIcons() {
    setIcon1Display({
      display: "block",
      opacity: "0",
      transform: "translateY(50px)",
    });

    setTimeout(() => {
      setIcon1Display({
        display: "block",
        opacity: "1",
        transform: "translateY(0px)",
      });
    }, 100);

    setIcon2Display({
      display: "block",
      opacity: "0",
      transform: "translateY(50px)",
    });

    setTimeout(() => {
      setIcon2Display({
        display: "block",
        opacity: "1",
        transform: "translateY(0px)",
      });
    }, 400);

    setIcon3Display({
      display: "block",
      opacity: "0",
      transform: "translateY(50px)",
    });

    setTimeout(() => {
      setIcon3Display({
        display: "block",
        opacity: "1",
        transform: "translateY(0px)",
      });
    }, 700);

    setIcon4Display({
      display: "block",
      opacity: "0",
      transform: "translateY(50px)",
    });

    setTimeout(() => {
      setIcon4Display({
        display: "block",
        opacity: "1",
        transform: "translateY(0px)",
      });
      showPicture();
    }, 1000);
  }

  function showPicture() {
    setPictureDisplay({
      display: "flex",
      opacity: "0",
      transform: "translateY(-50px)",
    });

    setButtonDisplay({
      display: "block",
      opacity: "0",
      transform: "translateY(50px)",
    });

    setTimeout(() => {
      setPictureDisplay({
        display: "flex",
        opacity: "1",
        transform: "translateY(0px)",
      });

      setButtonDisplay({
        display: "block",
        opacity: "1",
        transform: "translateY(0px)",
        transition: "1s",
      });
    }, 100);
  }

  function linkAnimationOn() {
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
    }, 100);
  }

  function linkAnimationOff() {
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
    }, 100);
  }

  return (
    <header>
      <Navbar />
      <div className="header-container">
        <div className="header-presentation">
          <div id="flex-container">
            <div style={leftTraitHeight} className="left-trait"></div>
            <div id="intro-content">
              <div id="intro-text">
                <h1 id="intro-title">
                  {title}
                  {titleCaret}
                </h1>
                <h2 id="intro-subtitle">
                  {subTitle}
                  {subTitleCaret}
                </h2>
              </div>
              <div id="intro-logos">
                <img
                  style={icon1Display}
                  src="./logos/logo_github.svg"
                  alt="logo"
                  className="logo github"
                />
                <img
                  style={icon2Display}
                  src="./logos/logo_linkedin.svg"
                  alt="logo"
                  className="logo linkedin"
                />
                <img
                  style={icon3Display}
                  src="./logos/logo_gmail.svg"
                  alt="logo"
                  className="logo gmail"
                />
                <button style={icon4Display} className="logo cv">
                  CV
                </button>
              </div>
            </div>
          </div>
          <img
            style={pictureDisplay}
            id="profile-picture"
            src="./profile_picture.jpg"
          ></img>
        </div>
      <div className="navlinks-header" style={buttonDisplay}>
        <Navlinks 
          links = {[
            {
              link: "presentation",
              name: "A propos"
            },  
            {
              link : "projets",
              name: "Projets"
            },
            {
              link : "Compétences",
              name: "Competences"
            }]}
        />
        </div>
      </div>
    </header>
  );
}
