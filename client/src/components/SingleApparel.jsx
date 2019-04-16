import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import Review from './Review';

class SingleApparel extends Component {
	state = {
		apparelId: this.props.apparelId,
		apparels: [],
		apparel: {
			_id: '',
			name: '',
			size: '',
			image: '',
			price: '',
			description: '',
			reviews: {}
		},
		redirectToUser: false,
		displayEditForm: false
	};

	getApparelData = () => {
		axios.get(`/api/apparels/${this.state.apparelId}`).then((res) => {
			this.setState({ apparel: res.data });
		});
	};

	componentDidMount = () => {
		this.getApparelData();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	handleChange = (e) => {
		const updatedApparel = { ...this.state.apparel };
		updatedApparel[e.target.name] = e.target.value;
		this.setState({ apparel: updatedApparel });
	};

	createApparel = (e) => {
		e.preventDefault();
		axios
			.post(`/api/apparels`, {
				image: this.state.apparel.image,
				name: this.state.apparel.name,
				description: this.state.apparel.description,
				size: this.state.apparel.size,
				price: this.state.apparel.price,
				reviews: {}
			})
			.then((res) => {
				const apparelsList = [ ...this.state.apparel ];
				apparelsList.unshift(res.data);
				this.setState({
					newApparel: {
						name: '',
						size: '',
						image: '',
						price: '',
						description: '',
						reviews: {}
					},
					displayApparelForm: false,
					apparels: apparelsList
				});
			});
	};

	handleChange = (e) => {
		const newApparel = { ...this.state.apparel };
		newApparel[e.target.name] = e.target.value;
		this.setState({ currentApparel: newApparel });
	};

	updateApparel = (e) => {
		e.preventDefault();
		axios
			.put(`/api/apparels/${this.state.apparelId}`, {
				image: this.state.apparel.image,
				name: this.state.apparel.name,
				description: this.state.apparel.description,
				size: this.state.apparel.size,
				price: this.state.apparel.price,
				reviews: {}
			})
			.then((res) => {
				this.setState({ apparel: res.data, displayEditForm: false });
			});
		this.getApparelData();
	};

	deleteApparel = () => {
		axios.delete(`/api/apparels/${this.state.apparelId}`).then((res) => {
			this.setState({ redirectToUser: true });
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/apparels/${this.state.apparelId}/`} />;
		}
		return (
			<div>
				<Jumbotron fluid className="cart" style={{ height: '26rem' }} />

				<form onSubmit={this.createApparel}>
					<div style={{ marginTop: '100px', marginBottom: '100px' }}>
						<Card className="container" style={{ width: '43rem', marginBottom: '40px' }}>
							<Card>
								<Card.Img variant="top" src={this.state.apparel.image} alt="top" />
								<Card.Body>
									<Card.Title>{this.state.apparel.name}</Card.Title>
									<Card.Title>{this.state.apparel.description}</Card.Title>
									<Card.Title>${this.state.apparel.price}.00</Card.Title>
								</Card.Body>

								<Form.Group
									controlId="exampleForm.ControlSelect1"
									className="container"
									style={{ width: '34rem' }}
								>
									<Container style={{ textAlign: 'center' }}>
										<Form.Label>Size</Form.Label>
										<Form.Control as="select" className="container" style={{ width: '12rem' }}>
											<option>S</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</Form.Control>
									</Container>
								</Form.Group>
								<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
									<Button style={{ backgroundColor: 'white', borderColor: 'black' }}>
										<Link
											to={{
												pathname: `/cart/${this.state.apparelId}`,
												state: { apparelId: true }
											}}
										>
											Add to Cart
										</Link>
									</Button>
								</Container>
							</Card>
						</Card>

						{/* <Card className="container" style={{ width: '80rem', marginTop: '50px', marginBottom: '50px' }}>
							<Card.Body className="container">
								<Card.Title className="container">Reviews</Card.Title>
								<Card.Text className="container">This is where you write your reviews.</Card.Text>
							</Card.Body>
							<div className="row">
								<Button
									className="container"
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
							<div className="row">
								<Button
									className="container"
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
							</div>
						</Card> */}
					</div>
				</form>
			</div>
		);
	}
}

export default SingleApparel;
