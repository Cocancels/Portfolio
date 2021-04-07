import { Navbar } from "../Navbar/Navbar";
import { Navlinks } from "../NavLinks/Navlinks";
import "./Header.css";
import {useInView} from 'react-intersection-observer'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";



export function Header() {
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
  const [buttonDisplay, setButtonDisplay] = useState({
    display: "none",
    opacity: "0",
    transform: "translateY(50px)",
  });

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 0
  });

  const [animationState, setAnimationState] = useState(false)

  let i = 0;
  let j = 0;
  let fullTitle = "Corentin Ancel";
  let fullSubTitle = "Développeur Web";


  useEffect(() => {
    if(inView){
      changeBubble()
      if(!animationState){
        setAnimationState(true)
        setTimeout(() => {
          setTitleCaret("|");
          showTitle();
      }, 1000);
      }
    }
  }, [inView]);

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
    setButtonDisplay({
      display: "block",
      opacity: "0",
      transform: "translateY(50px)",
    });

    setTimeout(() => {
      setButtonDisplay({
        display: "block",
        opacity: "1",
        transform: "translateY(0px)",
        transition: "1s",
      });
    }, 100);
  }


  function changeBubble() {
    var bubbles = document.getElementsByClassName("bubble");
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].style.backgroundColor = "#0E0E0E";
    }
    document.getElementById("bubble-header").style.backgroundColor =
      "#EC6D53";
  }


  return (
    <header ref={ref}>
      <Navbar />
      <div className="header-container">
        <div className="header-presentation">
          <div id="flex-container">
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
                <a href="https://github.com/Cocancels">
                    <img
                      style={icon1Display}
                      src="./logos/logo_github.svg"
                      alt="logo"
                      className="logo github"
                    />
                </a>
                <a href="https://www.linkedin.com/in/corentin-ancel-1b4360195/">
                  <img
                    style={icon2Display}
                    src="./logos/logo_linkedin.svg"
                    alt="logo"
                    className="logo linkedin"
                  />
                </a>
                <a href="mailto:corentinancel@gmail.com">
                  <img
                    style={icon3Display}
                    src="./logos/logo_gmail.svg"
                    alt="logo"
                    className="logo gmail"
                  />
                </a>

                <a href="./Corentin_Ancel_CV.pdf" className="cv" download>
                <FontAwesomeIcon  icon={faFileDownload}
                      style={icon4Display}
                      src="./logos/logo.png"
                      alt="logo"
                      className="logo curri"
                    />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="navlinks-header" style={buttonDisplay}>
          <Navlinks
            links={[
              {
                link: "presentation",
                name: "A propos",
              },
              {
                link: "projets",
                name: "Projets",
              },
            ]}
          />
        </div> */}
      </div>
    </header>
  );
}
