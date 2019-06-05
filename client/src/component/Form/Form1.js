import React, {Component} from 'react';
import axios from 'axios';

class Form1 extends Component {
        constructor(props) {
            super(props)

        this.state = {
            artisanName: '',
            trade: '',
            requestorname: '',
            city: '',
            description: '',
            status: '',
            requestdate: ''
        }
    }

    handleArtisanNameChange = (event) => {
        this.setState({
            artisanName: event.target.value
        })
    }

    handleTradeChange = (event) => {
        this.setState({
            trade: event.target.value
        })
    }

    handleRequestorNameChange = (event) => {
        this.setState({
            requestorname: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    // handleSubmit = (event) => {
    //     alert(`${this.state.fullname} ${this.state.comments} 
    //     ${this.state.phone} ${this.state.city} ${this.state.description}`)
    //     event.preventDefault();
    // }


    // "tradeid": "SCP02",
    //     "artisanName": "Kathy Howard",
    //     "trade": "Carpenter",
    //     "city": "Kipling",
    //     "description": "Roof leaks during rainfall.",
    //     "status": "In review",
    //     "requestdate": "13/01/2018"


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
        requestdate
    } = this.state;
    
    const job = 
        { 
        tradeid,
        artisanName,
        trade,
        requestorname,
        city,
        description,
        status,
        requestdate};

    // @todo: To validate the data.
    axios
    .post("http://localhost:8080/jobs", {job})
    .then((response) => {
        // @todo: Whatever should happen after succesfully submitting comment

        console.log('Response from submitting job request: ', response);
        this.props.history.push('/jobs');
    })
    .catch((error) => {
        // @todo: Whatever should fi there is an error submitting comment
        console.log('Error from server: ', error);
        alert('Error submitting job request');
    });
  };

    render () {
        const { tradeid, artisanName, trade, requestorname } = this.state
        // const { artisanName, trade, requestorname, city, description, status, requestdate } = this.state
        return (
            <form onSubmit={this.handleSubmit1}>
            <label>Request Service</label>
                <div>
                <div>
            <label>Request Id:</label>
            <select value={tradeid} onChange={this.handleTradeChange}>
              <option value="sel01">SEL01</option>
              <option value="spt01">SPT01</option>
              <option value="spl01">SPL01</option>
              <option value="scp01">SCP01</option>
              <option value="sam02">SAM01</option>
            </select>
          </div>
                <div>
                    <label>Artisan Name:</label>
                    <select 
                    value={artisanName} 
                    onChange={this.handleArtisanNameChange}>
                        <option value="james may">James May</option>
                        <option value="john slate">John Slate</option>
                        <option value="sarah crane">Sarah Crane</option>
                    </select>
                </div>
                <div>
                    <label>Trade:</label>
                    <select 
                    value={trade} 
                    onChange={this.handleTradeChange}>
                        <option value="electrical">Electrical</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="painting">Painting</option>
                        <option value="bricklaying">Bricklaying</option>
                        <option value="carpenter">Carpenter</option>
                        <option value="automechanic">Auto Mechanic</option>
                    </select>
                </div>
                <div>
            <label>Requestor Name:</label>
            <input
              type="text"
              value={requestorname}
              onChange={this.handleRequestorNameChange}
            />
          </div>
                  </div>
                <button value="submit">Submit</button>
            </form>


        )
}
}

export default Form1;


//    