import "./Presentation.css";
import { Navlinks } from "../NavLinks/Navlinks";
import React, { useState, useEffect } from "react";
import {useInView} from 'react-intersection-observer';
import listeCompetences from './competences.json'

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
    delay: 0,
  });

  const allCompetences = listeCompetences.map((competence, i) => {
    return (
      <div key={i} className="logo-competence">
        <img alt="competence" src={"./logos/" + competence.image} />
      </div>
    );
  });

  useEffect(() => {
    if (inView) {
      presentationAnimation();
      changeBubble();
    } else {
      setPresentationTraitHeight({ height: "0px", transition: "0s" });
      setPresentationContent({
        display: "none",
        opacity: "0",
        transform: "translateX(150px)",
      });
      setButtonDisplay({
        display: "none",
        opacity: "0",
        transform: "translateX(150px)",
      });
    }
  }, [inView]);

  function presentationAnimation() {
    setPresentationTraitHeight({ height: "300px", transition: "1s" });
    setPresentationContent({
      display: "block",
      opacity: "0",
      transform: "translateX(150px)",
    });
    setButtonDisplay({ display: "flex", opacity: "0" });
    setTimeout(() => {
      setPresentationContent({
        opacity: "1",
        transform: "translateX(0)",
        transition: "1s",
      });
      setButtonDisplay({
        opacity: "1",
        transform: "translateX(0)",
        transition: "1s",
      });
    }, 300);
  }

  function changeBubble() {
    var bubbles = document.getElementsByClassName("bubble");
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].style.backgroundColor = "#0E0E0E";
    }
    document.getElementById("bubble-presentation").style.backgroundColor =
      "#EC6D53";
  }

  return (
    <div name="presentation" className="presentation">
      <div id="presentation-container">
        <div
          ref={ref}
          style={presentationTraitHeight}
          className="presentation-trait"
        ></div>
        <div id="presentation-content" style={presentationContent}>
          <h1>A propos</h1>
          <p>
            Bonjour ! Moi c'est Corentin, j'ai 19 ans et je suis actuellement à
            l'institut de l'Internet et du Multimédia, en développement web. Je
            suis passionné par le développement depuis plusieurs années
            maintenant, plus particulièrement au niveau Back-End (j'utilise
            beaucoup Laravel et Symfony). Mon objectif est de me lancer en
            freelance, pour pouvoir être indépendant.
          </p>
        </div>
      </div>
      <div id="competences-container">
        <div
          style={presentationTraitHeight}
          className="presentation-trait"
        ></div>
        <div className="competences-content" style={presentationContent}>
          <h1>Compétences</h1>
          <div className="competences-logos">{allCompetences}</div>
        </div>
      </div>
      <div className="navlinks-presentation" style={buttonDisplay}>
        <Navlinks
          links={[
            {
              link: "header-presentation",
              name: "Accueil",
            },
            {
              link: "projets",
              name: "Projets",
            },
          ]}
        />
      </div>
    </div>
  );
}
