import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export default class Fitness extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="nutrition" style={{ height: '26rem' }}>
					<Container className= 'homefont' style= {{ marginTop: '180px' }}>
						<h1 style= {{ fontSize: '33px'}}>Be the BEST You. Get Tips on how to get in shape and live a heathier LIFESTYLE!</h1>
						<p style= {{ fontSize: '33px'}}>Get a kick start to a healthier living.</p>
					</Container>
				</Jumbotron>

				<Card className="container" style={{ width: '36rem' }}>
					<Card.Img
						variant="top"
						src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-fit-for-life.jpg?itok=l9ipJgRE"
						style={{ width: '34rem' }}
					/>
					<Card.Body>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
					</Card.Body>
				</Card>
				<br />
				<Card className="container" style={{ width: '36rem' }}>
					<Card.Body>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
					</Card.Body>
					<Card.Img
						variant="bottom"
						src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-fit-for-life.jpg?itok=l9ipJgRE"
						style={{ width: '34rem' }}
					/>
				</Card>
			</div>
		);
	}
}
