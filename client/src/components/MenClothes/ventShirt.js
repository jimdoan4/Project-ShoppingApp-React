// import React, { Component } from 'react';
// // import { Container } from 'react-bootstrap';
// // import { Jumbotron } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default class VentShirt extends Component {
// 	state = {
// 		apparels: [],
// 		newApparel: {
// 			image: '',
// 			name: '',
// 			size: '',
// 			price: '',
// 			description: ''
// 		},
// 		isApparelFormDisplayed: false
// 	};

// 	componentDidMount = () => {
// 		axios.get('/api/v1/apparels').then((res) => {
// 			this.setState({ apparels: res.data });
// 		});
// 	};
// 	toggleApparelForm = () => {
// 		this.setState((state, props) => {
// 			return { isApparelFormDisplayed: !state.isApparelFormDisplayed };
// 		});
// 	};

// 	handleChange = (e) => {
// 		const cloneNewApparel = { ...this.state.newApparel };
// 		cloneNewApparel[e.target.name] = e.target.value;
// 		this.setState({ newApparel: cloneNewApparel });
// 	};

// 	createApparel = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post('/api/v1/apparels', {
// 				name: this.state.newApparel.name,
// 				description: this.state.newApparel.description,
// 				image: this.state.newApparel.image
// 			})
// 			.then((res) => {
// 				const apparelsList = [ ...this.state.apparels ];
// 				apparelsList.unshift(res.data);
// 				this.setState({
// 					newApparel: {
// 						name: '',
// 						description: '',
// 						image: ''
// 					},
// 					isApparelFormDisplayed: false,
// 					apparels: apparelsList
// 				});
// 			});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				{this.state.apparels.map((apparel) => {
// 					return (
// 						<Card key={apparel._id} style={{ width: '18rem' }}>
// 							<Link to={`/${apparel._id}`}>
// 								<Card.Img variant="top" src={apparel.image} alt={apparel.name} />
// 							</Link>
// 							<Card.Body>
// 								<Card.Title>{apparel.name}</Card.Title>
// 								<Card.Text>
// 									Some quick example text to build on the card title and make up the bulk of the
// 									card's content.
// 								</Card.Text>
// 							</Card.Body>
// 						</Card>
// 						// <div key={apparel._id}>
// 						// 	<Link to={`/${apparel._id}`}>
// 						// 		<img src={apparel.image} alt={apparel.name} />
// 						// 		{apparel.name}
// 						// 	</Link>
// 						// </div>
// 					);
// 				})}
// 				<button onClick={this.toggleApparelForm}>+ New Clothing</button>
// 				{this.state.isApparelFormDisplayed ? (
// 					<form onSubmit={this.createApparel}>
// 						<div>
// 							<label htmlFor="name">Name</label>
// 							<input
// 								id="name"
// 								type="text"
// 								name="name"
// 								onChange={this.handleChange}
// 								value={this.state.newApparel.name}
// 							/>
// 						</div>
// 						<div>
// 							<label htmlFor="description">Description</label>
// 							<textarea
// 								id="description"
// 								type="text"
// 								name="description"
// 								onChange={this.handleChange}
// 								value={this.state.newApparel.description}
// 							/>
// 						</div>
// 						<button>Add to Cart</button>
// 					</form>
// 				) : null}
// 			</div>
// 		);
// 	}
// }
