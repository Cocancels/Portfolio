import React, { useState, useEffect } from "react";
import "./Projets.css";
import ProjetsList from "./projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function Projets() {
  const allProjects = ProjetsList.map((element) => {
    return (
      <div class="projet-container" key={element}>
        <img src={element.image}></img>
        <div class="projet-content">
          <p class="projet-name">{element.name}</p>
          <p class="projet-description">{element.description}</p>
          <p class="projet-languages">
            Langages: <br></br>
            {element.languages}
          </p>
          <a href={element.link} class="projet-link">
            <FontAwesomeIcon id="arrow-right" icon={faArrowCircleRight} />
          </a>
        </div>
      </div>
    );
  });
  console.log(allProjects);

  return (
    <section name="projets" className="projets">
      <h1>Mes projets</h1>
      <div class="allProjets">{allProjects}</div>
    </section>
  );
}
