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
          fontFamily: "Crete Round",
          opacity: "0.8",
        }}
      >
        <div class="container">
          <h1>Petube</h1>
          <p className="lead">The cuttest pettube for pets.</p>
        </div>
      </div>
    );
  }
}

export default Jumbo;
