import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

class Shop extends Component {
	state = {
		apparels: [],
		apparel: {
			name: '',
			size: '',
			image: '',
			price: '',
			description: ''
		},
		redirectToHome: false,
		createdApparel: {}
	};

	componentDidMount = () => {
		this.getAllApparels();
	};

	getAllApparels = () => {
		axios.get('/api/apparels').then((res) => {
			this.setState({ apparels: res.data });
		});
	};

	createApparel = () => {
		axios.post('/api/apparels', { apparel: this.state.apparel }).then((res) => {
			console.log(res.data);
			this.setState({ redirectToHome: true, createdApparel: res.data });
		});
	};

	handleChange = (e) => {
		const newApparel = { ...this.state.apparel };
		newApparel[e.target.name] = e.target.value;
		this.setState({ apparel: newApparel });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createApparel();
	};

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
                <div className= 'row'>
				{this.state.apparels.map((apparel) => {
					return (
						<div
							className="col"
							style={{
								marginLeft: '30px',
								marginRight: '30px',
								marginBottom: '30px',
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
											<Card.Title>{apparel.name}</Card.Title>
										{/* </Link> */}
										<Card.Text>${apparel.price}.00</Card.Text>
									</Card.Body>
								</Card>
							</CardGroup>
                        </div>
                        
					);
				})}
				{/* <div className="container">
					<Card
						className="container"
						style={{ width: '33rem', height: '18rem', paddingTop: '35px', marginTop: '230px' }}
					>
						<Form className="text-center" style={{ display: 'inline-block' }} onSubmit={this.handleSignUp}>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										onChange={this.handleChange}
										value={this.state.apparel.name}
										placeholder="Enter Username"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Price</Form.Label>
									<Form.Control
										type="number"
										name="price"
										onChange={this.handleChange}
										value={this.state.apparel.price}
										placeholder="Enter Password"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="text"
										name="size"
										onChange={this.handleChange}
										value={this.state.apparel.size}
										placeholder="Enter Username"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="text"
										name="description"
										onChange={this.handleChange}
										value={this.state.apparel.description}
										placeholder="Enter Password"
									/>
								</Form.Group>
							</Form.Row>

							<Button
								variant="primary"
								type="submit"
								style={{
									marginRight: '140px',
									paddingLeft: '30px',
									paddingRight: '30px',
									marginTop: '15px',
									marginBottom: '25px'
								}}
							>
								Login
							</Button>
							<Button
								variant="primary"
								type="submit"
								style={{
									paddingLeft: '18px',
									paddingRight: '18px',
									marginTop: '15px',
									marginBottom: '25px'
								}}
								href="/register"
							>
								Register
							</Button>
						</Form>
					</Card> */}
				{/* </div> */}{' '}
			</div>
            </div>
		);
	}
}

export default Shop;
