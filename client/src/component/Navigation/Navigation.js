import React, { Component } from "react";
import logo from "../../Assets/Icons/brand-logo.png";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__logo">
          <NavLink to="/home">
            <img src={logo} alt="logo" className="nav__logo--icon" />
          </NavLink>
        </div>
        <div className="nav__header">
          <NavLink
            exact
            to="/artisan"
            activeClassName="activenav"
            className="nav__header--profile">
            Profiles
          </NavLink>
          <NavLink
            to="/comments"
            activeClassName="activenav"
            className="nav__header--request">
            Reviews
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
