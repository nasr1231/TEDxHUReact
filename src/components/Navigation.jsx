import React, {Fragment}from "react";
import { Link, withRouter } from "react-router-dom";
import logob from "../logob.png";



function Navigation(props) {
  return (
<Fragment>

    <nav id="menu" className="navbar-default navbar-fixed-top navbar-dark " role="navigation">
    <div className="container ">
        <div className="navbar-header naaz">
 

     
        <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        {" "}
        <span className="sr-only">Toggle navigation</span>{" "}
        <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
      </button>


         
          <Link className="navbar-brand page-scroll" to="/Home">
          <img className="Logo" src={logob}  alt="Logo"/>
          </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-left">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Home" ? "active" : ""
                }`}
              >
                <Link className="page-scroll" to="/Home">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Attend" ? "active" : ""
                }`}
              >
                <Link className="page-scroll" to="/Attend">
                  Attend
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Watch" ? "active" : ""
                }`}
              >
                <Link className="page-scroll" to="/Watch">
                  Watch
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Team" ? "active" : ""
                }`}
              >
                <Link className="page-scroll" to="/Team">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Sponsers" ? "active" : ""
                }`}
              >
                <Link className="page-scroll" to="/Sponsers">
                  Sponsers
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Contactus" ? "active" : ""
                }`}
              >
                <Link className="page-scroll" to="/Contactus">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </Fragment>
  );
}

export default withRouter(Navigation);
