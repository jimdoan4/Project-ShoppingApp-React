import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="home" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontSize: '60px', fontWeight: 'bold', color: '#6a7587' }}>EQUIS</h1>
						<p style={{ fontSize: '20px', color: '#495260' }}>Your MIND, BODY and SOUL</p>
					</Container>
				</Jumbotron>
				<div style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '30px', height: '20rem' }}>
					<CardGroup>
						<Card style={{ width: '18rem', marginLeft: '30px', marginTop: '14px', marginRight: '30px' }}>
							<Link to={'/menclothes/cityhoodie'}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM3ASJS_032489_2?$product_tile-md_2x$"
									alt="top"
								/>
							</Link>
						</Card>
						<Card style={{ width: '18rem', marginTop: '14px', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LW1BV0S_037681_2?$product_tile-md_2x$"
								alt="top"
							/>
						</Card>
					</CardGroup>
					<div style={{ marginTop: '110px' }}>
						<h5
							className="homefont"
							style={{
								height: '7rem',
								marginLeft: '125px',
								marginRight: '125px',
								marginBottom: '90px',
								color: '#495260'
							}}
						>
							EQUIS, the haven of your fitness guides. Browse through and find the best tips to your
							healthy LIFESTYLE.
						</h5>
						<div style={{ marginTop: '50px' }}>
							<Jumbotron fluid className="homes" style={{ height: '26rem', marginTop: '90px' }}>
								<Container style={{ width: '100%' }}>
									<h1 style={{ fontWeight: 'bold', color: 'grey' }}>GYM</h1>
									<p>Your MIND, BODY and SOUL</p>
								</Container>
							</Jumbotron>
							<div
								style={{
									marginLeft: '16px',
									marginRight: '16px',
									marginBottom: '30px',
									marginTop: '45px'
								}}
							>
								<CardGroup>
									<Card style={{ width: '23rem', marginLeft: '14px', marginRight: '14px' }}>
										<Link to={'/menclothes/cityhoodie'}>
											<Card.Img
												variant="top"
												src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw65b2a723/hi-res/217908_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
												alt="top"
											/>
										</Link>
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
								<div style={{ marginTop: '40px' }}>
									<Jumbotron fluid className="homee" style={{ width: 'max', height: '26rem' }}>
										<Container>
											<h1 style={{ fontWeight: 'bold', color: '#6a7587' }}>NUTRITION</h1>
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
