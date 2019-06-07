import React, { Component } from "react";
import axios from "axios";
// import MyDate from './DatePicker.js';
// import DatePicker from "react-datepicker";

import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

// import MomentLocaleUtils, {
//   formatDate,
//   parseDate,
// } from 'react-day-picker/moment';

class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      city: "East York",
      reviewdate: "",
    //   Date: "",
      tradeid: "",
      rating: "",
      comments: ""
    };
  }

  componentDidMount() {
    const locationState = this.props.location.state;
    const artisan = locationState ? locationState.artisan : null;
    if(!artisan) {
      // @todo: redirect to another page
    } else {
      const { artisanName, tradeid, rating } = artisan;
      this.setState({
        fullname: artisanName,
        tradeid,
        rating,
      });
    }
  }

  handleFullnameChange = event => {
    this.setState({
      fullname: event.target.value
    });
  };

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };

  handleTradeChange = event => {
    this.setState({
      tradeid: event.target.value
    });
  };

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  handleRatingChange = event => {
    this.setState({
      rating: event.target.value
    });
  };

  handleReviewDateChange = event => {
    this.setState({
      reviewdate: event.target.value
    });
  };

//   handleSubmit2 = event => {
//     alert(`${this.state.fullname} ${this.state.comments} 
//         ${this.state.reviewdate} ${this.state.city} 
//         ${this.state.tradeid} ${this.state.rating} ${this.state.rating}`);

  handleSubmit2 = event => {
    event.preventDefault();
    const {
      fullname,
      city,
      reviewdate,
      tradeid,
      rating,
      comments
    } = this.state;
    const comment = { fullname, city, reviewdate, tradeid, rating, comments};
    // @todo: To validate the data.
    axios
    .post("http://localhost:8080/comments", {comment})
    .then((response) => {
        // @todo: Whatever should happen after succesfully submitting comment
        alert('Thank you for the feedback. ');

        console.log('Response from submitting comment: ', response);
        this.props.history.push('/comments');
    })
    .catch((error) => {
        // @todo: Whatever should happen if there is an error submitting comment
        console.log('Error from server: ', error);
        alert('Error submitting comment');
    });
  };
  

  render() {
  
    function ratingPers(num) {
      var rating ='';
      for (var i =0; i<= num; i++) {
           var stars = rating + '*';
          console.log('*');
         
      }
      return stars;
      
    }

    const {
      fullname,
      city,
      reviewdate,
      tradeid,
      rating,
      comments
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit2}>
          <label>Review Service</label>
          <div>
            <label>Fullnames:</label>
            <span>{fullname}</span>

            {/* <input
              type="text"
              value={fullname}
              onChange={this.handleFullnameChange}
            /> */}
          </div>
          <div>
            <label>Service Id:</label>
            <span>{tradeid}</span>
            {/* <select value={tradeid} onChange={this.handleTradeChange}>
            <option value="sel01">SEL01</option>
              <option value="spt01">SPT01</option>
              <option value="spl01">SPL01</option>
              <option value="scp01">SCP01</option>
              <option value="sam02">SAM01</option>
            </select> */}
          </div>
          <div>
            <label>City:</label>
            <select value={city} onChange={this.handleCityChange}>
              <option value="east York">East York</option>
              <option value="eglinton">Eglington</option>
              <option value="kipling">Kipling</option>
            </select>
          </div>
          <div>
            <label>Date:</label>
            <select value={reviewdate}
            onClick={this.handleReviewDateChange}/>
            <input type="date" name="reviewdate"/>
            
            </div>

          <div>
            <label>Comments:</label>
            <textarea value={comments} onChange={this.handleCommentsChange} />
          </div>
          <div>
            <label>Rating:</label>

            <input
              type="text"
              // value={rating}
              value={ratingPers(rating)}
              onChange={this.handleRatingChange}
            />
          </div>

          {/* <div>
            <label>Rating:</label>
            <select value={rating} onChange={this.handleRatingChange}>
              <input type="radio" name="rating" value="1" checked />
              <input type="radio" name="rating" value="2" />
              <input type="radio" name="rating" value="3" />
              <input type="radio" name="rating" value="4" />
              <input type="radio" name="rating" value="5" />
            </select>
          </div> */}
          <button value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form2;
