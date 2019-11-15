import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ApparelContainer } from "./styled-components/ApparelListStyles";

export default class MenClothes extends Component {
      // We'll set up the  array as an empty array to begin with
  state = {
    apparels: [],
    newApparel: {
      name: "",
      size: "",
      image: "",
      price: "",
      description: "",
      review: []
    },
    redirectToApparel: false,
    displayApparelForm: false
  };

  componentDidMount = () => {
    this.getAllApparels();
  };

  getAllApparels = () => {
    axios.get(`/api/apparels/`).then(res => {  // When the page loads, grab all apparels from the database
      this.setState({ apparels: res.data });
    });
  };

  createApparel = e => {
    e.preventDefault();
    axios
      .post(`/api/apparels`, {   // Ask the server to create a new apparel in the database
        name: this.state.newApparel.name,
        size: this.state.newApparel.size,
        image: this.state.newApparel.image,
        description: this.state.newApparel.description,
        price: this.state.newApparel.price
      })
      .then(res => {
        const apparelsList = [...this.state.apparels];  // Copy the old apparels list into a new one
        apparelsList.unshift(res.data);
        this.setState({
          newApparel: {
            name: "",
            size: "",
            image: "",
            price: "",
            description: ""
          },
          displayApparelForm: false,
          apparels: apparelsList
        });
      });
  };

  toggleApparelForm = () => {  // This toggle the apparel button when clicked
    this.setState((state, props) => {
      return { displayApparelForm: !state.displayApparelForm };
    });
  };


     //We need to pass in multiple arguments here.  The first is the object of the specific idea that is being changed.
  //And the event object is the special event listener object that has information about the value and name
  handleChange = e => {
    const changeNewApparel = { ...this.state.newApparel };
    changeNewApparel[e.target.name] = e.target.value;
    this.setState({ newApparel: changeNewApparel });
  };

  render() {
    return (
      <div>
        <Jumbotron
          className="apparel-page-image"
          style={{ height: "54vh" }}
        >
        </Jumbotron>

        <div className="text-center" style={{ marginBottom: "20px" }}>
          <Button
            className="add-apparel-button"
            onClick={this.toggleApparelForm}
          >
            <img
              style={{
                height: "30px",
                width: "30px",
                marginRight: "7px",
                color: "white"
              }}
              src="https://image.flaticon.com/icons/svg/863/863684.svg"
            />
            Add Apparel
          </Button>
        </div>
        <ApparelContainer>
          {this.state.displayApparelForm ? (
            <Form className="jumbotron" onSubmit={this.createApparel}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="name"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.newApparel.name}
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
                  value={this.state.newApparel.size}
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
                  value={this.state.newApparel.image}
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
                  value={this.state.newApparel.price}
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
                  value={this.state.newApparel.description}
                />
              </Form.Group>
              <div
                className="text-center"
                style={{ marginTop: "20px", marginLeft: "140px" }}
              >
                <button className="text-center submit-button">Submit</button>
              </div>
            </Form>
          ) : null}
        </ApparelContainer>

        <div className="row text-center">
          {this.state.apparels.map(apparel => {
            return (
              <div
                className="col"
                style={{
                  marginBottom: "20px",
                  justifyContent: "center"
                }}
              >
                <CardGroup
                  className="jumbotron"
                  style={{
                    justifyContent: "center"
                  }}
                >
                  <Card
                    key={apparel._id}
                    className="text-center"
                    style={{
                      width: "18rem",
                      margin: "20px"
                    }}
                  >
                    <Link to={`/apparels/${apparel._id}`} key={apparel._id}>
                      <Card.Img variant="top" className="clothes-list" src={apparel.image} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{apparel.name}</Card.Title>
                      <Card.Text>${apparel.price}.00</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
