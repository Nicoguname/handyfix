import React, { Component } from "react";
import ImageHero from "../Assets/Images/workgroup.jpg";
import "./styles/Hero.scss";

// const elect = '../Assets/Images/icons1-electrical.png'

export class Hero extends Component {
  render() {
    return (
      <div className="hero1">
        <div className="hero1__image">
          <img src={ImageHero} alt="hero" />
        </div>
      </div>
    );
  }
}

export default Hero;
