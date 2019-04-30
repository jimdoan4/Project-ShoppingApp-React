import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';


export default class MenClothes extends Component {
	state = {
		apparels: [],
		newApparel: {
			name: '',
			size: '',
			image: '',
			price: '',
			description: '',
			review: []
		},
		redirectToApparel: false,
		displayApparelForm: false,
	};

	componentDidMount = () => {
		this.getAllApparels();
	};

	getAllApparels = () => {
		axios.get(`/api/apparels/`).then((res) => {
			this.setState({ apparels: res.data });
		});
	};

	createApparel = (e) => {
		e.preventDefault();
		axios
			.post(`/api/apparels`, {
				name: this.state.newApparel.name,
				size: this.state.newApparel.size,
				image: this.state.newApparel.image,
				description: this.state.newApparel.description,
				price: this.state.newApparel.price
			})
			.then((res) => {
				const apparelsList = [ ...this.state.apparels ];
				apparelsList.unshift(res.data);
				this.setState({
					newApparel: {
						name: '',
						size: '',
						image: '',
						price: '',
						description: ''
					},
					displayApparelForm: false,
					apparels: apparelsList
				});
			});
	};

	toggleApparelForm = () => {
		this.setState((state, props) => {
			return { displayApparelForm: !state.displayApparelForm };
		});
	};

	handleChange = (e) => {
		const changeNewApparel = { ...this.state.newApparel };
		changeNewApparel[e.target.name] = e.target.value;
		this.setState({ newApparel: changeNewApparel });
	};

	render() {
	
		return (
			<div>
				<Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container className="homefont" style={{ marginTop: '210px' }}>
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Let it Breathe</h1>
					</Container>
				</Jumbotron>
				<div style= {{marginBottom: '20px'}}>
				
				<button
					onClick={this.toggleApparelForm}
					style={{
						backgroundColor: '#3a5d96',
						borderColor: 'black',
						color: 'white', 
						marginRight: '14px',
						borderColor: 'white'
					

					}}
				>
				<img style ={{ height: '30px', width: '30px', marginRight: '7px', color: 'white'}} src= 'https://image.flaticon.com/icons/svg/863/863684.svg'/>
					Add Apparel
				</button>
				</div>
					<div>
				{this.state.displayApparelForm ? (
					<form
						style={{ marginTop: '10px', marginBottom: '60px' }}
						onSubmit={this.createApparel}
						className="col text-center"
					>
						<div className="col text-center">
							<div className="col s12 m6 text-center">
								<label htmlFor="name" style={{ marginRight: '30px', marginTop: '10px' }}>
									Apparel Name{' '}
								</label>

								<input
									style={{ height: '50px', width: '320px', marginRight: '112px', paddingRight: '200px' }}
									className="text-center"
									id="name"
									type="text"
									name="name"
									onChange={this.handleChange}
									value={this.state.newApparel.name}
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
									value={this.state.newApparel.size}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="image">
									Image{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '65px' }}
									className="text-center"
									id="image"
									type="text"
									name="image"
									onChange={this.handleChange}
									value={this.state.newApparel.image}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="price">
									Price
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '57px' }}
									className="text-center"
									id="price"
									type="number"
									name="price"
									onChange={this.handleChange}
									value={this.state.newApparel.price}
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
										marginRight: '100px',
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
									value={this.state.newApparel.description}
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
			
				
				<div className="row">
					{this.state.apparels.map((apparel) => {
						return (
							<div
								className="col"
								style={{
									marginLeft: '30px',
									marginRight: '30px',
									marginBottom: '30px'
								}}
							>
								<CardGroup className="row">
									<Card
										key={apparel._id}
										className="row"
										style={{
											width: '18rem',
											marginLeft: '30px',
											marginRight: '30px'
										}}
									>
										<Link to={`/apparels/${apparel._id}`} key={apparel._id}>
											<Card.Img variant="top" src={apparel.image} />
										</Link>
										<Card.Body>
											<Card.Title style={{ color: 'black' }}>{apparel.name}</Card.Title>
											<Card.Text style={{ color: 'black' }}>${apparel.price}.00</Card.Text>
										</Card.Body>
									</Card>
								</CardGroup>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
