// import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';

// class Review extends Component {
// 	state = {
// 		review: {
// 			title: '',
// 			description: '',
// 		},
// 		redirectToApparel: false,
// 		displayEditForm: false,
// 		apparelId: this.props.match.params.apparelId,
// 		reviewId: this.props.match.params.reviewId
// 	};

// 	componentDidMount = () => {
// 		axios.get(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`).then((res) => {
// 			this.setState({ review: res.data });
// 		});
// 	};

// 	toggleEditForm = () => {
// 		this.setState((state, props) => {
// 			return { displayEditForm: !state.displayEditForm };
// 		});
// 	};

// 	handleChange = (e) => {
// 		const updatedReview = { ...this.state.review };
// 		updatedReview[e.target.name] = e.target.value;
// 		this.setState({ review: updatedReview });
// 	};

// 	updateReview = (e) => {
// 		e.preventDefault();
// 		axios
// 			.put(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`, {
// 				title: this.state.review.title,
// 				description: this.state.review.description,
// 			})
// 			.then((res) => {
// 				this.setState({ review: res.data, displayEditForm: false });
// 			});
// 	};

// 	deleteReview = () => {
// 		axios.delete(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`).then((res) => {
// 			this.setState({ redirectToApparel: true });
// 		});
// 	};

// 	render() {
// 		if (this.state.redirectToApparel) {
// 			return <Redirect to={`/${this.state.apparelId}/`} />;
// 		}
// 		return (
// 			<div>
// 				<h3 className="text-center">{this.state.review.title}</h3>
// 				{this.state.displayEditForm ? (
// 					<form onSubmit={this.updateReview}>
// 						<div>
// 							<label htmlFor="name">Title</label>
// 							<input
// 								id="title"
// 								type="text"
// 								name="title"
// 								onChange={this.handleChange}
// 								value={this.state.review.title}
// 							/>
// 						{/* </div> */}
// 						<div>
// 							<label htmlFor="description">Description</label>
// 							<input
// 								id="description"
// 								type="text"
// 								name="description"
// 								onChange={this.handleChange}
// 								value={this.state.review.description}
// 							/>
// 						</div>

// 						<button>Submit</button>
// 					</form>
// 				) : (
// 					<div>
// 						<div className="col">
// 							<p>Title: {this.state.review.title}</p>
// 							<p>Description: {this.state.review.description}</p>
// 						</div>

// 						<div className="row">
// 							<button onClick={this.toggleEditForm}>Edit Review</button>
// 							<button onClick={this.deleteReview}>Delete Review</button>
// 						</div>
// 					</div>
// 				)}
// 				<Link to={`/${this.state.apparelId}/`}>Back To Home</Link>
// 			</div>
// 		);
// 	}
// }

// export default Review;
