import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { ReviewContainer } from "./styled-components/ReviewStyles";
import { Button } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
export default class ReviewPage extends Component {
      // We'll set up the  array as an empty array to begin with
  state = {
    apparelId: this.props.apparelId,
    reviews: [],
    newReview: {
      screenName: "",
      title: "",
      description: ""
    },
    redirectToUser: false,
    displayEditForm: false,
    displayReviewForm: false
  };

  getAllReviews = () => {
    axios.get(`/api/apparels/${this.state.apparelId}/reviews/`).then(res => { // When the page loads, grab all reviews from the database
      console.log(res.data);
      this.setState({ reviews: res.data });
    });
  };

  componentDidMount = () => {
    this.getAllReviews();
  };

  toggleEditForm = () => {
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  toggleReviewForm = () => {  // This toggle the review button when clicked
    this.setState((state, props) => {
      return { displayReviewForm: !state.displayReviewForm };
    });
  };

  handleChange = e => {
    const changeNewReview = { ...this.state.newReview };
    changeNewReview[e.target.name] = e.target.value;
    this.setState({ newReview: changeNewReview });
  };

  createReview = e => {
    e.preventDefault();
    axios
      .post(`/api/apparels/${this.state.apparelId}/reviews/`, {   // Ask the server to create a new review in the database
        screenName: this.state.newReview.screenName,
        title: this.state.newReview.title,
        description: this.state.newReview.description
      })
      .then(res => {
        const reviewsList = [...this.state.reviews];  // Copy the old reviews list into a new one
        reviewsList.unshift(res.data);
        this.setState({
          newReview: {
            screenName: "",
            title: "",
            description: ""
          },
          displayEditForm: false,
          reviews: reviewsList
        });
      });
    this.getAllReviews();
  };

  handleChange = e => {
    const changedReview = { ...this.state.newReview };
    changedReview[e.target.name] = e.target.value;
    this.setState({ newReview: changedReview });
  };

  updateReview = e => {
    e.preventDefault();
    axios
      .put(`/api/apparels/${this.state.apparelId}`, {   // ask the server to update the review in the database
        screenName: this.state.newReview.screenName,
        title: this.state.newReview.title,
        description: this.state.newReview.description
      })
      .then(res => {
        this.setState({ apparel: res.data, displayReviewForm: false });
      });
    this.getAllReviews();
  };

  deleteReview = (e, review) => {
    e.preventDefault();
    axios
      .delete(`/api/apparels/${this.state.apparelId}/reviews/${review._id}`) // Ask the server to delete this review
      .then(res => {
        this.getAllReviews();
      });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/apparels/`} />;
    }
    return (
      <ReviewContainer>
        <Jumbotron className="text-center review-header">
          <h3>REVIEWS</h3>
          <h5>How's this gear working for you</h5>
          <Button className="review-toggle" onClick={this.toggleEditForm}>
            All Reviews about this Item
          </Button>
          <Jumbotron>
            {this.state.reviews.map(review => {
              return (
                <div className="review-card">
                  {this.state.displayEditForm ? (
                    <Card className="text-center">
                      <div className="review-section">
                        <p>{review.screenName}</p>
                        <p>{review.title}</p>
                        <p>{review.description}</p>
                      </div>

                      <Container
                      >
                        <Row>
                          <Col>
                            <Link
                              to={`/apparels/${this.state.apparelId}/reviews/${review._id}`}
                              key={review._id}
                            >
                              <Button className="edit-review-button">
                                Edit Review
                              </Button>
                            </Link>
                          </Col>
                          <Col>
                            <Button
                              className="delete-review-button"
                              key={review._id}
                              onClick={e => this.deleteReview(e, review)}
                            >
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  ) : null}
                </div>
              );
            })}

            <Col style={{ marginTop: "20px" }}>
              <Container>
                <Form className="add-form" onSubmit={this.createReview}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label
                        className="form-label"
                        style={{ marginTop: "14px" }}
                      >
                        {" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="screenName"
                        onChange={this.handleChange}
                        value={this.state.newReview.screenName}
                        placeholder="Enter your username"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label
                        className="form-label"
                        htmlFor="title"
                      ></Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.newReview.title}
                        placeholder="Enter a review"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label
                        className="form-label"
                        htmlFor="description"
                      ></Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.newReview.description}
                        placeholder="Enter a description about this item"
                      />
                    </Form.Group>
                  </Form.Row>
                  <div style={{ marginLeft: "140px" }} className="text-center">
                    <Button
                      className="text-center add-review-button"
                      variant="primary"
                      type="submit"
                    >
                      Add a Review
                    </Button>
                  </div>
                </Form>
              </Container>
            </Col>
          </Jumbotron>
        </Jumbotron>
      </ReviewContainer>
    );
  }
}
