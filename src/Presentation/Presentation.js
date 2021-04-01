import "./Presentation.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import {useInView} from 'react-intersection-observer'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function Presentation() {
  const [presentationTraitHeight, setPresentationTraitHeight] = useState({
    height: "1px",
  });

  const [presentationContent, setPresentationContent] = useState({
    display: "none",
    opacity: "0",
    transform: "translateX(150px)",
  });


  const [buttonsDisplay, setButtonsDisplay] = useState({
    display: "none",
    opacity: "0",
    transform: "translateX(150px)",
  });
  
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const [isDone, setIsDone] = useState(false);

  
  let i = 0;
  let j = 0;
  let fullPresentationTitle = "About me";
  let fullPresentationText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  useEffect(() => {
    if (inView) {
      setTimeout(showContent, 300);
    } else {
      setTimeout(() =>{
        setPresentationTraitHeight({height: "0px"})
        setPresentationContent({
          display: "none",
          opacity: "0",
          transform: "translateX(150px)",
        })
        setButtonsDisplay({
          display: "none",
          opacity: "0",
          transform: "translateX(150px)",
        })
        setIsDone(false)
      }, 100);

    }
  }, [inView]);



  function showContent() {
    if (!isDone) {
      if (presentationTraitHeight != "300px") {
        setPresentationTraitHeight({ height: "300px" });
      }
      setTimeout(showPresentationContent, 1000)
      setIsDone(true);
    }
  }

  function showPresentationContent() {
    setPresentationContent({
      display: "block",
      opacity: "0",
      transform: "translateX(150px)",
    })

    setTimeout(() => {
      setPresentationContent({
        display: "block",
        opacity: "1",
        transform: "translateX(0px)",
      });
    }, 100);
    setTimeout(showButtons, 500);

  }



  function showButtons() {
    setButtonsDisplay({
      display: "flex",
      opacity: "0",
      tranform: "translateX(150px)",
    });

    setTimeout(() => {
      setButtonsDisplay({
        display: "flex",
        opacity: "1",
        tranform: "translateX(0px)",
      });
    }, 100);
  }

  return (
    <section name="presentation" className="presentation">
      <div id="presentation-container">
        <div
          style={presentationTraitHeight}
          className="presentation-trait"
          ref={ref}
        ></div>
        <div id="presentation-content" style={presentationContent}>
          <h1>A propos</h1>
          <p>
            Bonjour ! Moi c'est Corentin, j'ai 19 ans et je suis actuellement à l'institut de l'Internet
            et du Multimédia, en développement web. Je suis passionné par le développement depuis plusieurs années maintenant,
            plus particulièrement au niveau Back-End, par exemple les frameworks Laravel et Symfony.
          </p>
        </div>
      </div>
      <div id="buttons-container" style={buttonsDisplay}>
        <div id="button-see-project">
          <h3>Projets</h3>
          <div className="button-content">
            <p>
              Découvrez mes différents projets
            </p>
            <button>
              {" "}
              <Link
                activeClass="active"
                className="projects-link"
                to="projets"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <FontAwesomeIcon id="arrow-right" icon={faArrowCircleRight} />
              </Link>
            </button>
          </div>
        </div>

        <div id="button-see-project">
          <h3>Compétences</h3>
          <div className="button-content">
            <p>Découvrez mes compétences</p>
            <button>
              {" "}
              <Link
                activeClass="active"
                className="projects-link"
                to="header-presentation"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <FontAwesomeIcon id="arrow-right" icon={faArrowCircleRight} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
