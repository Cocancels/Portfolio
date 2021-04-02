import "./Presentation.css";
import { Navlinks } from "../NavLinks/Navlinks";
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
    height: "0px",
  });

  const [presentationContent, setPresentationContent] = useState({
    display: "none",
    opacity: "0",
    transform: "translateX(150px)",
  });


  const [buttonDisplay, setButtonDisplay] = useState({
    display: "none",
    opacity: "0",
  });
  

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 700
  });

  const [animationState, setAnimationState] = useState(false);

  

  useEffect(() => {
    if (inView) {
      presentationAnimation();
    } else {
      setPresentationTraitHeight({height: "0px", transition: "0s"})
      setPresentationContent({display: "none", opacity: "0", transform: "translateX(150px)"})
      setButtonDisplay({display: "none", opacity: "0", transform: "translateX(150px)"})
    }
  }, [inView]);


  function presentationAnimation() {
    setPresentationTraitHeight({height: "400px", transition: "1s"})
    setPresentationContent({display: "block", opacity: "0", transform: "translateX(150px)"})
    setButtonDisplay({display: "flex", opacity: "0"})
    setTimeout(() => {
      setPresentationContent({opacity: "1", transform: "translateX(0)", transition: "1s"})
      setButtonDisplay({opacity: "1", transform:"translateX(0)", transition: "1s"})
    }, 300)
  }



  return (
    <div  name="presentation" className="presentation">
      <div id="presentation-container">
        <div
        ref={ref}
          style={presentationTraitHeight}
          className="presentation-trait"
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
      <div className="navlinks-presentation" style={buttonDisplay}>
        <Navlinks 
          links = {[
            {
              link: "header-presentation",
              name: "Accueil"
            },  
            {
              link : "projets",
              name: "Projets"
            },
            {
              link : "competences",
              name: "Competences"
            }]}
        />
      </div>
    </div>
  );
}
