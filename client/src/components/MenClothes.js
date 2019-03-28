import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

class MenClothes extends Component {
	state = {
		apparels: [],
		apparel: {
			name: '',
			size: '',
			image: '',
			price: '',
			description: ''
		},
		displayApparelForm: false
	};

	componentDidMount = () => {
		this.getAllApparels();
	};

	getAllApparels = () => {
		axios.get('/api/apparels').then((res) => {
			this.setState({ apparels: res.data });
		});
	};

	createApparel = (e) => {
		e.preventDefault();
		axios
			.post('/api/apparels', {
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

	handleChange = (e) => {
		const newApparel = { ...this.state.apparel };
		newApparel[e.target.name] = e.target.value;
		this.setState({ apparel: newApparel });
	};

	render() {
		return (
			<div>
				<Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: '#6a7587' }}>Let it Breathe</h1>
					</Container>
				</Jumbotron>
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
										<Link to={`/${apparel._id}`}>
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

export default MenClothes;
