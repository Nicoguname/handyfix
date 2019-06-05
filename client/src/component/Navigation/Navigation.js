import React, {Component} from 'react';
import logo from '../../Assets/Icons/brand-logo.png';
import { Link } from 'react-router-dom';
// import logo from '../../Assets/Icons/brand-logo.png';
// import name from '../../Assets/Icons/brand-name.png';
import './Navigation.scss';

class Navigation extends Component {

    render () {

        return (
            <div className="nav">
            <div className="nav__logo">
           <Link to = "/home"> <img src={logo} alt="logo" className="nav__logo--icon" ></img></Link> 
          
           {/* <img src={logo} alt="logo" className="nav__logo--icon" ></img>
           <img src={name} alt="name" className="nav__logo--name" ></img> */}
           </div>
            <ul className="nav__header">
                <Link to = "/artisan"><li className="nav__header--review">Request</li></Link>
                <Link to = "/form2"><li className="nav__header--request">Review</li></Link>
            </ul>
            </div>
        );
    }
}

export default Navigation;