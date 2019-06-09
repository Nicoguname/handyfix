import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import moment from 'moment';
import './Jobs.scss'

class Jobs extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
      console.log('start api call')
    axios.get("http://localhost:8080/jobs").then(response => {
        console.log('data from server', response);
        
      this.setState({
        jobs: this.sortJobs(response.data)
      })
    }
    );
  }

  sortJobs(jobs) {
    jobs.sort((a,b) => {
       return (moment(b.requestdate, 'MM-DD-YYYY').unix() - moment(a.requestdate, 'MM-DD-YYYY').unix());
    });
    return jobs;
  }

//   sortComments (comments) {
//     return comments.sort((a, b) => { 
//         console.log('a',a,'b', b);
//         return new Date(a.reviewdate).getTime > new Date(b.reviewdate).getTime;
//     });
//   }

  render() {
    console.log(this.state.jobs);
    if (!this.state.jobs.length) {
        return (
            <div className="App">
                <h2>Job data is not available</h2>
            </div>
        )
    }
    return (
      <div className="App">

        <div className="job__container">
          {/* <div> */}
          <div className="job__header">Job Request Database</div>
            {this.state.jobs.map((job, index) => (
              <div key={index}>
              <div className="job">
                
                <div className="job__database">
                <div className="job__database--name">Artisan Name:</div>
                  <div className="job__database--name1">{job.artisanName}</div>
                  <div className="job__database--id">({job.tradeid})</div>
                  </div>
                  <div className="job__database">
                  <div className="job__database--trade">Service Type:</div>
                  <div className="job__database--trade1">{job.trade}</div>
                  </div>
                  <div className="job__database">
                  <div className="job__database--city">City:</div>
                  <div className="job__database--city1">{job.city}</div>
                  </div>
                  <div className="job__database">
                  <div className="job__database--details">Job Details:</div>
                  <div className="job__database--details1">{job.description}</div>
                  </div>
                  <div className="job__database">
                   <div className="job__database--status">Status:</div>
                  <div className="job__database--status1">{job.status}</div>
                  </div>
                  <div className="job__database">
                  <div className="job__database--requestor">Requestor:</div>
                  <div className="job__database--requestor1">{job.requestorname}</div>
                  </div>
                  <div className="job__database">
                  <div className="job__database--date">Request Date:</div>
                  <div className="job__database--date1">{job.requestdate}</div>
                  </div>
                {/* </div> */}
              </div>
              </div>
            ))}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Jobs;
