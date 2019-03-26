import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default class CityHoodie extends Component {
	state = {
		apparels: [],
		newApparel: {
			image: '',
			name: '',
			size: '',
			price: '',
			description: ''
		},
		isApparelFormDisplayed: false
	};

	componentDidMount = () => {
		axios.get('/api/v1/apparels').then((res) => {
			this.setState({ apparels: res.data });
		});
	};
	toggleApparelForm = () => {
		this.setState((state, props) => {
			return { isApparelFormDisplayed: !state.isApparelFormDisplayed };
		});
	};

	handleChange = (e) => {
		const cloneNewApparel = { ...this.state.newApparel };
		cloneNewApparel[e.target.name] = e.target.value;
		this.setState({ newApparel: cloneNewApparel });
	};

	createApparel = (e) => {
		e.preventDefault();
		axios
			.post('/api/v1/apparels', {
				name: this.state.newApparel.name,
				description: this.state.newApparel.description,
				image: this.state.newApparel.image,
				price: this.state.newApparel.price,
				size: this.state.newApparel.size
			})
			.then((res) => {
				const apparelsList = [ ...this.state.apparels ];
				apparelsList.unshift(res.data);
				this.setState({
					newApparel: {
						name: '',
						description: '',
						image: '',
						price: '',
						size: ''
					},
					isApparelFormDisplayed: false,
					apparels: apparelsList
				});
			});
	};

	render() {
		return (
			<div>
				<Jumbotron fluid className="nutrition" style={{ height: '26rem' }}>
					<Container>
						<h1>Men Clothing</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</Container>
				</Jumbotron>

				<div className= 'container'>
					<Card className= 'container' style={{ width: '34rem' }}>
						<Card>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>City Sweat Pullover Hoodie</Card.Title>
								<Card.Title>
									Cozy meets technical in this breathable, sweat-wicking pullover hoodie that keeps
									your muscles warm before and after training.
								</Card.Title>
								<Card.Title>$68.00</Card.Title>
							</Card.Body>
							<Form.Group controlId="exampleForm.ControlSelect1" style={{ width: '34rem' }}>
								<Form.Label>Size</Form.Label>
								<Form.Control as="select" style={{ width: '12rem' }}>
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</Form.Control>
                            </Form.Group>      
							<button
								style={{ width: '10rem', backgroundColor: 'red' }}
								onClick={this.toggleApparelForm}
							>
								Add to Cart
							</button>
							<Card style={{ width: '31.9rem' }}>
								<Card.Body>
									<Card.Title>Reviews</Card.Title>
									<Card.Text>
										This is where you write your reviews.
									</Card.Text>
								</Card.Body>
							</Card>
						</Card>
					</Card>
				</div>
                </div>
                
		);
	}
}
