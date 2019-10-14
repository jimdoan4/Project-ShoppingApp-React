import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default class UserAccount extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    users: [],
    newUser: {
      userName: "",
      password: "",
      apparels: []
    },
    displayUserForm: false
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get("/api/users/").then(res => {
      // When the page loads, grab all users from the database
      this.setState({ users: res.data });
    });
  };

  createUser = e => {
    axios
      .post("/api/users/", {
        // Ask the server to create a new user in the database
        password: this.state.newUser.password,
        userName: this.state.newUser.userName,
        apparels: []
      })
      .then(res => {
        const usersList = [this.state.users]; // Copy the old users list into a new one
        usersList.unshift(res.data);
        this.setState({
          newUser: {
            password: "",
            userName: "",
            apparels: {}
          },
          displayUserForm: false,
          users: usersList
        });
      });
    this.getAllUsers();
  };

  handleChange = e => {
    const changeNewUser = { ...this.state.newUser };
    changeNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: changeNewUser });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createUser();
  };

  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <Card>
              <Row>
                <Col>
                  <Card.Body className="text-center add-apparel-button">
                    <Link
                      style={{ color: "black" }}
                      to={`/users/${user._id}`}
                      key={user._id}
                    >
                      Welcome: {user.userName}
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          );
        })}

        <Container>
          <Card
            className="container"
            style={{
              width: "33rem",
              height: "18rem",
              paddingTop: "35px",
              marginTop: "230px",
              border: "1px solid black"
            }}
          >
            <Form
              className="text-center"
              style={{ display: "inline-block" }}
              onSubmit={this.handleSignUp}
            >
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label htmlFor="userName">Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    onChange={this.handleChange}
                    value={this.state.newUser.userName}
                    placeholder="Enter Username"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.newUser.password}
                    placeholder="Enter Password"
                  />
                </Form.Group>
              </Form.Row>
              <div className="text-center">
                <Button
                  className="text-center add-apparel-button"
                  variant="primary"
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}
