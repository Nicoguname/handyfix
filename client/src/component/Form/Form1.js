import React, { Component } from "react";
import axios from "axios";
import Artisan from '../Artisan/Artisan';

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

      var dateToday = new Date();
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

    debugger;

    // @todo: To validate the data.
    axios
      .post("http://localhost:8080/jobs", { job })
      .then(response => {
        // @todo: Whatever should happen after succesfully submitting comment

        console.log("Response from submitting job request: ", response);
        this.props.history.push("/jobs");
      })
      .catch(error => {
        // @todo: Whatever should fi there is an error submitting comment
        console.log("Error from server: ", error);
        alert("Error submitting job request");
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
       
      <form onSubmit={this.handleSubmit1}>
        <label>Request Service</label>
        <div>
          <div>
            <label htmlFor="request id">Request Id:</label>
            <span>{tradeid}</span>
            {/* <select value={tradeid} onChange={this.handleTradeIdChange}>
              <option value="sel01">SEL01</option>
              <option value="spt01">SPT01</option>
              <option value="spl01">SPL01</option>
              <option value="scp01">SCP01</option>
              <option value="sam02">SAM01</option>
            </select> */}
          </div>
          <div>
            <label htmlFor="artisan name">Artisan Name:</label>
            <span>{artisanName}</span>
            {/* <select value={artisanName} onChange={this.handleArtisanNameChange}>
              <option value="james may">James May</option>
              <option value="john slate">John Slate</option>
              <option value="sarah crane">Sarah Crane</option>
            </select> */}
          </div>
          <div>
            <label htmlFor="service type">Service Type:</label>
            <span>{trade}</span>
            {/* <select value={trade} onChange={this.handleTradeChange}>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
              <option value="painting">Painting</option>
              <option value="bricklaying">Bricklaying</option>
              <option value="carpenter">Carpenter</option>
              <option value="automechanic">Auto Mechanic</option>
            </select> */}
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <select value={city} onChange={this.handleCityChange}>
              <option value="east York">East York</option>
              <option value="eglinton">Eglington</option>
              <option value="kipling">Kipling</option>
            </select>
          </div>

          <div>
            <label htmlFor="requestor name">Requestor Name:</label>
            <input
              type="text" placeholder="Your Name"
              value={requestorname}
              onChange={this.handleRequestorNameChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description of problem:</label>
            <textarea placeholder="Description of problem"
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          {/* <div>
            <label>Request Date:</label>
            <span value={dateNow} />
          </div> */}
          <div>
            <label htmlFor="request date">Request Date:</label>
            <div value={requestdate} />
          </div>

          <div>
            <label htmlFor="job status">Job Status:</label>
            <select value={status} onChange={this.handleStatusChange}>
              <option value="in review">In review</option>
            </select>
          </div>
        </div>
        <button value="submit">Submit</button>
      </form>
    );
  }
}

export default Form1;

//
