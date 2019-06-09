import React, { Component } from "react";
import axios from "axios";
import Comments from '../Comment/Comments.js';
import './Form2.scss';
import MobilePhone from '../../Assets/Images/mobile-phone.svg';

const tradeIds = [
  ''
]

class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artisanName: "",
      tradeid: "",
      trade: "",
      reviewername: "",
      // city: "East York",
      comments: "",
      rating: "",
      reviewdate: "",
      tradeid: "",
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

  // handleCityChange = event => {
  //   this.setState({
  //     city: event.target.value
  //   });
  // };

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
      // city: "East York",
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
      // city: "East York",
      comments,
      reviewdate,
    };

    // debugger;

    // @todo: To validate the data.
    axios
      .post("http://localhost:8080/comments", { comment })
      .then(response => {
        // @todo: Whatever should happen after succesfully submitting comment
        alert("Thank you for the feedback. We value your patronage.");

        console.log("Response from submitting job request: ", response);
        this.props.history.push("/artisan");
      })
      .catch(error => {
        // if there is an error submitting comment
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
      // city: "East York",
      comments,
      rating,
      reviewdate,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit2}>
          <label>Review Service</label>
          <div>
            <label htmlFor="artisan name">Artisan Name:</label>
            <span>{artisanName}</span>
          </div>
          <div>
            <label htmlFor="service id">Service Id:</label>
            <span>{tradeid}</span>
          </div>
          <div>
            <label htmlFor="trade">Service Type:</label>
            <span>{trade}</span>
          </div>
          {/* <div>
            <label htmlFor="city">City:</label>
            <select value={city} onChange={this.handleCityChange}>
              <option value="east York">East York</option>
              <option value="eglinton">Eglington</option>
              <option value="kipling">Kipling</option>
            </select>
          </div> */}

          <div>
            <label htmlFor="request date">Request Date:</label>
            <div value={reviewdate} />
          </div>
          {/* <div>
            <label htmlFor="date">Date:</label>
            <select value={reviewdate}
            onClick={this.handleReviewDateChange}/>
            <input type="date" name="reviewdate"/>
            
            </div> */}
          <div>
            <label htmlFor="date">Rating:</label>
            <select value={rating} onChange={this.handleRatingChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            
            </div>

          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea value={comments} onChange={this.handleCommentsChange} />
          </div>
          <div>
            <label htmlFor="requestor name">Reviewer Name:</label>
            <input
              type="text" placeholder="Your Name"
              value={reviewername}
              onChange={this.handleReviewerNameChange}
            />
          </div>
         
          <button value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form2;
