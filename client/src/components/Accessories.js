import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Accessories extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="accessories" style={{ height: '26rem' }}>
					<Container>
						<h1>Accessories</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</Container>
				</Jumbotron>
				<div>
					<CardGroup>
						<Card style={{ width: '18rem' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LU9A73S_037040_1?$image_carousel-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>The Reversible Mat 5mm</Card.Title>
								<Card.Title>$78.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM9767S_036763_2?$product_tile-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Command BackPack</Card.Title>
								<Card.Title>$148.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM9723S_034135_2?$product_tile-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Surge BackPack</Card.Title>
								<Card.Title>$168.00</Card.Title>
							</Card.Body>
						</Card>
					</CardGroup>
					{/* </div> */}
					<div>
						<CardGroup>
							<Card style={{ width: '18rem' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM9474S_037617_2?$product_tile-lg_2x$"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Lightspeed Hat</Card.Title>
									<Card.Title>$38.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM9641S_031382_2?$product_tile-lg_2x$"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Cold Beanie</Card.Title>
									<Card.Title>$28.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LU9AF5S_0001_2?$product_tile-lg_2x$"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Stay Cold Bottle</Card.Title>
									<Card.Title>$48.00</Card.Title>
								</Card.Body>
							</Card>
						</CardGroup>
						{/* </div> */}
						<div>
							<CardGroup className="menmargin">
								<Card style={{ width: '18rem' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LW9BAZR_033907_2?$product_tile-lg_2x$"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>TechLook Shoes</Card.Title>
										<Card.Title>$98.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LW9AWXS_037690_2?$product_tile-lg_2x$"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>Secret Sock</Card.Title>
										<Card.Title>$18.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LM9635S_034927_2?$product_tile-lg_2x$"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>Resolute Gloves</Card.Title>
										<Card.Title>$28.00</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
							<div>
								<CardGroup className="menmargin">
									<Card style={{ width: '18rem' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LU9AAJS_0001_2?$product_tile-lg_2x$"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>Yoga Block</Card.Title>
											<Card.Title>$18.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LW9BLCS_037657_2?$product_tile-lg_2x$"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>Yoga Mat Bag</Card.Title>
											<Card.Title>$48.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LW9BYYS_038214_2?$product_tile-lg_2x$"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>UpLift Training Gloves</Card.Title>
											<Card.Title>$38.00</Card.Title>
										</Card.Body>
									</Card>
								</CardGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
