import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import moment from 'moment';
import Comments from "../Comment/Comments.js";
import './CommentData.scss';

class CommentData extends Component {
  state = {
    comments: [],
    artisanId: null
  };

  componentDidMount() {
    const locationState = this.props.location.state;
    const artisanId = locationState ? locationState.artisanId : null;
    if (!artisanId) {
      // this.props.history.push("/artisan");
    } else {
      this.setState({ artisanId });
    }

    axios.get("http://localhost:8080/comments").then(response => {
      if (artisanId) {
        const artisanComments = response.data.filter(
          comment => comment.id.toLowerCase() === artisanId.toLowerCase()
        );
        this.setState({
          comments: this.sortComments(artisanComments)
        });
      } else {
        this.setState({ comments: this.sortComments(response.data) });
      }
    });
  }

  sortComments(comments) {
    comments.sort((a,b) => {
       return (moment(b.reviewdate, 'MM-DD-YYYY').unix() - moment(a.reviewdate, 'MM-DD-YYYY').unix());
    });
    return comments;
  }

  render() {
    console.log(this.state.comments);

    return (
      <div className="App">
        <div className="post-container">
          <div className="post__header">REVIEWS</div>

          {this.state.comments.map(comment => (
            <Comments comments={comment} />
          ))}

        </div>
      </div>
    );
  }
}

export default CommentData;
