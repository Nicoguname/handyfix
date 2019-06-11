import React, { Component } from "react";
import ImageElect from "../../Assets/Icons/icons1-electrical.png";
import ImagePlumb from "../../Assets/Icons/icons8-plumber-50.png";
import ImagePaint from "../../Assets/Icons/icons8-paint-bucket-48.png";
import ImageBrick from "../../Assets/Icons/icons8-trowel-48.png";
import ImageCarp from "../../Assets/Icons/icons8-saw-48.png";
import ImageMech from "../../Assets/Icons/icons8-car-service-48.png";
import { NavLink } from 'react-router-dom';
import "./Trade.scss";

export class Trade extends Component {
  render() {

    return (
      <div className="trade">   
        <div className="trade__image"> 
        </div>
        <div className="trade__message1">Please click the relevant icon to book a service request</div>
        <div className="trade__icon">
        <div className="trade__icon--1">
            <img src={ImageElect} alt="elect" className="trade__icon--img"/>
            <div className="trade__icon--1--middle">
            <NavLink to="/artisan?type=electrical" activeClassName="navelect">   <div className="trade__icon--1--text">Electrical</div>
            </NavLink>
              </div>
          </div> 
        <NavLink to="/artisan?type=plumbing" activeClassName="navplum">  <div className="trade__icon--2">
            <img src={ImagePlumb} alt="plumb" />
            <div className="trade__icon--2--middle">
          <div className="trade__icon--2--text">Plumbing</div>
        </div>
          </div>
          </NavLink>
        <NavLink to="/artisan?type=painting" activeClassName="navpaint">  <div className="trade__icon--3">
            <img src={ImagePaint} alt="paint" />
            <div className="trade__icon--3--middle">
          <div className="trade__icon--3--text">Painting</div>
        </div>
          </div>
          </NavLink>
        <NavLink to="/artisan?type=bricklaying" activeClassName="navbrick"> <div className="trade__icon--4">
            <img src={ImageBrick} alt="brick" />
            <div className="trade__icon--4--middle">
          <div className="trade__icon--4--text">Bricklaying</div>
        </div>
          </div>
          </NavLink>
        <NavLink to="/artisan?type=carpentry" activeClassName="navcarp">  <div className="trade__icon--5">
            <img src={ImageCarp} alt="carp" />
            <div className="trade__icon--5--middle">
          <div className="trade__icon-51--text">Carpentry</div>
        </div>
          </div>
          </NavLink>
        <NavLink to="/artisan?type=auto-mech" activeClassName="navmech">  <div className="trade__icon--6">
            <img src={ImageMech} alt="mech" />
            <div className="trade__icon--6--middle">
          <div className="trade__icon--6--text">Auto-Mech</div>
        </div>
          </div>
          </NavLink>
        </div>
        <div className="trade__notice">DISCLAIMER: At HandyFix we are always committed to very high standards of service delivery. Each field technician has undergone 
        a thorough background check for added assurance and integrity. However, while vouching for the professionalism of our workforce, we would like to remind our customers that if a real emergency arises (e.g. fire, security, medical), that they promptly contact 
        the approprate authorities via the emergency hotlines </div> 
      </div>
    );
  }
}

export default Trade;
