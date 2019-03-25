import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Fitness extends Component {
	render() {
		return (
			<Jumbotron fluid className="nutrition" style={{ height: '26rem' }}>
				<Container>
					<h1>Be the BEST You. Get Tips on how to get in shape and live a heathier LIFESTYLE!</h1>
					<p>Get a kick start to a healthier living.</p>
				</Container>
			</Jumbotron>
		);
	}
}
