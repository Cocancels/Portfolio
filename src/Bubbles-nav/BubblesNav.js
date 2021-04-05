import "./BubblesNav.css";
import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function BubblesNav() {
  return (
    <div className="bubbles">
      <div className="bubble" id="bubble-header"></div>

      <div className="bubble" id="bubble-presentation"></div>

      <div className="bubble" id="bubble-projets"></div>
    </div>
  );
}
