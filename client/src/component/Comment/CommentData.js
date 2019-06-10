import React, { Component } from "react";
import axios from "axios";
import moment from 'moment';
import Comments from "../Comment/Comments.js";
import Iconback from '../../Assets/Icons/SVG/Icon-back-arrow.svg';
import { Link } from 'react-router-dom';
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
        const artisanComments = response.data.filter (
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
       return (moment(b.reviewdate, 'DD-MM-YYYY').unix() - moment(a.reviewdate, 'DD-MM-YYYY').unix());
    });
    return comments;
  }

  render() {
    // console.log(this.state.comments);

    return (
      <div>
         <div className="review__header">
               <Link to="/artisan"> 
                    <div className="review__header--icon">
                        <img  src={Iconback} alt="backarrow" />
                    </div>
               </Link>
                <div className="review__header--profile">REVIEWS</div>
                </div>

          {this.state.comments.map(comment => (
            <Comments comments={comment} />
          ))}

        </div>
    );
  }
}

export default CommentData;