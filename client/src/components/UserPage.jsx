import React, { Component } from "react";
import SingleUser from "./SingleUser";
import { Row } from "react-bootstrap";
export default class UserPage extends Component {
  state = {
    userId: this.props.match.params.userId
  };

  render() {
    return (
      <Row>
        <div className="col s12 m4 l3" style={{ marginTop: "50px" }}>
          <SingleUser userId={this.state.userId} />
        </div>
      </Row>
    );
  }
}
