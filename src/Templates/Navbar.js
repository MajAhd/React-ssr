import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <header>
      <nav
        className="navbar fixed-top navbar-expand-lg shadow-sm navbar-dark "
        style={{ backgroundColor: "rgb(26, 25, 25)" }}
      >
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.png" width="40" height="40" alt="KelakChain" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/MajAhd/ReactSSR"
                target="_blank"
                className="nav-link"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
