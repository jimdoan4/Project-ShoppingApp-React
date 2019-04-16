import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class ReviewPage extends Component {
	state = {
		apparelId: this.props.apparelId,
		reviews: [],
		newReview: {
			title: '',
			description: ''
		},
		redirectToUser: false,
		displayEditForm: false
	};

	getAllReviews = () => {
		axios.get(`/api/apparels/${this.state.apparelId}/reviews`).then((res) => {
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

	handleChange = (e) => {
		const changeNewReview = { ...this.state.newReview };
		changeNewReview[e.target.name] = e.target.value;
		this.setState({ newReview: changeNewReview });
	};

	createReview = (e) => {
		e.preventDefault();
		axios
			.post(`/api/apparels/${this.state.apparelId}/reviews`, {
				title: this.state.newReview.title,
				description: this.state.newReview.description
			})
			.then((res) => {
				const reviewsList = [ ...this.state.reviews ];
				reviewsList.unshift(res.data);
				this.setState({
					newReview: {
						name: '',
						size: ''
					},
					displayReviewForm: false,
					reviews: reviewsList
				});
			});
		this.getAllReviews();
	};

	handleChange = (e) => {
		const changedReview = { ...this.state.newReview };
		changedReview[e.target.name] = e.target.value;
		this.setState({ newReview: changedReview });
	};

	updateReview = (e) => {
		e.preventDefault();
		axios
			.put(`/api/apparels/${this.state.apparelId}`, {
				title: this.state.newReview.title,
				description: this.state.newReview.description
			})
			.then((res) => {
				this.setState({ apparel: res.data, displayEditForm: false });
			});
		this.getAllReviews();
	};

	// deleteReview = () => {
	// 	axios.delete(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`).then((res) => {
	// 		this.setState({ redirectToUser: true });
	// 	});
	// };

	// handleSignUp = (e) => {
	// 	e.preventDefault();
	// 	this.createReview();
	// };

	render() {
		return (
			<div>
				{this.state.reviews.map((review) => {
					return (
						<div key={review._id}>
							<Card
								className="container"
								style={{ width: '80rem', marginTop: '0px', marginBottom: '50px' }}
							>
								<Card.Body className="container">
									<Card.Title className="container">
										<Link
											to={`/apparels/${this.state.apparelId}/reviews/${review._id}`}
											key={review._id}
										>
											<p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{review.title}
											</p>

											<p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{review.description}
											</p>
										</Link>
									</Card.Title>
								</Card.Body>
								</Card>
								
								<br />
								<br />
								<div>
								<Form onSubmit={this.createReview}>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail" className= 'text-center'>
											<Form.Label htmlFor="title">Title</Form.Label>
											<Form.Control
												className= 'container'
												type="text"
												name="title"
												onChange={this.handleChange}
												value={this.state.newReview.title}
												placeholder="Enter Title"
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail" className= 'text-center'>
											<Form.Label  htmlFor="description">Description</Form.Label>
											<Form.Control
												className= 'container'
												type="text"
												name="description"
												onChange={this.handleChange}
												value={this.state.newReview.description}
												placeholder="Enter Description"
											/>
										</Form.Group>
									</Form.Row>

									<div className="row">
										<Button
											className="container"
											type="submit"
											style={{
												width: '12rem',
												backgroundColor: 'white',
												borderColor: 'white',
												color: 'black',
												borderColor: 'black'
											}}
										>
											Review this item
										</Button>
									</div>
									<div className="text-center">
										<Link
											className="text-center"
											to={`/apparels/${this.state.apparelId}/reviews/${review._id}`}
										>
											<Button
												className="text-center"
												type="submit"
												style={{
													width: '12rem',
													marginBottom: '30px',
													backgroundColor: 'white',
													borderColor: 'white',
													color: 'black',
													borderColor: 'black',
													marginTop: '13px'
												}}
											>
												Edit Review
											</Button>
										</Link>
									</div>
								</Form>
								</div>
						</div>
							
					);
				})}
			
			</div>
			
		);
	}
}

export default ReviewPage;
