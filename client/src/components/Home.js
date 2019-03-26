import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

// import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="home" style={{ height: '26rem'}}>
					<Container>
						<h1 style={{ fontWeight: 'bold', color: 'grey' }}>EQUIS</h1>
						<p>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
				<div style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '30px', height: '20rem' }}>
					<CardGroup>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Link to={'/menclothes/cityhoodie'}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$"
									alt="top"
								/>
							</Link>
							
						</Card>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM3BC2S_026914_2?$product_tile-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
					
						</Card>
					</CardGroup>
				<div style={{ marginTop: '110px' }}>
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
				<div>
				<Jumbotron fluid className="homes" style={{ height: '26rem', marginTop: '90px' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold', color: 'grey' }}>GYM</h1>
						<p>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
				<div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '30px', marginTop: '45px' }}>
					<CardGroup>
						<Card style={{ width: '23rem', marginLeft: '14px', marginRight: '14px' }}>
							<Link to={'/menclothes/cityhoodie'}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$"
									alt="top"
								/>
							</Link>
							<Card.Body>
								<Card.Title>City Sweat Pullover Hoodie</Card.Title>
								<Card.Title>$68.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '23rem', marginLeft: '30px', marginRight: '30px' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM3BC2S_026914_2?$product_tile-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>City Sweat Zip Hoodie</Card.Title>
								<Card.Title>$128.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '23rem', marginLeft: '30px', marginRight: '30px' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM4891S_038271_2?$product_tile-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Accedo Vest Hoodie</Card.Title>
								<Card.Title>$78.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '23rem', marginLeft: '14px', marginRight: '14px' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM4891S_038271_2?$product_tile-lg_2x$"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Accedo Vest Hoodie</Card.Title>
								<Card.Title>$78.00</Card.Title>
							</Card.Body>
						</Card>
					</CardGroup>
					<div style={{ marginTop: '40px' }}>
				<Jumbotron fluid className="homee" style={{ width: 'max', height: '26rem' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold', color: 'grey' }}>NUTRITION</h1>
						<p>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
				</div>
				</div>
				</div>
				</div>
				</div>
				</div>
		);
	}
}
