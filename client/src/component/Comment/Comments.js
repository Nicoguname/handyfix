import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import moment from 'moment';

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
      console.log('start api call')
    axios.get("http://localhost:8080/comments").then(response => {
        console.log('data from server', response);
        
      this.setState({
        comments: response.data
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

// const moment = require(moment);
// const sortComments = (comments) => {
//   comments.sort((a,b) => {
//      return (moment(a.reviewdate, 'MM-DD-YYYY').unix() - moment(b.reviewdate, 'MM-DD-YYYY').unix());
//   });
//   return comments;
// }

  render() {
    console.log(this.state.feedback);
    if (!this.state.comments.length) {
        return (
            <div className="App">
                <h2>Comment data is not available</h2>
            </div>
        )
    }
    return (
      
      <div className="App">

        <div className="post-container">
          <div>
            {this.state.comments.map((comment, index) => (
              <div key={index}>
                <div className="post">
                  <div className="post__fullname">{comment.fullname}</div>
                  <div className="post__city">{comment.city}</div>
                  <div className="post__date">{comment.reviewdate}</div>
                  <div className="post__tradeid">{comment.tradeid}</div>
                  <div className="post__rating">{comment.rating}</div>
                  <div className="post__comments">{comment.comments}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
