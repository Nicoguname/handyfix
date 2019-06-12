import React, { Component } from "react";
import ImageHero1 from "../../Assets/Images/workgroup.jpg";
import "./Hero.scss";

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__message">
          At HandyFix, total customer satisfaction is our ultimate goal. If it's
          broken, needs remodelling or a brand new project, call us and we'll
          fix it.
        </div>
        <div className="hero__image">
          <img className="hero__image--img1" src={ImageHero1} alt="hero" />
        </div>
      </div>
    );
  }
}

export default Hero;
