import React, { Component } from "react";
import Navbar from "../components/general/navbar";
import Collaborations from "../components/collaborations/collaborations";
import Footer from "../components/general/footer";

class Collabs extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar idx="2" />
        <Collaborations />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Collabs;
