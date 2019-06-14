import React, { Component } from "react";
import Jobs from "./Jobs";
import Iconback from "../../Assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from 'react-router-dom';
import "./JobPage.scss";

export class JobPage extends Component {
  render() {
    return (
      <div>
         <Link to="/form1">
              <div className="form__image--icon">
                <img src={Iconback} alt="back-arrow" />
              </div>
            </Link>
        <div className="job__board">JOBS DATABASE</div>
        <Jobs />
      </div>
    );
  }
}

export default JobPage;
