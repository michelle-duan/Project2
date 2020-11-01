import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Cookies from "universal-cookie";
import NavigationBar from "./NavigationBar";
import Jumbo from "./Jumbotron.js";

class SinglePages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      display: false,
      userToken: "",
      enableComment: "",
      comment: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const cookies = new Cookies();
    const userToken = cookies.get("pwLoggedIn");
    axios
      .get("/videos/getContent", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        this.setState({
          id: data.id,
          name: data.name,
          url: data.url,
          display: true,
          userToken: userToken,
          enableComment:
            userToken !== undefined && userToken !== null && userToken !== "",
          comment: "",
        });
      });
  }

  handleCommentOnChange(newValue) {
    this.setState({
      comment: newValue,
    });
  }

  render() {
    let displayContent = null;
    if (this.state.display) {
      displayContent = (
        <div style={{ "text-align": "center" }}>
          <Row>
            <Col className={"text-center my-4"} lg={"12"}>
              <h1>{this.state.name}</h1>
            </Col>
          </Row>
          <iframe
            width="990"
            height="600"
            src={this.state.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <hr />
          <CommentForm
            className={"my-4"}
            videoId={this.state.id}
            enableComment={this.state.enableComment}
            comment={this.state.comment}
            userToken={this.state.userToken}
            commentOnChange={(value) => this.handleCommentOnChange(value)}
          />
          <hr />
          <Comments videoId={this.state.id} />
        </div>
      );
    } else {
      displayContent = (
        <Row>
          <Col className={"text-center my-4"} lg={"12"}>
            <h1>Waiting...</h1>
          </Col>
        </Row>
      );
    }
    return (
      <div>
        <NavigationBar />
        <Jumbo />

        <Container>{displayContent}</Container>
      </div>
    );
  }
}

SinglePages.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default SinglePages;
