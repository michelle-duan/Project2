import React, { Component } from "react";
import "./style/jumbotron.css";
import { Link } from "react-router-dom";
import "./App.css";

class Jumbo extends Component {
  render() {
    return (
      <div
        class="jumbotron d-flex align-items-center"
        style={{
          "text-align": "center",
          fontFamily: "lato",
          opacity: "0.8",
        }}
      >
        <div class="content">
          <h1>Pettube</h1>
          <p className="lead">The cuttest pettube for pets.</p>
        </div>
      </div>
    );
  }
}

export default Jumbo;
