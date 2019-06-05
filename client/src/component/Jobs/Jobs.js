import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Jobs extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
      console.log('start api call')
    axios.get("http://localhost:8080/jobs").then(response => {
        console.log('data from server', response);
        
      this.setState({
        jobs: response.data
      })
    }
    );
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

        <div className="post-container">
          <div>
          <div className="job">Job Request Database</div>
            {this.state.jobs.map((job, index) => (
              <div key={index}>
                
                <div className="job__database">
                  <div className="job__fullname">{job.artisanName}</div>
                  {/* <div className="post__city">{comment.city}</div>
                  <div className="post__date">{comment.reviewdate}</div>
                  <div className="post__tradeid">{comment.tradeid}</div>
                  <div className="post__rating">{comment.rating}</div>
                  <div className="post__comments">{comment.comments}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
