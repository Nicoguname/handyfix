import React, { Component } from "react";
import "./Comment.scss";

export class Comments extends Component {
  render() {
    const {
      artisanName,
      trade,
      comments,
      rating,
      reviewername,
      id,
      reviewdate
    } = this.props.comments;

    return (
      <div className="App">
        <div className="post">
          <div className="post__details">
            <div className="post__details--name">Artisan:</div>
            <div className="post__details--name1">{artisanName} </div>
            <div className="post__details--id">({id})</div>
          </div>
          <div className="post__details">
            <div className="post__details--trade">Service Type:</div>
            <div className="post__details--trade1">{trade}</div>
          </div>
          <div className="post__details">
            <div className="post__details--date">Review Date:</div>
            <div className="post__details--date1">{reviewdate}</div>
          </div>
          <div className="post__details">
            <div className="post__details--comment">Comments:</div>
            <div className="post__details--comment1">{comments}</div>
          </div>
          <div className="post__details">
            <div className="post__details--rate">Rating:</div>
            <div className="post__details--rate1">{rating}*</div>
          </div>
          <div className="post__details">
            <div className="post__details--reviewer">Review By:</div>
            <div className="post__details--reviewer1">{reviewername}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
