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
    height: "0px",
  });

  const [presentationTitle, setPresentationTitle] = useState("")
  const [presentationText, setPresentationText] = useState("")
  const [presentationTitleCaret, setPresentationTitleCaret] = useState("")
  const [presentationTextCaret, setPresentationTextCaret] = useState("")
  const [buttonsDisplay, setButtonsDisplay] = useState({display: "none", opacity: "0", tranform: "translateX(150px)"})
  const [ref, inView] = useInView({
    threshold: 0
  })

  const [isDone, setIsDone] = useState(false)
  let i = 0
  let j = 0
  let fullPresentationTitle = "About me"
  let fullPresentationText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


  useEffect(() => {
    if(inView){
         setTimeout(showContent, 300)
         console.log(inView)
    }
  }, [inView])


  function showContent() {
    if(!isDone){
      if(presentationTraitHeight != "300px"){
        setPresentationTraitHeight({ height: "300px" }); 
      }
      setTimeout(showTitle, 1100)
      setTimeout(showButtons, 1100)
      setIsDone(true)
    }
  }

  function showTitle(){
    setPresentationTitleCaret("|")

    i++
    setPresentationTitle(presentationTitle => presentationTitle + fullPresentationTitle[i - 1])
    if(i < fullPresentationTitle.length){
      setTimeout(showTitle, 100)
    } else{
      setPresentationTitleCaret("")
      setPresentationTextCaret("|")
      setTimeout(showText, 500)
    }
  }

  function showText(){
    j++
    setPresentationText(presentationText => presentationText + fullPresentationText[j - 1])
    if(j < fullPresentationText.length){
      setTimeout(showText, 10)
    } else{
      setPresentationTextCaret("0")
    }
  }

  function showButtons(){
    setButtonsDisplay({display: "flex", opacity: "0", tranform: "translateX(150px)"})

    setTimeout(() => {
      setButtonsDisplay({display: "flex", opacity: "1", tranform: "translateX(0px)"})
    }, 100)
  }




  return (
    <main
      name="main"
      onMouseEnter={showContent}
      className="presentation"
    >
      <div id="presentation-container">
        <div style={presentationTraitHeight} className="presentation-trait"></div>
        <div id="presentation-content" ref={ref}>
          <h1>{presentationTitle}{presentationTitleCaret}</h1>
          <p>{presentationText}{presentationTextCaret}</p>
        </div>
      </div>
      <div id="buttons-container" style={buttonsDisplay}>
        <div id="button-see-project">
          <h3>Voir les projets</h3>
          <div className="button-content">
            <p>En cliquant sur le bouton ci-contre, vous aurez accès à mes différents projets</p>
            <button> <Link
            activeClass="active"
            className="projects-link"
            to="header-presentation"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <FontAwesomeIcon
              id="arrow-right"
              icon={faArrowCircleRight}
            />
          </Link>
            </button>
          </div>
        </div>

        <div id="button-see-project" >
          <h3>Contactez-moi</h3>
          <div className="button-content">
            <p>Github, LinkedIn, Gmail ... N'hésitez pas à me contacter ! </p>
            <button> <Link
            activeClass="active"
            className="projects-link"
            to="header-presentation"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <FontAwesomeIcon
              id="arrow-right"
              icon={faArrowCircleRight}
            />
          </Link>
            </button>
          </div>
        </div>
      </div>
    
    </main>
  );
}
