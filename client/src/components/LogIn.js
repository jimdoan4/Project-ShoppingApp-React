import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class LogIn extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: '35rem', display: 'inline-block' }}>
					<Form className="text-center" style={{ display: 'inline-block' }}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="email" placeholder="Enter First Name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="password" placeholder="Last Name" />
							</Form.Group>
						</Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control type="email" placeholder="Enter Username" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
						</Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
						<Form.Group controlId="formGridAddress1">
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder="1234 Main St" />
						</Form.Group>

						<Form.Group controlId="formGridAddress2">
							<Form.Label>Address 2</Form.Label>
							<Form.Control placeholder="Apartment, studio, or floor" />
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>City</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>State</Form.Label>
								<Form.Control as="select">
									<option>Choose...</option>
									<option>...</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Zip</Form.Label>
								<Form.Control />
							</Form.Group>
						</Form.Row>
                        <Button variant="primary" type="submit">
							Login
						</Button>
						<Button variant="primary" type="submit">
							Register
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}
