import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Form } from "react-bootstrap";
import { SingleReviewContainer } from "./styled-components/SingleReviewStyles";

export default class SingleUser extends Component {
      // We'll set up the  array as an empty array to begin with
  state = {
    userId: this.props.userId,
    currentUser: {
      _id: "",
      userName: "",
      password: ""
    },
    redirectToHome: false,
    displayEditForm: false
  };

  getUserData = () => {
    axios.get(`/api/users/${this.state.userId}`).then(res => { // When the page loads, grab user id from the database
      this.setState({ currentUser: res.data });
    });
  };

  componentDidMount = () => {
    this.getUserData();
  };

  toggleEditForm = () => {  // This toggle the user button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  handleChange = e => {
    const updatedUser = { ...this.state.currentUser };
    updatedUser[e.target.name] = e.target.value;
    this.setState({ currentUser: updatedUser });
  };

  updateUser = e => {
    e.preventDefault();
    axios
      .put(`/api/users/${this.state.userId}`, {  // ask the server to update the user in the database
        password: this.state.currentUser.password,
        userName: this.state.currentUser.userName
      })
      .then(res => {
        this.setState({ user: res.data, displayEditForm: false });
      });
    this.getUserData();
  };

  deleteUser = () => {
    axios.delete(`/api/users/${this.state.userId}`).then(res => {  // Ask the server to delete this user
      this.setState({ redirectToHome: true });
    });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/users" />;
    }

    return (
      <SingleReviewContainer>
        <Form className="jumbotron text-center" onSubmit={this.updateUser}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              id="userName"
              type="text"
              name="userName"
              onChange={this.handleChange}
              value={this.state.currentUser.userName}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              id="password"
              type="text"
              name="password"
              onChange={this.handleChange}
              value={this.state.currentUser.password}
            />
          </Form.Group>

          <div className="text-center" style={{ marginTop: "20px" }}>
            <button className="text-center edit-button">Submit</button>
            <button className="delete-button" onClick={this.deleteUser}>
              Delete
            </button>
          </div>
        </Form>

        <div className="text-center" style={{ marginTop: "18px" }}>
          <Link className="text-center back-button" to={"/users/"}>
            Back To User Account
          </Link>
        </div>
      </SingleReviewContainer>
    );
  }
}
