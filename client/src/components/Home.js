import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="home" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold', color: 'grey' }}>EQUIS</h1>
						<p>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
				<h5
					className="homefont"
					style={{
						height: '7rem',
						marginLeft: '225px',
						marginRight: '225px'
					}}
				>
					EQUIS, the haven of your fitness guides. Browse through and find the best tips to your healthy
					LIFESTYLE.
				</h5>
				<Jumbotron fluid className="homes" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold', color: 'grey' }}>GYM</h1>
						<p>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>

				<Jumbotron fluid className="homee" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold', color: 'grey' }}>NUTRITION</h1>
						<p>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}
