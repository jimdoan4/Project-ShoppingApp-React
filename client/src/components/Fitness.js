import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Fitness extends Component {
	render() {
		return (
			<Jumbotron fluid className='nutrition' style={{ height: '26rem' }}>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>
		);
	}
}
