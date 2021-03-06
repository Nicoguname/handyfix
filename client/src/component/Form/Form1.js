import React, { Component } from "react";
import axios from "axios";
import "./Form1.scss";
import { Link } from "react-router-dom";
import Iconback from "../../Assets/Icons/SVG/Icon-back-arrow.svg";
import MobilePhone from "../../Assets/Images/mobile-phone.svg";
import Notice from "../../Component/Notice/Notice.js";

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artisanName: "",
      trade: "",
      requestorname: "",
      phoneno: "",
      city: "East York",
      description: "",
      status: "In review",
      requestdate: "",
      tradeid: ""
    };
  }

  componentDidMount() {
    const locationState = this.props.location.state;
    const artisan = locationState ? locationState.artisan : null;
    if (!artisan) {
    } else {
      const { artisanName, tradeid, trade } = artisan;
      this.setState({
        artisanName,
        trade,
        tradeid
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

  handlePhoneChange = event => {
    this.setState({
      phoneno: event.target.value
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

  handleStatusChange = event => {
    this.setState({
      status: event.target.value
    });
  };

  handleSubmit1 = event => {
    event.preventDefault();
    const {
      tradeid,
      artisanName,
      trade,
      requestorname,
      phoneno,
      city,
      description,
      status
    } = this.state;

    const dateToday = new Date();
    const requestdate =
      dateToday.getDate() +
      "/" +
      (dateToday.getMonth() + 1) +
      "/" +
      dateToday.getFullYear();

    const job = {
      tradeid,
      artisanName,
      trade,
      requestorname,
      phoneno,
      city,
      description,
      status,
      requestdate
    };

    axios
      .post("http://localhost:8080/jobs", { job })
      .then(response => {
        alert(
          "Your request has been submitted. A technician will contact you shortly."
        );

        console.log("Response from submitting job request: ", response);
        this.props.history.push("/home");
      })
      .catch(error => {
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
      phoneno,
      city,
      description,
      status,
      requestdate
    } = this.state;

    return (
      <div className="form">
        <form onSubmit={this.handleSubmit1}>
          <div className="form__image">
            <Link to="/artisan">
              <div className="form__image--icon">
                <img src={Iconback} alt="back-arrow" />
              </div>
            </Link>
            <div className="form__image--title">
              <label>Request Service</label>
            </div>

            <img
              className="form__image--phone"
              src={MobilePhone}
              alt="mobilephone"
            />
          </div>
          <div className="form__border">
            <div className="form__name">
              <label className="form__name1" htmlFor="artisan name">
                Artisan Name:
              </label>
              <span className="form__name2">{artisanName}</span>
              <span className="form__tradeid">({tradeid})</span>
            </div>
            <div className="form__service">
              <label className="form__service1" htmlFor="service type">
                Service Type:
              </label>
              <span className="form__service2">{trade}</span>
            </div>
            <div className="form__city">
              <label className="form__city1" htmlFor="city">
                City:
              </label>
              <select
                className="form__city2"
                value={city}
                onChange={this.handleCityChange}
              >
                <option defaultValue="" />
                <option value="East york">East York</option>
                <option value="Eglington">Eglington</option>
                <option value="Kipling">Kipling</option>
              </select>
            </div>

            <div className="form__phone">
              <label className="form__phoneno1" htmlFor="requestor name">
                Phone Number:
              </label>
              <input
                className="form__phoneno2"
                type="text"
                placeholder="Phone Number"
                value={phoneno}
                onChange={this.handlePhoneChange}
              />
              <div className="form__name3">
                <label className="form__name4" htmlFor="requestor name">
                  Requestor Name:
                </label>
                <input
                  className="form__name5"
                  type="text"
                  placeholder="Your Name"
                  value={requestorname}
                  onChange={this.handleRequestorNameChange}
                />
              </div>
            </div>
            <div className="form__desc">
              <label className="form__desc1" htmlFor="description">
                Description of problem:
              </label>
              <textarea
                className="form__desc2"
                placeholder="Description of problem"
                value={description}
                onChange={this.handleDescriptionChange}
              />
            </div>
            <div className="form__date">
              <label className="form__date1" htmlFor="request date">
                Request Date:
              </label>
              <div className="form__date2" value={requestdate} />
            </div>

            <div className="form__status">
              <label className="form__status1" htmlFor="job status">
                Job Status:
              </label>
              <select
                className="form__status2"
                value={status}
                onChange={this.handleStatusChange}
              >
                <option defaultValue="in review">In review</option>
              </select>
            </div>

            <button className="form__submit" value="submit">
              Submit
            </button>
          </div>
        </form>
        <Notice />
      </div>
    );
  }
}

export default Form1;
