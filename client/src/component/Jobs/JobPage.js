import React, { Component } from "react";
import Jobs from './Jobs';

export class JobPage extends Component {
  render() {
    return (
        <div>
          <div className="job__header">JOBS DATABASE</div>
      <Jobs />
      </div>
    );
  }
}

export default JobPage;



