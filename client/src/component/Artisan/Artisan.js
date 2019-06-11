import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Artisan.scss";

export class Artisan extends Component {

  render() {

    const { artisanName, trade, experience, rating, reviewCount, id } = this.props.artisanData;

    return (
        <div className="person__container">
      <div className="person">
        <div className="trade__image--slide">
        </div>
        <div className="person__details">
          <div className="person__details--name1">Name:</div>
          <div className="person__details--name">{artisanName}</div>
      
         
        </div>
        <div className="person__details">
          <div className="person__details--trade1">Trade:</div>
          <div className="person__details--trade">{trade}</div>
          <div className="person__details--rating">(Revs. --- {reviewCount} | </div>
          <div className="person__details--rating1"> Avg. --- {rating} *)</div>
        </div>
        <div className="person__details">
          <div className="person__details--exp1">Experience:</div>
          <div className="person__details--exp">{experience}</div>
        </div>
        <div>
        <div className="request">
        <Link to={{
            pathname: '/form1',
            state: { artisan: {
                artisanName,
                tradeid: id,
                trade,
            }}
        }}>
       
        <button className="request__form1">Request Service</button>
      
        </Link>

        <Link to={{
            pathname: '/form2',
            state: { artisan: {
                artisanName,
                tradeid: id,
                trade,
           }}
        }}>
        <button className="request__form2">Add Review</button>
        </Link>

        <Link to={{
            pathname: '/comments',
            state: { artisanId: id }
        }}>
        <button className="request__form3">Show Reviews</button>
        </Link>
        </div>
        </div>
      </div>
      </div>
    );
  }
}


export default Artisan;
