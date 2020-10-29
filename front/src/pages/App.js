import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

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
        <li key={index}>
          <a href={"/videos/" + value.id}>{value.name}</a>
        </li>
      );
    });
    return (
      <div>
        <NavigationBar />
        <Container>
          <Row>
            <Col className={"text-center my-4"} lg={"12"}>
              <h1>Homepage</h1>
            </Col>
          </Row>
          <Row>
            <ul>{links}</ul>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
