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
			<div className='container'>
				<Card className='container' style={{ width: '33rem', height: '18rem', paddingTop: '35px', marginTop: '230px' }}>
					<Form className="text-center" style={{ display: 'inline-block' }}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter Email" />
							</Form.Group>
						</Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="email" placeholder="Enter Password" />
							</Form.Group>
						</Form.Row>
						  {/* <Form.Row className='container'>
                          <Button className='container' variant="primary" type="submit" style= {{ marginRight: '140px', paddingLeft: '30px', paddingRight: '30px' }}>
							Forgot Your Password?
						</Button>
						</Form.Row> */}
                        <Button variant="primary" type="submit" style= {{ marginRight: '140px', paddingLeft: '30px', paddingRight: '30px', marginTop: '15px' }}>
							Login
						</Button>
						<Button variant="primary" type="submit" style= {{ paddingLeft: '18px', paddingRight: '18px', marginTop: '15px' }} href="/login/register">
							Register
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}
