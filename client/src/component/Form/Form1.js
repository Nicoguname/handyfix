import React, { Component } from "react";
import axios from "axios";
import Artisan from '../Artisan/Artisan';
import './Form1.scss';
import MobilePhone from '../../Assets/Images/mobile-phone.svg';

const tradeIds = [
  ''
]

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artisanName: "",
      trade: "",
      requestorname: "",
      city: "East York",
      description: "",
      status: "In review",
      requestdate: "",
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

  handleRequestorNameChange = event => {
    this.setState({
      requestorname: event.target.value
    });
  };

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleStatusChange = (event) => {
      this.setState({
          status: event.target.value
      })
  }

  handleSubmit1 = event => {
    event.preventDefault();
    const {
      tradeid,
      artisanName,
      trade,
      requestorname,
      city,
      description,
      status,
    } = this.state;

      const dateToday = new Date();
      const requestdate =
        dateToday.getDate() +
        "/" +
        dateToday.getMonth() +
        "/" +
        dateToday.getFullYear();

    const job = {
      tradeid,
      artisanName,
      trade,
      requestorname,
      city,
      description,
      status,
      requestdate
    };

    // debugger;

    // @todo: To validate the data.
    axios
      .post("http://localhost:8080/jobs", { job })
      .then(response => {
        // @todo: Whatever should happen after succesfully submitting a request
        alert("Your request has been submitted. A technician will contact you shortly.");
       
        console.log("Response from submitting job request: ", response);
        this.props.history.push("/home");
      })
      .catch(error => {
        // @todo: Whatever should fi there is an error submitting a request
        console.log("Error from server: ", error);
        alert("There was an error submitting your job request");
      });
  };

  render() {

    const {
      tradeid,
      artisanName,
      trade,
      requestorname,
      city,
      description,
      status,
      requestdate
    } = this.state;

    return (
       <div className="form">
      <form onSubmit={this.handleSubmit1}>
      {/* <div className="form__border"> */}
      <div className="form__image">
        <div className="form__image--title"><label>Request Service</label></div>
        <img className="form__image--phone" src={MobilePhone} alt="mobilephone" />
        </div>
        {/* <div> */}
          {/* <div className="form__id">
            <label htmlFor="request id">Request Id:</label>
            <span>{tradeid}</span>
          </div> */}
          <div className="form__border">
          <div className="form__name">
            <label className="form__name1" htmlFor="artisan name">Artisan Name:</label>
            <span className="form__name2">{artisanName} ({tradeid})</span>
          </div>
          <div className="form__service">
            <label className="form__service1" htmlFor="service type">Service Type:</label>
            <span className="form__service2">{trade}</span>
          </div>
          <div className="form__city">
            <label className="form__city1" htmlFor="city">City:</label>
            <select className="form__city2" value={city} onChange={this.handleCityChange}>
              <option value="east York">East York</option>
              <option value="eglinton">Eglington</option>
              <option value="kipling">Kipling</option>
            </select>
          </div>

          <div className="form__name3">
            <label className="form__name4" htmlFor="requestor name">Requestor Name:</label>
            <input className="form__name5"
              type="text" placeholder="Your Name"
              value={requestorname}
              onChange={this.handleRequestorNameChange}
            />
          </div>
          <div className="form__desc">
            <label className="form__desc1" htmlFor="description">Description of problem:</label>
            <textarea className="form__desc2" placeholder="Description of problem"
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div className="form__date">
            <label className="form__date1" htmlFor="request date">Request Date:</label>
            <div className="form__date2" value={requestdate} />
          </div>

          <div className="form__status">
            <label className="form__status1" htmlFor="job status">Job Status:</label>
            <select className="form__status2" value={status} onChange={this.handleStatusChange}>
              <option defaultvalue="in review">In review</option>
            </select>
          </div>
       
        <button className="form__submit" value="submit">Submit</button>
        
        </div>
      </form>
      <div class="form__notice">DISCLAIMER: At HandyFix we are always committed to very high standards of service delivery. Each field technician has undergone 
      a thorough background check for added assurance and integrity. However, while vouching for the professionalism of our workforce, we would like to remind our customers that if a real emergency arises (e.g. fire, security, medical), that they promptly contact 
      the approprate authorities via the emergency hotlines </div> 
      </div>
    );
  }
}

export default Form1;

