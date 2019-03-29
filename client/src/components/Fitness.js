import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
export default class Fitness extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="nutrition" style={{ height: '26rem' }}>
					<Container className= 'homefont' style= {{ marginTop: '180px' }}>
						<h1 style= {{ fontSize: '43px'}}>Fitness Equipments</h1>
						<p style= {{ fontSize: '33px'}}>Get a kick start to a healthier living.</p>
					</Container>
				</Jumbotron>

				<div style={{ marginLeft: '30px', marginRight: '30px' }}>
					<CardGroup>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://dks.scene7.com/is/image/GolfGalaxy/16BFXUSLCTTCHDMBBSLC?wid=500&fmt=jpg"
								alt="top"
							/>

							<Card.Body>
								<Card.Title>Bowflex SelectTech 552 Dumbbells</Card.Title>
								<Card.Title>$300.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://dks.scene7.com/is/image/GolfGalaxy/16FGEUFGPRTLTYBNCWGHA?wid=500&fmt=jpg"
								alt="top"
							/>

							<Card.Body>
								<Card.Title>Fitness Gear Pro Utility Weight Bench</Card.Title>
								<Card.Title>$168.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
							<Card.Img
								variant="top"
								src="https://dks.scene7.com/is/image/GolfGalaxy/16FGEU300LBSTWTH7BRB?wid=500&fmt=jpg"
								alt="top"
							/>

							<Card.Body style= {{ marginTop: '109px'}}>
								<Card.Title>Fitness Gear 300 lb. Olympic Weight Set</Card.Title>
								<Card.Title>$244.00</Card.Title>
							</Card.Body>
						</Card>
					</CardGroup>

					
						<div style={{ marginTop: '30px' }}>
							<CardGroup className="menmargin">
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									<Card.Img
										variant="top"
										src="https://dks.scene7.com/is/image/GolfGalaxy/19IFIUPFT100FCTNLGMU?wid=500&fmt=jpg"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>Body Solid PFT100 Fuctional Trainer</Card.Title>
										<Card.Title>$1158.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									<Card.Img
										variant="top"
										src="https://dks.scene7.com/is/image/GolfGalaxy/16FGEU300LBSTWTH7BRB?wid=500&fmt=jpg"
										alt="top"
									/>

									<Card.Body style= {{ marginTop: '134px'}}>
										<Card.Title>Fitness Gear 300 lb. Olympic Weight Set</Card.Title>
										<Card.Title>$258.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									<Card.Img
										variant="top"
										src="https://dks.scene7.com/is/image/dkscdn/15BOSUBSBLNCTRNRXNFM_Blue?wid=425"
										alt="top"
									/>

									<Card.Body>
										<Card.Title>BOSU 65 cm Balance Trainer</Card.Title>
										<Card.Title>$48.00</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
							<div style={{ marginTop: '30px', marginBottom: '30px' }}>
								<CardGroup className="menmargin">
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										<Card.Img
											variant="top"
											src="https://dks.scene7.com/is/image/dkscdn/18HRBUHRBNGRBCRVRNFM?wid=425"
											alt="top"
										/>

										<Card.Body>
											<Card.Title>Harbinger Ab Carver Sport</Card.Title>
											<Card.Title>$38.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										<Card.Img
											variant="top"
											src="https://dks.scene7.com/is/image/dkscdn/18HRBUHRBNGRBCRNCNFM?wid=425"
											alt="top"
										/>

										<Card.Body>
											<Card.Title>Harbinger Ab Crunch</Card.Title>
											<Card.Title>$88.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										<Card.Img
											variant="top"
											src="https://dks.scene7.com/is/image/dkscdn/18HRBUHRBNGRPSHPLNFM?wid=425"
											alt="top"
										/>

										<Card.Body>
											<Card.Title>Harbinger Push Up Elite</Card.Title>
											<Card.Title>$78.00</Card.Title>
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
