import React from "react";
import Aux from "../HOC/Aux";
import Navbar from "../Templates/Navbar";
import Footer from "../Templates/Footer";
const Layout = props => {
  return (
    <Aux>
      <main>
        <div className="container">
          <Navbar />
          {props.children}
        </div>
      </main>
      <Footer />
    </Aux>
  );
};

export default Layout;
