import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class ApparelItem extends Component {
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
			reviews: []
		},
		redirectToHome: false,
		displayEditForm: false
	};

	componentDidMount = () => {
		axios.get(`/api/apparels/${this.state.apparelId}`).then((res) => {
			this.setState({ apparel: res.data });
		});
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

	updateApparel = (e) => {
		e.preventDefault();
		axios
			.put(`/api/apparels/${this.state.apparelId}`, {
				image: this.state.apparel.image,
				name: this.state.apparel.name,
				description: this.state.apparel.description,
				size: this.state.apparel.size,
				price: this.state.apparel.price
			})
			.then((res) => {
				this.setState({ apparel: res.data, displayEditForm: false });
			});
	};

	deleteApparel = () => {
		axios.delete(`/api/apparels/${this.state.apparelId}`).then((res) => {
			this.setState({ redirectToHome: true });
		});
	};

	createApparel = (e) => {
		e.preventDefault();
		axios
			.post(`/api/apparels/${this.state.apparelId}`, {
				image: this.state.apparel.image,
				name: this.state.apparel.name,
				description: this.state.apparel.description,
				size: this.state.apparel.size,
				price: this.state.apparel.price
			})
			.then((res) => {
				const apparelsList = [ this.state.apparels ];
				apparelsList.unshift(res.data);
				this.setState({
					apparel: {
						name: '',
						size: '',
						image: '',
						price: '',
						description: ''
					},
					displayUserForm: false,
					apparels: apparelsList
				});
			});
	};

	render() {
		if (this.state.redirectToHome) {
			return <Redirect to="/" />;
		}

		return (
			<div>
				<Jumbotron fluid className="cart" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ color: 'black', fontWeight: 'bold' }}>Brand</h1>
						<p>This is a modified jumbotron that occupies the.</p>
					</Container>
				</Jumbotron>
				<form onSubmit={this.createApparel}>
					<div style={{ marginTop: '100px', marginBotton: '100px' }}>
						<Card className="container" style={{ width: '43rem' }}>
							<Card>
								<Card.Img variant="top" src={this.state.apparel.image} alt="top" />
								<Card.Body>
									<Card.Title>{this.state.apparel.name}</Card.Title>
									<Card.Title>{this.state.apparel.description}</Card.Title>
									<Card.Title>${this.state.apparel.price}</Card.Title>
								</Card.Body>
								<Form.Group
									controlId="exampleForm.ControlSelect1"
									className="container"
									style={{ width: '34rem' }}
								>
									<Form.Label>Size</Form.Label>
									<Form.Control as="select" className="container" style={{ width: '12rem' }}>
										<option>S</option>
										<option>M</option>
										<option>L</option>
										<option>XL</option>
									</Form.Control>
								</Form.Group>

								<Link
									to={{
										pathname: `/cart/${this.state.apparelId}`,
										state: { apparelId: true }
									}}
								>
									Add to Cart
								</Link>
							</Card>
						</Card>

						<Card className="container" style={{ width: '80rem', marginTop: '50px', marginBottom: '50px' }}>
							<Card.Body className="container">
								<Card.Title className="container">Reviews</Card.Title>
								<Card.Text className="container">This is where you write your reviews.</Card.Text>
							</Card.Body>
							<button className="container" style={{ width: '12rem' }}>
								Review this item
							</button>
							<button className="container" style={{ width: '12rem', marginBottom: '30px' }}>
								Edit Review
							</button>
						</Card>
					</div>
				</form>
			</div>
		);
	}
}

export default ApparelItem;
