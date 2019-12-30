import React, { Component } from "react";
import Routes from "./routes";
import Aux from "./HOC/Aux";
class App extends Component {
  render() {
    return (
      <Aux>
        <Routes />
      </Aux>
    );
  }
}

export default App;
