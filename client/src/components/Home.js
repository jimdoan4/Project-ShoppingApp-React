import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="home" style={{ height: '26rem' }}>
					<Container className="homefont">
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: '#6a7587' }}>EQUIS</h1>
						<p style={{ fontSize: '20px', color: '#495260' }}>Fitness Wear that hone Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
				<div style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '30px', height: '20rem' }}>
					<CardGroup>
						<Card style={{ width: '18rem', marginLeft: '30px', marginTop: '14px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$"
								alt="top"
							/>
						</Card>

						<Card style={{ width: '18rem', marginTop: '14px', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LW1BV0S_037681_2?$product_tile-md_2x$"
								alt="top"
							/>
						</Card>
					</CardGroup>
					<Container>
						<h5
							className="homefont"
							style={{
								marginTop: '110px',
								marginBottom: '110px',
								marginLeft: '70px',
								marginRight: '70px',
								color: '#495260'
							}}
						>
							EQUIS, the haven to your fitness clothing guides. Browse through our apparel and find the best fitwear for your daily Lifestyle.
						</h5>
					</Container>
					<div>
						<Jumbotron fluid className="homes" style={{ height: '26rem', marginTop: '20px' }}>
							<Container style={{ fontWeight: 'bold', color: '#495260' }}>
								<h1
									className="fonts"
									style={{ fontWeight: 'bold', color: 'white', marginTop: '170px' }}
								>
									Women Fitness Wear
								</h1>
							</Container>
						</Jumbotron>
					</div>
					<div
						style={{
							marginLeft: '16px',
							marginRight: '16px',
							marginBottom: '30px',
							marginTop: '45px'
						}}
					>
						<CardGroup>
							<Card style={{ width: '23rem', marginLeft: '10px', marginRight: '10px' }}>
								<Card.Img
									variant="top"
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw65b2a723/hi-res/217908_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>City Sweat Pullover Hoodie</Card.Title>
									<Card.Title>$68.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '23rem', marginLeft: '30px', marginRight: '30px' }}>
								<Card.Img
									variant="top"
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw892b22b7/hi-res/253034_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>
								<Card.Body>
									<Card.Title>City Sweat Zip Hoodie</Card.Title>
									<Card.Title>$128.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '23rem', marginLeft: '30px', marginRight: '30px' }}>
								<Card.Img
									variant="top"
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw6aabec55/hi-res/520810_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>
								<Card.Body>
									<Card.Title>Accedo Vest Hoodie</Card.Title>
									<Card.Title>$78.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '23rem', marginLeft: '14px', marginRight: '14px' }}>
								<Card.Img
									variant="top"
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwd8ef5fc3/hi-res/386576_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>
								<Card.Body>
									<Card.Title>Accedo Vest Hoodie</Card.Title>
									<Card.Title>$78.00</Card.Title>
								</Card.Body>
							</Card>
						</CardGroup>
					</div>
					<Container style={{ textAlign: 'center' }}>
						<h1
							className="homefont"
							style={{
								marginTop: '80px',
								marginBottom: '80px',
								marginLeft: '70px',
								marginRight: '70px',
								color: '#495260'
							}}
						>
							Check out our Accessories
						</h1>
					</Container>

					<div style={{ marginTop: '40px', background: 'cover' }}>
						<Jumbotron fluid className="homee" style={{ width: 'max', height: '26rem' }}>
							<Container>
								<h1 className="fonts" style={{ fontWeight: 'bold', color: 'white', marginTop: '70px' }}>
									Fitness Accessories
								</h1>
							</Container>
						</Jumbotron>
					</div>
					<div style={{ marginLeft: '10px', marginRight: '10px' }}>
						<CardGroup style={{ marginTop: '50px' }}>
							<Card style={{ width: '18rem', marginLeft: '2px', marginRight: '2px' }}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LU9A73S_037040_1?$image_carousel-lg_2x$"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>The Reversible Mat 5mm</Card.Title>
									<Card.Title>$78.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem', marginLeft: '2px', marginRight: '2px' }}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM9767S_036763_2?$product_tile-lg_2x$"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>Command BackPack</Card.Title>
									<Card.Title>$148.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem', marginLeft: '2px', marginRight: '2px' }}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM9723S_034135_2?$product_tile-lg_2x$"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>Surge BackPack</Card.Title>
									<Card.Title>$168.00</Card.Title>
								</Card.Body>
							</Card>
						</CardGroup>

						<div style={{ marginTop: '20px', marginBottom: '30px' }}>
							<CardGroup>
								<Card style={{ width: '18rem', marginLeft: '2px', marginRight: '2px' }}>
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LM9474S_037617_2?$product_tile-lg_2x$"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Lightspeed Hat</Card.Title>
										<Card.Title>$38.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '2px', marginRight: '2px' }}>
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LM9641S_031382_2?$product_tile-lg_2x$"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Cold Beanie</Card.Title>
										<Card.Title>$28.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '2px', marginRight: '2px' }}>
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LU9AF5S_0001_2?$product_tile-lg_2x$"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Stay Cold Bottle</Card.Title>
										<Card.Title>$48.00</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
