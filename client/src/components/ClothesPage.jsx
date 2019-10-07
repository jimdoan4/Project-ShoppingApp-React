import React, { Component } from 'react';
import SingleApparel from './SingleApparel';
import ReviewPage from './ReviewPage';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

export default class ClothesPage extends Component {
	state = {
		apparelId: this.props.match.params.apparelId
	};

	render() {
		return (
			<div>
			<Jumbotron fluid className="single-apparel-page" style={{ height: '26rem' }} />
			<Container className= 'text-center'>
				<Row>			
					<Col><SingleApparel apparelId={this.state.apparelId} /></Col>
				</Row>
				<Row>	
					<Col><ReviewPage apparelId={this.state.apparelId} /></Col>
					</Row>
			</Container>
			</div>
		);
	}
}


