import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class LogIn extends Component {
	render() {
		return (
			<div>
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
							<Link to="/register">
								<Button
									variant="primary"
									type="submit"
									style={{
										paddingLeft: '18px',
										paddingRight: '18px',
										marginTop: '15px',
										marginBottom: '25px'
									}}
								>
									Register
								</Button>
							</Link>
						</Form>
					</Card>
				</div>
			</div>
		);
	}
}

export default LogIn;
