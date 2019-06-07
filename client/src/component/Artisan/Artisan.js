import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Icon from "../../../src/Assets/Icons/SVG/Icon-arrow-right.svg";
import "../styles/Artisan.scss";

export class Artisan extends Component {
  render() {
    const { artisanName, trade, experience, rating, id } = this.props.artisanData;

    console.log(this.props.artisanData);

    return (
      <div className="person">
        <div className="trade__image--slide">
        {/* <Link to={{
            pathname: '/form1',
            state: { artisan: {
                artisanName,
                tradeid: id,
                trade,
            }}
        }}>
          <img
            className="trade__icon"
            src={Icon}
            alt="icon"
            width="10px"
            height="25"
          />
        </Link> */}
        </div>
        <div className="person__details">
          <div className="person__details--name1">Name:</div>
          <div className="person__details--name">{artisanName}</div>
          {/* <div className="person__details--rating">Rating:</div> */}
          <div className="person__details--rating">({rating} stars)</div>
          {/* <div className="person__details--stars">{printStars({rating})}</div> */}
        </div>
        <div className="person__details">
          <div className="person__details--trade1">Trade:</div>
          <div className="person__details--trade">{trade}</div>
        </div>
        <div className="person__details">
          <div className="person__details--exp1">Experience:</div>
          <div className="person__details--exp">{experience}</div>
        </div>
        <div>
        <Link to={{
            pathname: '/form2',
            state: { artisan: {
                artisanName,
                tradeid: id,
                trade,
            }}
        }}>
        <button>Add Review</button>
        </Link>

        <Link to={{
            pathname: '/form1',
            state: { artisan: {
                artisanName,
                tradeid: id,
                trade,
            }}
        }}>
        <button>Request Service</button>
        </Link>
        </div>
        {/* <div className="person__details">
                <div className="person__details--rating">Rating:</div>
                <div className="person__details--rating1">{rating}</div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Artisan;
