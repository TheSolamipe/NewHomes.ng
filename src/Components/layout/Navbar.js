import React from 'react';
import {Link} from "react-router-dom";
import "./../../sass/main.scss";

function Navbar(props) {
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
                <Link className="navbar-link" to="/profiles">
                  {" "}
                  <img className="navbar-logo2" src="./../../nigflag.png" alt="brand-logo" />
                  NGN
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li class="nav-item navbar-item dropdown">
                  <Link class="navbar-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Properties
                  </Link>
                </li>
                <li class="nav-item navbar-item dropdown">
                  <Link class="navbar-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Finance Plus
                  </Link>
                </li>
                <li class="nav-item navbar-item dropdown">
                  <Link class="navbar-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Overseas
                  </Link>
                </li>   
            </ul>
          </div>
        </div>
      </nav>
  )
}


export default Navbar;