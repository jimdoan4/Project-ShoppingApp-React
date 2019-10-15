import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { SingleApparelContainer } from "./styled-components/SingleApparelStyles";

class SingleApparel extends Component {
      // We'll set up the  array as an empty array to begin with
  state = {
    apparelId: this.props.apparelId,
    apparels: [],
    apparel: {
      _id: "",
      name: "",
      size: "",
      image: "",
      price: "",
      description: "",
      reviews: {}
    },
    redirectToApparel: false,
    displayEditForm: false
  };

  getApparelData = () => {
    axios.get(`/api/apparels/${this.state.apparelId}`).then(res => { // When the page loads, grab apparel id from the database
      this.setState({ apparel: res.data });
    });
  };

  componentDidMount = () => {
    this.getApparelData();
  };

  toggleEditForm = () => {  // This toggle the apparel button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  handleChange = e => {
    const updatedApparel = { ...this.state.apparel };
    updatedApparel[e.target.name] = e.target.value;
    this.setState({ apparel: updatedApparel });
  };

  updateApparel = e => {
    e.preventDefault();
    axios
      .put(`/api/apparels/${this.state.apparelId}`, {   // ask the server to update the apparel in the database
        image: this.state.apparel.image,
        name: this.state.apparel.name,
        description: this.state.apparel.description,
        size: this.state.apparel.size,
        price: this.state.apparel.price,
        reviews: {}
      })
      .then(res => {
        this.setState({ apparel: res.data, displayEditForm: false });
      });
    this.getApparelData();
  };

  deleteApparel = () => {
    axios.delete(`/api/apparels/${this.state.apparelId}`).then(res => { // Ask the server to delete this apparel
      this.setState({ redirectToApparel: true });
    });
  };

  render() {
    if (this.state.redirectToApparel) {
      return <Redirect to={`/apparels/`} />;
    }
    return (
      <SingleApparelContainer>
        <div style={{ marginTop: "10px", marginBottom: "40px" }}>
          <Card
            className="container"
            style={{ width: "31rem", marginBottom: "40px" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={this.state.apparel.image}
                alt="top"
              />
              <Card.Body>
                <Card.Title className="product-title">
                  {this.state.apparel.name}
                </Card.Title>
                <Card.Title className="product-title">
                  {this.state.apparel.description}
                </Card.Title>
                <Card.Title className="product-title">
                  ${this.state.apparel.price}.00
                </Card.Title>
              </Card.Body>

              <Form.Group
                controlId="exampleForm.ControlSelect1"
                className="container"
              >
                <Container className="text-center">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    as="select"
                    className="container"
                    style={{ width: "12rem", contentAlign: "center" }}
                  >
                    <option>{this.state.apparel.size}</option>
                  </Form.Control>
                </Container>
              </Form.Group>

              <Container
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                  marginTop: "8px"
                }}
              >
                <Button
                  className="edit-apparel-button"
                  onClick={this.toggleEditForm}
                >
                  Edit Apparel
                </Button>

                <Button
                  className="delete-apparel-button"
                  onClick={this.deleteApparel}
                >
                  Delete Apparel
                </Button>
              </Container>
            </Card>
          </Card>
        </div>
        {this.state.displayEditForm ? (
          <Form className="jumbotron" onSubmit={this.updateApparel}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.apparel.name}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="size"
                type="text"
                name="size"
                onChange={this.handleChange}
                value={this.state.apparel.size}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="image"
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.state.apparel.image}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="price"
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.apparel.price}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                className="text-center"
                id="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.apparel.description}
              />
            </Form.Group>
            <div
              className="text-center"
              style={{ marginTop: "20px" }}
            >
              <Button className="text-center submit-button">Submit</Button>
            </div>
          </Form>
        ) : null}
      </SingleApparelContainer>
    );
  }
}

export default SingleApparel;
