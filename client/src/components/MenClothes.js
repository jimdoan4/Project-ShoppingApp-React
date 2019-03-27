import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import ApparelItem from './ApparelItem'
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
		isCreatureFormDisplayed: false,
		apparelId: this.props.match.params.apparelId,
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
					isApparelFormDisplayed: false,
					apparels: apparelsList
				});
			});
	};
	// 	axios.post('/api/apparels', { apparel: this.state.apparel }).then((res) => {
	// 		console.log(res.data);
	// 		this.setState({ redirectToHome: true, createdApparel: res.data });
	// 	});
	// };

	handleChange = (e) => {
		const newApparel = { ...this.state.apparel };
		newApparel[e.target.name] = e.target.value;
		this.setState({ apparel: newApparel });
	};

	// handleSignUp = (e) => {
	// 	e.preventDefault();
	// 	this.createApparel();
	// };

	render() {
		if (this.state.redirectToHome === true) {
			return <Redirect to={`/apparel/${this.state.createdApparel._id}`} />;
		}
		return (
			<div>
				<Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container>
						<h1>Men Clothing</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal.</p>
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
										key={this.state.apparel._id}
										className="row"
										style={{
											width: '18rem',
											marginLeft: '30px',
											marginRight: '30px'
										}}
									>
										<Link to={`/apparel/${apparel._id}`} key={apparel._id}>
											<Card.Img variant="top" src={apparel.image} />
										</Link>
										<Card.Body>
											{/* <Link to="/apparelid"> */}
											<Card.Title style={{ color: 'black' }}>{apparel.name}</Card.Title>
											{/* </Link> */}
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
