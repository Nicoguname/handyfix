import React, { Component } from "react";
import Jobs from './Jobs';
import './JobPage.scss';

export class JobPage extends Component {
  render() {
    return (
        <div>
          <div className="job__board">JOBS DATABASE</div>
      <Jobs />
      </div>
    );
  }
}

export default JobPage;



