import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Form } from "react-bootstrap";
import { SingleReviewContainer } from "./styled-components/SingleReviewStyles";

export default class SingleReview extends Component {
  state = {
    review: {
      screenName: "",
      title: "",
      description: ""
    },
    redirectToReview: false,
    displayEditForm: false,
    apparelId: this.props.match.params.apparelId,
    reviewId: this.props.match.params.reviewId
  };

  getReviewData = () => {
    axios
      .get(
        `/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`
      )
      .then(res => {
        this.setState({ review: res.data });
      });
  };

  componentDidMount = () => {
    this.getReviewData();
  };

  toggleEditForm = () => {
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  handleChange = e => {
    const updateReview = { ...this.state.review };
    updateReview[e.target.name] = e.target.value;
    this.setState({ review: updateReview });
  };

  updateReview = e => {
    e.preventDefault();
    axios
      .put(
        `/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`,
        {
          screenName: this.state.review.screenName,
          title: this.state.review.title,
          description: this.state.review.description
        }
      )
      .then(res => {
        this.setState({ review: res.data, displayEditForm: false });
      });
    this.getReviewData();
  };

  deleteReview = () => {
    axios
      .delete(
        `/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`
      )
      .then(res => {
        this.setState({ redirectToReview: true });
      });
  };

  render() {
    if (this.state.redirectToReview) {
      return <Redirect to={`/apparels/${this.state.apparelId}`} />;
    }
    return (
      <SingleReviewContainer>
        <Form className="jumbotron text-center" onSubmit={this.updateApparel}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              id="screenName"
              type="text"
              name="screenName"
              onChange={this.handleChange}
              value={this.state.review.screenName}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              id="title"
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.review.title}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              className="text-center"
              id="description"
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.review.description}
            />
          </Form.Group>
          <div className="text-center" style={{ marginTop: "20px" }}>
            <button className="text-center edit-button">Submit</button>
            <button className="delete-button" onClick={this.deleteReview}>
              Delete
            </button>
          </div>
        </Form>

        <div className="text-center" style={{ marginTop: "18px" }}>
          <Link
            className="text-center back-button"
            to={`/apparels/${this.state.apparelId}/`}
          >
            Back To Apparels
          </Link>
        </div>
      </SingleReviewContainer>
    );
  }
}
