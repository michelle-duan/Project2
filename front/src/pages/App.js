import React, { useState, useEffect } from "react";

import "./App.css";

import { Jumbotron, Button } from "reactstrap";

import Videos from "./Videos.js";

import Jumbo from "./Jumbotron.js";

// function App() {
//   const [videos, setVideos] = useState([]);

//   const getPosts = async () => {
//     console.log("getting posts");
//     try {
//       const _videos = await fetch("/videos/list").then((res) => res.json());
//       setVideos(_videos);
//     } catch (err) {
//       console.log("error ", err);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, []); // Only run the first time

//   return (
//     <Jumbotron>
//       <div className="App">
//         <div style={{ fontFamily: "Crete Round", opacity: "1.8" }}>
//           <div className="col-md px-0">
//             <h1 className="display-9 font-italic">
//               &quot;Who&quot; is Course Advisor?
//             </h1>
//           </div>
//         </div>
//         <Videos videos={videos}></Videos>
//       </div>
//     </Jumbotron>
//   );
// }

// export default App;

import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
    };
  }

  componentDidMount() {
    axios.get("/videos/list", {}).then((response) => {
      this.setState({
        videoList: response.data, //后端叫resul t，前端叫response.data
      });
    });
  }

  render() {
    const links = this.state.videoList.map((value, index) => {
      return (
        <li key={index} style={{ "text-align": "center" }}>
          <h2 style={{ "text-align": "center" }}>
            <span class="span_color">
              <a href={"/videos/" + value.id} style={{ color: "black" }}>
                {value.name} (Click to add your comments!)
              </a>
            </span>
          </h2>
          <iframe
            width="490"
            height="300"
            src={value.url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
      );
    });
    return (
      <div>
        <Jumbo />

        <Row>
          <ul>{links}</ul>
        </Row>
      </div>
    );
  }
}

export default App;
