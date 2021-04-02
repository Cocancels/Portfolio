import "./Competences.css";
import { Navlinks } from "../NavLinks/Navlinks";

import React, { useState, useEffect } from "react";
import CompetencesList from "./competences.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function Competences() {
  const [competenceTraitHeight, setCompetenceTraitHeight] = useState({height : "0px", transition: "0s"})
  const [competenceDisplay, setCompetenceDisplay] = useState({display: "none", opacity: "0", transform: "translateY(-50px)", transition: "0s"})
  const [competenceList1Display, setCompetenceList1Display] = useState({display: "none", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
  const [competenceList2Display, setCompetenceList2Display] = useState({display: "none", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
  const [competenceList3Display, setCompetenceList3Display] = useState({display: "none", opacity: "0", transition: "0s", transform: "translateY(-50px)"})


  const [ref, inView] = useInView({
    threshold: 0,
    delay: 700
  });

  useEffect(() => {
    if(inView){
      competenceAnimation()
    } else {
      setCompetenceTraitHeight({height: "0px", transition: "0s"})
      setCompetenceDisplay({display: "none", opacity: "0", transition: "0s"})
    }
  }, [inView])


  function competenceAnimation(){
    setCompetenceDisplay({display: "block", opacity: "0", transform: "translateY(-50px)" ,transition: "0s"})
    setTimeout(() => {
      setCompetenceDisplay({display: "block", opacity: "1", transform: "translateY(0px)", transition: "1s"})
      setTimeout(() => {
        setCompetenceTraitHeight({height: "700px", transition: "1s"})
      }, 100)
    }, 100)
  }
  

  return (
    <div  ref={ref} className="competences">
      <div className="competences-section">
        <div style={competenceTraitHeight} className="competence-trait"></div>
        <div style={competenceDisplay} className="competences-container">
          <p>Compétences</p>
          <div className="competences-list-container">
            <div className="competences-list-avance">
                <p>Avancé</p>
                <div className="competences-images-avance">
                  <img className="competences-image" src="./logos/logo-laravel.png" />
                  <img className="competences-image" src="./logos/logo-symfony.png" />
                  <img className="competences-image" src="./logos/php-logo.png" />
                </div>
            </div>
            <div className="competences-list-avance">
                <p>Intermédiaire</p>
                <div className="competences-images-avance">
                  <img className="competences-image" src="./logos/logo-react.png" />
                  <img className="competences-image" src="./logos/logo-saas.png" />
                  <img className="competences-image" src="./logos/logo-js.png" />
                </div>
            </div>
            <div className="competences-list-avance">
                <p>Débutant</p>
                <div className="competences-images-avance">
                  <img className="competences-image" src="./logos/logo-node.png" />
                  <img className="competences-image" src="./logos/logo-vue.png" />
                </div>
            </div>


          </div>
        </div>
      </div>
      <div className="navlinks-competences" style={competenceDisplay}>
              <Navlinks
                links={[
                  {
                    link: "header-presentation",
                    name: "Accueil",
                  },
                  {
                    link: "presentation",
                    name: "Présentation",
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
