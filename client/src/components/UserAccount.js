import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class UserAccount extends Component {
	state = {
		users: [],
		newUser: {
			userName: '',
			password: '',
			apparels: []
		},
		displayUserForm: false
	};

	componentDidMount = () => {
		this.getAllUsers();
	};

	getAllUsers = () => {
		axios.get('/api/users/').then((res) => {
			this.setState({ users: res.data });
		});
	};

	createUser = (e) => {
		axios
			.post('/api/users/', {
				password: this.state.newUser.password,
				userName: this.state.newUser.userName,
				apparels: []
			})
			.then((res) => {
				const usersList = [ this.state.users ];
				usersList.unshift(res.data);
				this.setState({
					newUser: {
						password: '',
						userName: '',
						apparels: {}
					},
					displayUserForm: false,
					users: usersList
				});
			});
		this.getAllUsers();
	};

	handleChange = (e) => {
		const changeNewUser = { ...this.state.newUser };
		changeNewUser[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewUser });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createUser();
	};

	render() {
		return (
			<div>
				{this.state.users.map((user) => {
					return (
						<div>
							<Card>
								<Card.Body className= 'text-center'>
									<Link to={`/users/${user._id}`} key={user._id}>Welcome: {user.userName}
									</Link>
								</Card.Body>
							</Card>
						</div>
					);
				})}
				<br />
				<br />
				<div className="container">
					<Card
						className="container"
						style={{ width: '33rem', height: '18rem', paddingTop: '35px', marginTop: '100px' }}
					>
						<Form className="text-center" style={{ display: 'inline-block' }} onSubmit={this.handleSignUp}>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="userName">Username</Form.Label>
									<Form.Control
										type="text"
										name="userName"
										onChange={this.handleChange}
										value={this.state.newUser.userName}
										placeholder="Enter Username"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label htmlFor="password">Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										onChange={this.handleChange}
										value={this.state.newUser.password}
										placeholder="Enter Password"
									/>
								</Form.Group>
							</Form.Row>
							<div style= {{ marginLeft: '140px'}}className='text-center'>
							<Button
								className='text-center'
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
								Register
							</Button>
							</div>
						</Form>
					</Card>
				</div>
			</div>
		);
	}
}



