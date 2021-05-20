import React, { useState, useEffect, useRef } from "react";
import "./Projets.css";
import ProjetsList from "./projets.json";
import { Navlinks } from "../NavLinks/Navlinks";
import {useInView} from 'react-intersection-observer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


export function Projets() {
    const [i, setI] = useState(0);
    const [projetContainerDisplay, setProjetContainerDisplay] = useState({display: "none", opacity: "0", transform: "translateY(-50px)", transition: "0"})
    const [projetDisplay, setProjetDisplay] = useState({opacity: "1", transform: "translateX(0)", transition:"0"})
    const [animationState, setAnimationState] = useState(false)  
    const [buttonDisplay, setButtonDisplay] = useState({display: "none", opacity: "0", transition: "0s"})
    const [ref, inView] = useInView({
      threshold: 0,
      delay: 0,
    });
  
    const prevIRef = useRef();
    useEffect(() => {
      function changeColor(){
        if(prevIRef.current != null){
          document.getElementById("buttonProject" + i).style.color = "#D5625D"
          document.getElementById("buttonProject" + prevIRef.current).style.color= "white"
        }
      }
      changeColor()
      prevIRef.current = i;
    },[i]);

    useEffect(() => {
      if (inView) {
        changeBubble();
        showProjectContainer();
      } else {
        setProjetContainerDisplay({
          display: "none",
          opacity: "0",
          transform: "translateY(-50px)",
          transition: "0s",
        });
        setButtonDisplay({ display: "none", opacity: "0" });
      }
    },[inView])



    const allProjects = ProjetsList.map((project, i) => {
    return (
      <div key={i} style={projetDisplay} className="projet-container">
        <img alt="projet" className="projet-image" src={project.image}></img>
        <div className="projet-content">
          <p className="projet-name">{project.name}</p>
          <p className="projet-description">{project.description}</p>
          <div id="flex-container-projet">
            <div className="projet-languages">
                <div className="projet-languages-logos">
                {project.languages.map((element, i) => {
                    return(
                        <img key={i} alt="langage" className="language-logo" src={"./logos/" + element}></img>
                    )
                })}
                </div>
            </div>
            <a href={project.link} className="projet-link">
                <FontAwesomeIcon id="arrow-right-projet"  icon={faArrowCircleRight} />
            </a>
          </div>
        </div>
      </div>
    )
  });

  const divNumber = ProjetsList.map((idProject, i) => {
    return (
      <div key={i} onClick={() => goToProject(ProjetsList.indexOf(idProject))} value={ProjetsList.indexOf(idProject)} className="buttonProject" id={"buttonProject" + ProjetsList.indexOf(idProject)}>
          <FontAwesomeIcon icon={faCircle} />
      </div>
    )
  })

  function showProjectContainer(){
    setButtonDisplay({display: "block", opacity: "0", transition: "1s"})
    setProjetContainerDisplay({
      display: "flex",
      opacity: "0",
      transform: "translateY(-50px)",
      transition: "1s",
    });
    setTimeout(() => {
      setButtonDisplay({display: "block", opacity: "1", transition: "1s"})
      setProjetContainerDisplay({display: "flex", opacity: "1", transform:"translateY(0px)", transition: "1s"})
    }, 100)
  }

  function changeProjetMinus(){
    if(!animationState){
      setAnimationState(true)
      setTimeout(() => {
        if(i > 0){
          setI(i => i-1)
        } else {
          setI(allProjects.length-1)
        }
      }, 500)
      fadeAnimation("minus")
    }
    }
    

  function changeProjetPlus(){
    if(!animationState){
      setAnimationState(true)
      setTimeout(() => {
        if(i < allProjects.length-1){
          setI(i => i+1)
        } else {
          setI(0)
        }
      }, 500)
      fadeAnimation("plus")
  
    }
  }



  function fadeAnimation(sign){
    if(sign === "minus"){
      setProjetDisplay({ opacity:"0", transform: "translateX(-150px)", transition:"0.5s"})
      setTimeout(() => {
        setProjetDisplay({opacity:"0", transform: "translateX(300px)", transition:"0"})
        setTimeout(() =>{
          setProjetDisplay({opacity:"0", transform: "translateX(150px)", transition:"0s"})
          setProjetDisplay({ opacity:"1", transform: "translateX(0px)",transition:"0.5s"})
  
        }, 200)
        setTimeout(() => {
          setAnimationState(false)
        }, 500)
      }, 500)

     
    } else if(sign === "plus" ){
      setProjetDisplay({ opacity:"0", transform: "translateX(150px)", transition:"0.5s"})
      setTimeout(() => {
        setProjetDisplay({opacity:"0", transform: "translateX(-300px)", transition:"0"})
        setTimeout(() =>{
          setProjetDisplay({opacity:"0", transform: "translateX(-150px)", transition:"0s"})
          setProjetDisplay({ opacity:"1", transform: "translateX(0px)",transition:"0.5s"})
        }, 200)
        setTimeout(() => {
          setAnimationState(false)
        }, 500)
      }, 500)
      
    } else if(sign === "any"){
      setProjetDisplay({ opacity:"0", transform: "translateX(0px)", transition:"0.5s"})
      setTimeout(() => {
        setProjetDisplay({opacity:"0", transform: "translateX(0px)", transition:"0"})
        setTimeout(() =>{
          setProjetDisplay({opacity:"0", transform: "translateX(0px)", transition:"0s"})
          setProjetDisplay({ opacity:"1", transform: "translateX(0px)",transition:"0.5s"})
        }, 200)
        setTimeout(() => {
          setAnimationState(false)
        }, 500)
      }, 500)
    }
  }

  function goToProject(id){
    if(!animationState){
      setAnimationState(true)
      setTimeout(() => {
        setI(id);
      }, 550);
      fadeAnimation("any")
  }
  }

  function changeBubble() {
    var bubbles = document.getElementsByClassName("bubble");
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].style.backgroundColor = "#0E0E0E";
    }
    document.getElementById("bubble-projets").style.backgroundColor =
      "#EC6D53";
  }


  return (
    <div ref={ref} name="projets" className="projets">
      <div></div>
      <div className="section-projets-container">
        <div className="projets-container">
          <div className="projets-title">
            <h1 style={projetContainerDisplay}>Mes projets</h1>
          </div>
          <div style={projetContainerDisplay} className="allProjets">
            {allProjects[i]}
          </div>
          <div style={projetContainerDisplay} id="buttons-project-container">
            <button onClick={changeProjetMinus} id="changeProjetMinus">
              {" "}
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="div-number-container">{divNumber}</div>
            <button onClick={changeProjetPlus} id="changeProjetPlus">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
