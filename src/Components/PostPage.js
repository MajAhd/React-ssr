import React, { Component, useEffect } from "react";
import Layout from "../Layouts/Layout";
import Spinner from "../Templates/Spinner";
import Aux from "../HOC/Aux";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { getPost } from "../Redux/actions";
import { bindActionCreators } from "redux";
class PostPage extends Component {
  constructor(param) {
    super(param);
    this.state = {
      post: null,
      isLoading: true
    };
    if (this.props.posts.post !== undefined) {
      this.state = { post: this.props.posts.post };
    } else {
      this.loadPost();
    }
  }
  static request_initialData(store, params) {
    const id = params[0].match.params.id;
    return store.dispatch(getPost(id));
  }
  componentDidMount() {
    this.loadPost();
  }
  loadPost() {
    this.props
      .getPost(this.props.match.params.id)
      .then(() => {
        let post = this.props.posts.post;
        this.setState({
          isLoading: false,
          post: post
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    return this.props.isModal ? (
      <Aux>
        {this.state.isLoading ? (
          <div className="container text-center">
            <Spinner type="text-primary" />
          </div>
        ) : (
          <Aux>
            <Helmet>
              <title>{this.state.post.title}</title>
              <link rel="icon" href="/img/logo.png" />
              <meta name="description" content={this.state.post.title} />
              <meta name="keywords" content={this.state.post.title} />
              <meta property="og:title" content={this.state.post.title} />
              <meta property="og:description" content={this.state.post.title} />
              <meta property="og:image" content="/img/logo.png" />
              <meta name="twitter:title" content={this.state.post.title} />
              <meta
                name="twitter:description"
                content={this.state.post.title}
              />
              <meta name="twitter:image" content="/img/logo.png" />
            </Helmet>
            <div className="row">
              <div className="col-4">
                <img
                  src="/img/logo.png"
                  width="200"
                  height="200"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-8">
                <h3>{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
              </div>
            </div>
          </Aux>
        )}
      </Aux>
    ) : (
      <Layout>
        {this.state.isLoading ? (
          <div className="container text-center">
            <Spinner type="text-primary" />
          </div>
        ) : (
          <Aux>
            <Helmet>
              <title>{this.state.post.title}</title>
              <link rel="icon" href="/img/logo.png" />
              <meta name="description" content={this.state.post.title} />
              <meta name="keywords" content={this.state.post.title} />
              <meta property="og:title" content={this.state.post.title} />
              <meta property="og:description" content={this.state.post.title} />
              <meta property="og:image" content="/img/logo.png" />
              <meta name="twitter:title" content={this.state.post.title} />
              <meta
                name="twitter:description"
                content={this.state.post.title}
              />
              <meta name="twitter:image" content="/img/logo.png" />
            </Helmet>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="/img/logo.png"
                      width="100"
                      height="100"
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="col-9">
                    <h4>
                      <small>
                        <Link to="/"> {"<"}Back</Link>
                      </small>{" "}
                      {this.state.post.title}
                    </h4>
                    <p>{this.state.post.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </Aux>
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
