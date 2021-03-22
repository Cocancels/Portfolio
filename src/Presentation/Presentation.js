import "./Presentation.css";
import React, { useState, useEffect } from "react";
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

  function showContent() {
    setTimeout(() => {
      setPresentationTraitHeight({ height: "500px" });
    }, 500);
  }

  return (
    <main name="main" onMouseEnter={showContent} className="presentation">
      <div style={presentationTraitHeight} className="presentation-trait"></div>
    </main>
  );
}
