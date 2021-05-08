import React from "react";

function Nav() {
  return (
    <div>
      <navbar
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
        id="nav"
      >
        <div className="container-fluid">
          <p class="navbar-brand" href="#">
            <img
              className="logo"
              src="images/echo_house.png"
              alt="Bakery logo"
            />
          </p>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#intro">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
    </div>
  );
}

export default Nav;
