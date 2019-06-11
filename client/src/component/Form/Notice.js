import React, { Component } from "react";
import './Notice.scss';

export class Notice extends Component {

 render () {

  return (
    <div className="disclaim">
    <div className="disclaim__notice">DISCLAIMER: At HandyFix we are always committed to very high standards of service delivery. Each field technician has undergone 
    a thorough background check for added assurance and integrity. However, while vouching for the professionalism of our workforce, we would like to remind our customers that if a real emergency arises (e.g. fire, security, medical), that they promptly contact 
    the approprate authorities via the emergency hotlines.
    </div>
    </div>

    );
  }
}

export default Notice;
