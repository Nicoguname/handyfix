import React, { Component } from "react";
import axios from "axios";
import Iconback from '../../Assets/Icons/SVG/Icon-back-arrow.svg';
import { Link } from 'react-router-dom';
import './Form2.scss';
// import MobilePhone from '../../Assets/Images/mobile-phone.svg';
// import Smileys from '../../Assets/Images/dreamstimemaximum_31763616.jpg';
import Smileys from '../../Assets/Images/dreamstimemaximum_115923600.jpg';

// const tradeIds = [
//   ''
// ]

class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artisanName: "",
      tradeid: "",
      trade: "",
      reviewername: "",
      comments: "",
      rating: "",
      reviewdate: "",
    };
  }

  componentDidMount() {
    const locationState = this.props.location.state;
    const artisan = locationState ? locationState.artisan : null;
    if(!artisan) {
      // @todo: redirect to another page
    } else {
      const { artisanName, tradeid, trade } = artisan;
      this.setState({
        artisanName,
        trade,
        tradeid,
      });
    }
  }

  handleArtisanNameChange = event => {
    this.setState({
      artisanName: event.target.value
    });
  };

  handleTradeIdChange = event => {
    this.setState({
      tradeid: event.target.value
    });
  };

  handleTradeChange = event => {
    this.setState({
      trade: event.target.value
    });
  };

  handleReviewerNameChange = event => {
    this.setState({
      reviewername: event.target.value
    });
  };

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };

  handleRatingChange = (event) => {
      this.setState({
          rating: event.target.value
      })
  }

  handleSubmit2 = event => {
    event.preventDefault();
    const {
       artisanName,
      tradeid,
      trade,
      reviewername,
      rating,
      comments,
    } = this.state;

      const dateToday = new Date();
      const reviewdate =
        dateToday.getDate() +
        "/" +
        dateToday.getMonth() +
        "/" +
        dateToday.getFullYear();

    const comment = {
      artisanName,
      id: tradeid,
      trade,
      reviewername,
      rating,
      comments,
      reviewdate,
    };

    axios
      .post("http://localhost:8080/comments", { comment })
      .then(response => {
        alert("Thank you for the feedback. We value your patronage.");

        console.log("Response from submitting job request: ", response);
        this.props.history.push("/artisan");
      })
      .catch(error => {
        console.log("Error from server: ", error);
        alert("There was an error submitting your review.");
      });
  };

  render() {

    const {
      artisanName,
      tradeid,
      trade,
      reviewername,
      comments,
      rating,
      reviewdate,
    } = this.state;

    return (

      <div className="form2">
      <form onSubmit={this.handleSubmit2}>
      <div className="form2__image">
      <Link to="/artisan">
      <div className="form__image--icon">
      <img src={Iconback} alt="back-arrow" />
      </div>
      </Link>
        <div className="form2__image--title"><label>Review Service</label></div>
        <img className="form2__image--flyer" src={Smileys} alt="mobilephone" />
        </div>
          <div className="form2__border">
          <div className="form2__name">
            <label className="form2__name1" htmlFor="artisan name">Artisan Name:</label>
            <span className="form2__name2">{artisanName}</span>
            <span className="form2__tradeid">({tradeid})</span>
          </div>
          <div className="form2__service">
            <label className="form2__service1" htmlFor="service type">Service Type:</label>
            <span className="form2__service2">{trade}</span>
          </div>

          <div className="form2__comm">
            <label className="form2__comm1" htmlFor="comments">Comments:</label>
            <textarea className="form2__comm2" placeholder="Please enter your comments"
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </div>

          <div className="form2__rating">
            <label className="form2__rating1" htmlFor="rating">Rating:</label>
            <select className="form2__rating2" value={rating} onChange={this.handleRatingChange}>
              <option defaultValue=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
            
            <div className="form2__name3">
            <label className="form2__name4" htmlFor="reviewer name">Review by:</label>
            <input className="form2__name5"
              type="text" placeholder="Your Name"
              value={reviewername}
              onChange={this.handleReviewerNameChange}
            />
          </div>
          <div className="form2__date">
            <label className="form2__date1" htmlFor="review date">Review Date:</label>
            <div className="form2__date2" value={reviewdate} />
          </div>
        <button className="form2__submit" value="submit">Submit</button>
        </div>
      </form>
      </div>
    );
  }
}

export default Form2;
