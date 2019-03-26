import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Gym extends Component {
	render() {
		return (
			<Jumbotron fluid className='gym' style={{ height: '26rem', fontWeight: 'bold' }}>
				<Container>
					<h1 style={{ fontWeight: 'bold' }}>EQUIS Gym</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>
		);
	}
}
