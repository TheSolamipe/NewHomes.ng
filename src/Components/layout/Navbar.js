import React from 'react';
import {Link} from "react-router-dom";
import "./../../sass/main.scss";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logoutUser } from "./../../actions/authActions";

function Navbar(props) {

  const onLogoutClick =(e)=>{
    e.preventDefault()
    props.logoutUser()
  }

  return (
    <nav className=" navbar navbar-expand-sm navbar-light navbar-bottom bg-light mb-4">
        <div className="navbar-edit">
          <Link className="navbar-brand" to="/">
            <img className="navbar-logo1" src="./../../brandlogo.png" alt="brand-logo"  />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="navbar-link" onClick={onLogoutClick} href="/">
                  {" "}
                  <img className="navbar-logo2" src="./../../nigflag.png" alt="brand-logo" />
                  NGN logout
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item navbar-item dropdown">
                  <Link className="navbar-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Properties
                  </Link>
                </li>
                <li className="nav-item navbar-item dropdown">
                  <Link className="navbar-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Finance Plus
                  </Link>
                </li>
                <li className="nav-item navbar-item dropdown">
                  <Link className="navbar-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Overseas
                  </Link>
                </li>   
            </ul>
          </div>
        </div>
      </nav>
  )
}


Navbar.propTypes ={
  logoutUser: PropTypes.func.isRequired,
}
// const mapStateToProps = (state)=>({
//   auth: state.auth
// })

export default connect(null, {logoutUser})(Navbar);