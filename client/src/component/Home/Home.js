import React, { Component } from "react";
import Hero from '../Hero/Hero.js';
import Trade from '../Trade/Trade.js';

export class Home extends Component {
  render() {
    return (
        <div className="home">
          <Hero />
          <Trade />
        </div>
    );
  }
}

export default Home;
