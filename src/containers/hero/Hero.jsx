import React from "react";
import "./hero.css";
import tree from "../../assets/img_00.svg";
import apps from "../../assets/img_01.svg";

const Hero = () => {
  return (
    <div className="saas__hero section__padding">
      <div className="saas__hero-content">
        <h1>Create, inspect, and apply synthetic surveillance broadly.</h1>
        <p>
          Start with a stunning homepage. Stay motivated without hurting your
          pocket.
        </p>
        <button type="button">Start for free</button>
        <p>Want to talk or get a live demo? Get in touch →</p>
      </div>
      <div className="image-overlay-container">
        <img src={tree} alt="Árbol de líneas curvas" className="tree-image" />
        <img src={apps} alt="Iconos de apps" className="icons-image" />
      </div>
    </div>
  );
};

export default Hero;
