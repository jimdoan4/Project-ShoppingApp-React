import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
export default class About extends Component {
	render() {
		return (
            <div>
        <Jumbotron fluid className='nutrition' style={{ height: '26rem' }}>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>

			<CardColumns style={{ width: '55rem' }}>
				<Card>
					<Card.Img
						variant="top"
						src="https://cdn.liftbrands.com/snap/uploads/location_tour/2018/may/30/Urban-Fitness-Club-Battle-Ropes_ori.jpg"
					/>
					<Card.Body>
						<Card.Title>Card title that wraps to a new line</Card.Title>
						<Card.Text>
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="p-3">
					<blockquote className="blockquote mb-0 card-body">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://cdn.liftbrands.com/snap/uploads/location_tour/2018/may/30/Urban-Fitness-Club-Battle-Ropes_ori.jpg"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card bg="primary" text="white" className="text-center p-3">
					<blockquote className="blockquote mb-0 card-body">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card className="text-center">
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional content.{' '}
						</Card.Text>
						<Card.Text>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img src="https://cdn.liftbrands.com/snap/uploads/location_tour/2018/may/30/Urban-Fitness-Club-Battle-Ropes_ori.jpg" />
				</Card>
				<Card className="text-right">
					<blockquote className="blockquote mb-0 card-body">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</Card.Text>
						<Card.Text>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardColumns>
            </div>
		);
	}
}
