import React, {Component} from 'react';
import logo from '../../Assets/Icons/brand-logo.png';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import logo from '../../Assets/Icons/brand-logo.png';
// import name from '../../Assets/Icons/brand-name.png';
import './Navigation.scss';

class Navigation extends Component {

    render () {

        return (
            <div className="nav">
            <div className="nav__logo">
           <NavLink to = "/home"> <img src={logo} alt="logo" className="nav__logo--icon" ></img></NavLink> 
          
           {/* <img src={logo} alt="logo" className="nav__logo--icon" ></img>
           <img src={name} alt="name" className="nav__logo--name" ></img> */}
           </div>
            <ul className="nav__header">
                <NavLink exact to="/artisan" activeClassName="activenav" className="nav__header--profile">Profiles</NavLink>
                <NavLink to="/comments" activeClassName="activenav" className="nav__header--request">Reviews</NavLink>
            </ul>
            </div>
        );
    }
}

export default Navigation;