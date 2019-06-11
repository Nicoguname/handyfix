import React, { Component } from "react";
import Hero from './Hero.js';
import Trade from './Trade.js';

export class Home extends Component {
  render() {
    return (
        <div classname="home">
          <Hero />
          <Trade />
        </div>
    );
  }
}

export default Home;
