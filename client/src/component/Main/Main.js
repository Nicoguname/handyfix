import React, { Component } from "react";
import axios from "axios";
import Iconback from "../../Assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from "react-router-dom";
import Artisan from "../Artisan/Artisan.js";
import "./Main.scss";

export class Main extends Component {
  state = {
    artisanData: []
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobFilter = urlParams.get("type");

    axios.get("http://localhost:8080/artisan").then(response => {
      if (jobFilter) {
        this.setState({
          artisanData: response.data.filter(
            artisan => artisan.trade.toLowerCase() === jobFilter.toLowerCase()
          )
        });
      } else {
        this.setState({ artisanData: response.data });
      }
    });
  }

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <Link to="/home">
            <div className="main__header--icon">
              <img src={Iconback} alt="backarrow" />
            </div>
          </Link>
          <div className="main__header--profile">PROFILES</div>
        </div>
        {this.state.artisanData.map(artisan => (
          <Artisan key={artisan.id} artisanData={artisan} />
        ))}
      </div>
    );
  }
}

export default Main;
