import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Hero from "../Hero/Hero.js";
import Trade from "../Trade/Trade.js";
import HomeImage from "../../Assets/Images/sven-brandsma-1561542-unsplash.jpg";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Trade />
        <NavLink to="/jobs">
          <img className="home__image" src={HomeImage} alt="homeiamge" />
        </NavLink>
      </div>
    );
  }
}

export default Home;
