import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class LogIn extends Component {
	 state = {
     users: [],
     user: {
     userName: "",
     password: ""
    },
    redirectToHome: false,
    createdUser: {}
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get("/api/v1/users").then(res => {
      this.setState({ users: res.data });
    });
  };

  createUser = () => {
    axios.post("/api/v1/users", { user: this.state.user }).then(res => {
      console.log(res.data);
      this.setState({ redirectToHome: true, createdUser: res.data });
    });
  };

  handleChange = e => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createUser();
  };
	render() {
		  if (this.state.redirectToHome === true) {
      return <Redirect to={`/user/${this.state.createdUser._id}`} />;
    }
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
