import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

export default class WomenClothes extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="women" style={{ height: '26rem' }}>
					<Container className= 'homefont' style={{ marginTop: '250px' }}>
						<h1 style={{ fontSize: '50px', color: '#6a7587' }}>
							Let your clothes Shine
						</h1>
					</Container>
				</Jumbotron>
				<div style={{ marginLeft: '30px', marginRight: '30px' }}>
					<CardGroup>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LW4BAIS_036763_1?$image_carousel-lg_2x$"
								alt="top"
							/>

							<Card.Body>
								<Card.Title>Hooded Define Jacket Nulu</Card.Title>
								<Card.Title>$128.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LW3MEBS_036963_2?$product_tile-md_2x$"
								alt="top"
							/>

							<Card.Body>
								<Card.Title>Swiftly Tech Short</Card.Title>
								<Card.Title>$68.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://images.lululemon.com/is/image/lululemon/LW1BV0S_037681_2?$product_tile-md_2x$"
								alt="top"
							/>

							<Card.Body>
								<Card.Title>Tied Up Tank</Card.Title>
								<Card.Title>$44.00</Card.Title>
							</Card.Body>
						</Card>
					</CardGroup>

					<div style={{ marginTop: '30px' }}>
						<CardGroup>
							<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LW1960S_036958_2?$product_tile-md_2x$"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>Tech Racerback</Card.Title>
									<Card.Title>$58.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LW6AWBS_037127_2?$product_tile-md_2x$"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>Speed Up Crop</Card.Title>
									<Card.Title>$78.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LW5BPNS_036763_2?$product_tile-md_2x$"
									alt="top"
								/>

								<Card.Body>
									<Card.Title>Fly Pant</Card.Title>
									<Card.Title>$98.00</Card.Title>
								</Card.Body>
							</Card>
						</CardGroup>
						{/* </div> */}
						<div style={{ marginTop: '30px' }}>
							<CardGroup className="menmargin">
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LW7AVGT_036745_2?$product_tile-md_2x$"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Hottie Short</Card.Title>
										<Card.Title>$58.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LW7ARKR_036744_2?$product_tile-md_2x$"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Hottie Short II</Card.Title>
										<Card.Title>$58.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LW2AUPS_036811_2?$product_tile-md_2x$"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Flow Bra</Card.Title>
										<Card.Title>$48.00</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
							<div style={{ marginTop: '30px', marginBottom: '30px' }}>
								<CardGroup className="menmargin">
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LW2AJ8S_036915_2?$product_tile-md_2x$"
											alt="top"
										/>

										<Card.Body>
											<Card.Title>Free Up Bra</Card.Title>
											<Card.Title>$38.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LW5BOCS_036721_2?$product_tile-md_2x$"
											alt="top"
										/>

										<Card.Body>
											<Card.Title>Align HighRise Pant</Card.Title>
											<Card.Title>$88.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LW6AVLS_8650_2?$product_tile-md_2x$"
											alt="top"
										/>

										<Card.Body>
											<Card.Title>Pace Crop</Card.Title>
											<Card.Title>$78.00</Card.Title>
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
