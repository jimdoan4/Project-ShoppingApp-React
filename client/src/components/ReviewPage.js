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
import { Row } from 'react-bootstrap';

export default class ReviewPage extends Component {
	state = {
		apparelId: this.props.apparelId,
		reviews: [],
		newReview: {
			screenName: '',
			title: '',
			description: ''
		},
		redirectToUser: false,
		displayEditForm: false,
		displayReviewForm: false
	};

	getAllReviews = () => {
		axios.get(`/api/apparels/${this.state.apparelId}/reviews/`).then((res) => {
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

	toggleReviewForm = () => {
		this.setState((state, props) => {
			return { displayReviewForm: !state.displayReviewForm };
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
			.post(`/api/apparels/${this.state.apparelId}/reviews/`, {
				screenName: this.state.newReview.screenName,
				title: this.state.newReview.title,
				description: this.state.newReview.description
			})
			.then((res) => {
				const reviewsList = [ ...this.state.reviews ];
				reviewsList.unshift(res.data);
				this.setState({
					newReview: {
						screenName: '',
						title: '',
						description: ''
					},
					displayEditForm: false,
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
				screenName: this.state.newReview.screenName,
				title: this.state.newReview.title,
				description: this.state.newReview.description
			})
			.then((res) => {
				this.setState({ apparel: res.data, displayReviewForm: false });
			});
		this.getAllReviews();
	};

	deleteReview = (e, review) => {
		e.preventDefault();
		axios.delete(`/api/apparels/${this.state.apparelId}/reviews/${review._id}`).then((res) => {
			this.getAllReviews();
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/apparels/`} />
		}
		return (
			<div className="text-center" style={{ position: 'block' }}>
				<h3>Write A Review About This Apparel Item</h3>
				<button
					style={{
						marginTop: '14px',
						backgroundColor: 'white',
						borderColor: 'black',
						color: 'black'
					}}
					onClick={this.toggleEditForm}
				>
					Check to see All of the Reviews About this Item
				</button>
				<div className="">
					{this.state.reviews.map((review) => {
						return (
							<div>
								{this.state.displayEditForm ? (
								
										<Card
											className="text-center"
											style={{
												backgroundColor: 'grey',
												color: 'white',
												paddingTop: '14px',
												paddingBottom: '14px',
												marginTop: '20px'
											}}
										>
										<div style= {{color: 'white'}}>
											<p style= {{color: 'white', fontSize: '20px'}}>Screen Name: {review.screenName}</p>
											<p style= {{color: 'white', fontSize: '20px'}}>Title: {review.title}</p>
											<p style= {{color: 'white', fontSize: '20px'}}>Description: {review.description}</p>
											</div>
										

											<Container
												style={{ textAlign: 'center' }}
												className="text-center"
											>
											<Row>
												<Col> 
												<Link
													to={`/apparels/${this.state.apparelId}/reviews/${review._id}`}
													key={review._id}
												> 
													<button
														style={{
															backgroundColor: '#3a5d96', color: 'white',
                            								borderColor: 'black',
															marginRight: '10px'
														}}
													>
														Edit Review
													</button>
												 </Link> 
												</Col>
												<Col>
												<button
													style={{
														backgroundColor: '#3a5d96', color: 'white',
                            							borderColor: 'black'
													}}
													key={review._id}
													onClick={(e) => this.deleteReview(e, review)}
												>
													Delete Review
												</button>
												</Col>
												</Row>
											</Container>
										</Card>
								
								) : null}
							</div>
						);
					})}

					<div className="text-center col" style={{ marginTop: '30px' }}>
						
							<div className="container text-center">
							
									<Form
										className="text-center"
										style={{
											display: 'inline-block',
											backgroundColor: 'grey',
											color: 'white',
											marginBottom: '30px'
											
										}}
										onSubmit={this.createReview}
									>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label style= {{marginTop: '14px'}}htmlFor="screenName">Screen Name </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="screenName"
													onChange={this.handleChange}
													value={this.state.newReview.screenName}
													placeholder="Enter Your Screen Name"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="title">Title </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="title"
													onChange={this.handleChange}
													value={this.state.newReview.title}
													placeholder="Enter A Brief Title of Your Review"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="description">Description </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="description"
													onChange={this.handleChange}
													value={this.state.newReview.description}
													placeholder="Enter A Description Of Your Review About this Item"
												/>
											</Form.Group>
										</Form.Row>
										<div style={{ marginLeft: '140px' }} className="text-center">
											<button
												className="text-center"
												variant="primary"
												type="submit"
												style={{
													marginRight: '140px',
													paddingLeft: '60px',
													paddingRight: '60px',
													marginTop: '1px',
													marginBottom: '15px',
													backgroundColor: '#3a5d96', 
													color: 'white',
                            						borderColor: 'black'
												}}
											>
												Add a Review
											</button>
										</div>
									</Form>
						
							</div>
						
					</div>
				</div>
			</div>
		);
	}
}

