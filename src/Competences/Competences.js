import "./Competences.css";
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


  const [animationState, setAnimationState] = useState(false)  
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if(inView){
      if(!animationState){
        setAnimationState(true)
        setTimeout(() => {
          setCompetenceTraitHeight({height: "70%", transition:"1s"})
          setTimeout(() => {
            competenceAnimation()
          }, 800)
        }, 500)
      } 
    } else {
      setCompetenceTraitHeight({height : "0px", transition: "0s"})
      setCompetenceDisplay({display: "none", opacity: "0", transform: "translateY(-50px)", transition: "0s"})
      setCompetenceList1Display({display: "none", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
      setCompetenceList2Display({display: "none", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
      setCompetenceList3Display({display: "none", opacity: "0", transition: "0s", transform: "translateY(-50px)"})


    }
  }, [inView])

  function competenceAnimation(){
      setCompetenceDisplay({display: "block", opacity: "0", transform: "translateY(-50px)", transition: "1s"})
      setTimeout(() => {
        setCompetenceDisplay({display: "block", opacity: "1", transform: "translateY(0px)", transition: "1s"})
        setTimeout(() => {
          setCompetenceList1Display({display: "block", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
          setCompetenceList2Display({display: "block", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
          setCompetenceList3Display({display: "block", opacity: "0", transition: "0s", transform: "translateY(-50px)"})
          setTimeout(() => {
            setCompetenceList1Display({display: "block", opacity: "1", transition: "1s", transform: "translateY(0px)"})
          }, 200)
        }, 350)
        setTimeout(() => {
          setTimeout(() => {
            setCompetenceList2Display({display: "block", opacity: "1", transition: "1s", transform: "translateY(0px)"})
          }, 200)
        }, 700)
        setTimeout(() => {
          setTimeout(() => {
            setCompetenceList3Display({display: "block", opacity: "1", transition: "1s", transform: "translateY(0px)"})
            setAnimationState(false)
          }, 200)
        }, 1050)
      }, 200)
    

  }

  return (
    <div className="competences">
       <div ref={ref} style={competenceTraitHeight} className="competence-trait"></div>
       <div style={competenceDisplay} className="competences-container">
         <p>Compétences</p>
         <div className="competences-list-container">
           <div style={competenceList1Display} className="competences-list-avance">
              <p>Avancé</p>
              <div className="competences-images-avance">
                <img className="competences-image" src="./logos/logo-laravel.png" />
                <img className="competences-image" src="./logos/logo-symfony.png" />
                <img className="competences-image" src="./logos/php-logo.png" />
              </div>
           </div>
           <div style={competenceList2Display}  className="competences-list-avance">
              <p>Intermédiaire</p>
              <div className="competences-images-avance">
                <img className="competences-image" src="./logos/logo-react.png" />
                <img className="competences-image" src="./logos/logo-saas.png" />
                <img className="competences-image" src="./logos/logo-js.png" />
              </div>
           </div>
           <div style={competenceList3Display}  className="competences-list-avance">
              <p>Débutant</p>
              <div className="competences-images-avance">
                <img className="competences-image" src="./logos/logo-node.png" />
                <img className="competences-image" src="./logos/logo-vue.png" />
              </div>
           </div>

         </div>
       </div>
    </div>
  );
}
