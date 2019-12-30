import React, { Component } from "react";
import Layout from "../Layouts/Layout";

class ErrorPage extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="alert alert-info p-40" role="alert">
              oops! You are in a wrong page
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default ErrorPage;
