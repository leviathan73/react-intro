import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { About } from "./pages/About";
import First from "./First.tsx";

const Button = () => (
  <Route
    render={({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/new-location");
        }}
      >
        Click Me!
      </button>
    )}
  />
);
class AppLayout extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>Header</Col>
        </Row>
        <Row>
          <Col
            style={{
              flex: "0 0 250px"
            }}
          >
            <ul>
              <li></li>
              <li>
                <Link to="/about/">Lorem, ipsum dolor.</Link>
              </li>
              <li>
                <Link to="/info/">Enim, perferendis rem.</Link>
              </li>
              <li>Eveniet, corrupti exercitationem.</li>
              <li>Optio, odio architecto.</li>
              <li>Et, odit labore.</li>
            </ul>
            <Button>sdfsdfsdfsdfs</Button>
          </Col>
          <Col
            style={{
              background: "red"
            }}
          >
            {this.props.children}
          </Col>
        </Row>
        <Row>
          <Col>
            Footer
            <About
              render={props => {
                return <div>nice</div>;
              }}
            ></About>
            <First></First>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AppLayout);
