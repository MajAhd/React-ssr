import React, { Component } from "react";
import Layout from "../Layouts/Layout";
import Spinner from "../Templates/Spinner";
import { Helmet } from "react-helmet-async";
//Redux
import { connect } from "react-redux";
import { getPosts } from "../Redux/actions";
import { bindActionCreators } from "redux";
import Aux from "../HOC/Aux";
import { Link, useLocation } from "react-router-dom";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
    if (this.props.posts.posts !== undefined) {
      this.state = { posts: this.props.posts.posts };
    }
  }
  static request_initialData(store, params) {
    return store.dispatch(getPosts(1));
  }
  componentDidMount() {
    this.loadPosts();
  }
  loadPosts() {
    this.setState({
      isLoadMore: true
    });
    this.props
      .getPosts(this.state.nextPage)
      .then(() => {
        let posts = this.props.posts.posts;
        this.setState({
          isLoading: false,
          posts: posts
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>react ssr</title>
          <meta name="description" content="react ssr example" />
          <meta name="keywords" content="react,ssr" />
          <link rel="icon" href="/img/logo.png" />
          <meta
            name="description"
            content="react Server Side Rendering with redux, react router dom  "
          />
          <meta
            name="keywords"
            content="react.reatjs,react ssr , ssr redux,ssr router"
          />
          <meta property="og:title" content="react ssr" />
          <meta
            property="og:description"
            content="react.reatjs,react ssr , ssr redux,ssr router"
          />
          <meta property="og:image" content="/img/logo.png" />
          <meta name="twitter:title" content="react ssr" />
          <meta
            name="twitter:description"
            content="react.reatjs,react ssr , ssr redux,ssr router"
          />
          <meta name="twitter:image" content="/img/logo.png" />
        </Helmet>
        {this.state.isLoading ? (
          <div className="container text-center">
            <Spinner type="text-primary" />
          </div>
        ) : (
          <Aux>
            <ul className="list-group list-group-flush">
              <li className="list-group-item active">Posts List</li>
              {this.state.posts.map((post, index) => (
                <li className="list-group-item text-dark" key={index}>
                  <h4>
                    <img
                      src="/img/logo.png"
                      width="100"
                      height="100"
                      className="img-thumbnail"
                      alt={post.title}
                    />
                    - {post.title}
                  </h4>
                  <ReadMore postID={post.id} />
                  <Link to={`/blog/${post.id}`}>Open page</Link>
                </li>
              ))}
            </ul>
          </Aux>
        )}
      </Layout>
    );
  }
}

function ReadMore(postID) {
  let location = useLocation();
  return (
    <Link
      className="btn text-success bg-dark"
      to={{
        pathname: `/blog/${postID.postID}`,
        state: { background: location }
      }}
    >
      Read More ...
    </Link>
  );
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
