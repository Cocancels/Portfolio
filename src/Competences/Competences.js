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
  const allCompetences = CompetencesList.map((competence) => {
    return (
      <div
        className={
          "competence-content competence" +
          CompetencesList.indexOf(competence) +
          "-container"
        }
      >
        <img src={"./logos/" + competence.image} />
        <p>{competence.level}</p>
      </div>
    );
  });

  return (
    <div id="competences">
      <div className="competences-container">
        <div className="left-trait-competences"></div>
        <div className="competences-content">
          <h1>Competences</h1>
          <div className="competences-list">{allCompetences}</div>
        </div>
      </div>
    </div>
  );
}
