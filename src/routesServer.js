import Posts from "./Components/Posts";
import PostPage from "./Components/PostPage";
export default [
  {
    path: "/",
    component: Posts,
    exact: true
  },
  {
    path: "/blog/:id",
    component: PostPage,
    exact: true
  }
];
