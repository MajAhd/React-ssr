import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Posts from "./Components/Posts";
import PostPage from "./Components/PostPage";
import ErrorPage from "./Components/ErrorPage";
import ModalPage from "./Templates/ModalPage";
import Aux from "./HOC/Aux";
const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <Aux>
      <Switch location={background || location}>
        <Route exact path="/" component={Posts} />
        <Route exact path="/blog/:id" component={PostPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      {/* Show the modal when a background page is set */}
      {background && (
        <Route
          path="/blog/:id"
          children={props => (
            <ModalPage>
              <PostPage isModal={true} {...props} />
            </ModalPage>
          )}
        />
      )}
    </Aux>
  );
};
export default Routes;
