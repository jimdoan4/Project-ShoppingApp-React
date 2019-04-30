import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


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
		redirectToApparel: false,
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
			this.setState({ redirectToApparel: true });
		});
	};

	render() {
		if (this.state.redirectToApparel) {
			return <Redirect to={`/apparels/`} />;
		}
		return (
			<div>
				<div style={{ marginTop: '10px', marginBottom: '40px' }}>
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
										<option>{this.state.apparel.size}</option>
									</Form.Control>
								</Container>
							</Form.Group>
						
							<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
								<button
									className=""
									onClick={this.toggleEditForm}
									style={{
										backgroundColor: '#3a5d96',
										borderColor: 'black',
										color: 'white',
										marginRight: '10px'
									}}
								>
									Edit Apparel
								</button>

								<button
									className=""
									style={{ backgroundColor: '#3a5d96', borderColor: 'black', color: 'white' }}
									onClick={this.deleteApparel}
								>
									Delete Apparel
								</button>
							</Container>
						</Card>
					</Card>
				</div>
				{this.state.displayEditForm ? (
					<form
						style={{ marginTop: '10px', marginBottom: '60px' }}
						onSubmit={this.updateApparel}
						className="col text-center"
					>
						<div className="col text-center">
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '10px' }} htmlFor="name">
									Apparel Name{' '}
								</label>

								<input
									style={{ height: '50px', width: '320px', marginRight: '99px' }}
									className="text-center"
									id="name"
									type="text"
									name="name"
									onChange={this.handleChange}
									value={this.state.apparel.name}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="size">
									Size{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="size"
									type="text"
									name="size"
									onChange={this.handleChange}
									value={this.state.apparel.size}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="image">
									Image{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="image"
									type="text"
									name="image"
									onChange={this.handleChange}
									value={this.state.apparel.image}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="price">
									Price
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="price"
									type="number"
									name="price"
									onChange={this.handleChange}
									value={this.state.apparel.price}
								/>
							</div>
							<div style={{ marginTop: '6px' }} className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="description">
									Description{' '}
								</label>
								<input
									style={{
										height: '54px',
										width: '390px',
										marginRight: '90px',
										paddingTop: '100px',
										paddingBottom: '100px',
										paddingLeft: '100px',
										paddingRight: '100px'
									}}
									className="text-center"
									id="description"
									type="text"
									name="description"
									onChange={this.handleChange}
									value={this.state.apparel.description}
								/>
							</div>
						</div>
						<div className="text-center" style={{ marginTop: '20px' }}>
							<button
								style={{
									backgroundColor: '#3a5d96',
									borderColor: 'black',
									color: 'white'
								}}
								className="text-center rockstar"
							>
								Submit
							</button>
						</div>
					</form>
				) : null}
			</div>
		);
	}
}

export default SingleApparel;
