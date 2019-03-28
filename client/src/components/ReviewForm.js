// import React, { Component } from 'react';
// import axios from 'axios';

// class ReviewForm extends Component {
// 	state = {
// 		apparelId: this.props.apparelId,
// 		reviews: this.props.reviews,
// 		newReview: {
// 			title: '',
// 			description: '',
// 		}
// 	};
// 	handleChange = (e) => {
// 		const changeNewReview = { ...this.state.newReview };
// 		changeNewReview[e.target.name] = e.target.value;
// 		this.setState({ newReview: changeNewReview });
// 	};
// 	createReview = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post(`/api/apparels/${this.state.apparelId}/reviews`, {
// 				title: this.state.review.title,
// 				description: this.state.review.description,
// 			})
// 			.then((res) => {
// 				const reviewsList = [ ...this.state.reviews ];
// 				reviewsList.unshift(res.data);
// 				this.setState({
// 					newReview: {
//                         title: '',
//                         description: '',
// 					},
// 					displayReviewForm: false,
// 					reviews: reviewsList
// 				});
// 			});
// 	};


// 	render() {
// 		return (
// 			<div>
// 					<form onSubmit={this.createReview}>
// 						<div>
// 							<label htmlFor="name">Title</label>
// 							<input
// 								id="title"
// 								type="text"
// 								name="title"
// 								onChange={this.handleChange}
// 								value={this.state.newReview.title}
// 							/>
// 						</div>
// 						<div>
// 							<label htmlFor="description">Description</label>
// 							<input
// 								id="description"
// 								type="text"
// 								name="description"
// 								onChange={this.handleChange}
// 								value={this.state.newReview.description}
// 							/>
// 						</div>
// 						<button>Submit</button>
// 					</form>
// 				</div>		
// 		);
// 	}
// }

// export default ReviewForm

// 	// <Card className='container' style={{ width: '80rem', marginTop: '50px', marginBottom: '50px' }}>
// 	// 							<Card.Body className='container'>
// 	// 								<Card.Title className='container'>Reviews</Card.Title>
// 	// 								<Card.Text className='container'>
// 	// 									This is where you write your reviews.
// 	// 								</Card.Text>
// 	// 							</Card.Body>
//     //                             <button className='container' style={{ width: '12rem' }}>Review this item</button>
//     //                                 <button className='container' style={{ width: '12rem', marginBottom: '30px' }}>Edit Review</button>
// 	// 						</Card>