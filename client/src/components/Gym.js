import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Gym extends Component {
	render() {
		return (
			<div>
			<Jumbotron fluid className="gym" style={{ height: '26rem', fontWeight: 'bold' }}>
				<Container className= 'homefont' style={{ marginTop: '210px' }}>
					<h1 style={{ fontWeight: 'bold', fontSize: '67px' }}>EQUIS Gym</h1>
				</Container>
			</Jumbotron>
			<Jumbotron fluid className="gyms" style={{ height: '26rem' }}>
					<Container className= 'homefont'>
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Elite EQUIS Gym</h1>
						<p style={{ fontSize: '20px', color: 'white' }}>Our Grand Opening is on April 23, come back and see us!</p>
						<Button style= {{ backgroundColor: 'white', color: 'black', borderColor: 'black'}}>Join Now</Button>
					</Container>
				</Jumbotron>
				</div>
		);
	}
}
