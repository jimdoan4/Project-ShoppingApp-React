import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class LogIn extends Component {
	// state = {
	// 	users: [],
	// 	user: {
	// 		userName: '',
	// 		password: ''
	// 	},
	// 	redirectToHome: false,
	// 	createdUser: {}
	// };

	// componentDidMount = () => {
	// 	this.getAllUsers();
	// };

	// getAllUsers = () => {
	// 	axios.get('/api/users').then((res) => {
	// 		this.setState({ users: res.data });
	// 	});
	// };

	// createUser = () => {
	// 	axios.post('/api/users', { user: this.state.user }).then((res) => {
	// 		console.log(res.data);
	// 		this.setState({ redirectToHome: true, createdUser: res.data });
	// 	});
	// };

	// handleChange = (e) => {
	// 	const newUser = { ...this.state.user };
	// 	newUser[e.target.name] = e.target.value;
	// 	this.setState({ user: newUser });
	// };

	// handleSignUp = (e) => {
	// 	e.preventDefault();
	// 	this.createUser();
	// };
	render() {
		if (this.state.redirectToHome === true) {
			return <Redirect to={`/user/${this.state.createdUser._id}`} />;
		}
		return (
			<div>
				<h2>Select a user</h2>
				{this.state.users.map((user) => {
					return (
						<div>
							<Link to={`/user/${user._id}`} key={user._id}>
								{user.userName}
							</Link>
						</div>
					);
				})}
				<div className="container">
					<Card
						className="container"
						style={{ width: '33rem', height: '18rem', paddingTop: '35px', marginTop: '230px' }}
					>
						<Form className="text-center" style={{ display: 'inline-block' }} onSubmit={this.handleSignUp}>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="text"
										name="userName"
										onChange={this.handleChange}
										value={this.state.user.userName}
										placeholder="Enter Username"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										onChange={this.handleChange}
										value={this.state.user.password}
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
					</Card>
				</div>
			</div>
		);
	}
}

export default LogIn;
