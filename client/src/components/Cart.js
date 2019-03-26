import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Cart extends Component {
	render() {
		return (
            <div>
		<Jumbotron fluid className='cart' style={{ height: '26rem' }}>
				<Container>
					<h1 style={{ color: 'black', fontWeight: 'bold' }}>Shopping List</h1>
					<p>This is a modified jumbotron that occupies the.</p>
				</Container>
			</Jumbotron>
<div>
					<Card className='container' style={{ width: '34rem' }}>
						<Card>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>City Sweat Pullover Hoodie</Card.Title>
								<Card.Title>
									Cozy meets technical in this breathable, sweat-wicking pullover hoodie that keeps
									your muscles warm before and after training.
								</Card.Title>
								<Card.Title>$68.00</Card.Title>
							</Card.Body>
							<Form.Group controlId="exampleForm.ControlSelect1" className='container' style={{ width: '34rem' }}>
								<Form.Label className='container'>Size</Form.Label>
								<Form.Control as="select" className='container' style={{ width: '12rem' }}>
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</Form.Control>
                            </Form.Group>      
							<button className='container'
								style={{ width: '10rem', backgroundColor: 'red' }}
								onClick={this.toggleApparelForm}
							>
								Add to Cart
							</button>
							<Card className='container' style={{ width: '31.9rem' }}>
								<Card.Body>
									<Card.Title>Reviews</Card.Title>
									<Card.Text>
										This is where you write your reviews.
									</Card.Text>
								</Card.Body>
							</Card>
						</Card>
					</Card>
				</div>
                </div>
                
		);
	}
}
