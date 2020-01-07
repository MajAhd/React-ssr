import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = props => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <img
              src="/img/logo.png"
              alt="Kelakchain"
              style={{ height: 70, width: 70 }}
            />
            <p className="pr-5 text-white-50">
              React Server Side Rendering : CRA , Redux , React Router Dom
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                - <Link to="/">Home</Link>
              </li>

              <li>
                -{" "}
                <a
                  href="https://github.com/MajAhd/ReactSSR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Address</h4>
            <p className="mb-0">
              <i className="fa fa-envelope-o mr-3"></i>
              info@kelakchain.com
            </p>
            <p>
              <i className="fa fa-linkedin-square mr-3"></i>
              <a
                className="btn btn-link btn-pure"
                href="https://www.linkedin.com/in/majahd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Majid Ahmadi
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">
                © {new Date().getFullYear()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
