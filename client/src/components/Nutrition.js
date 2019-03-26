import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Men extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="pic" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold' }}>Nutrition</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal.</p>
					</Container>
				</Jumbotron>
				<div>
					<CardGroup>
						<Card style={{ width: '18rem' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwd8ef5fc3/hi-res/386576_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Pure Protein Isolate</Card.Title>
								<Card.Title>$30.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw6aabec55/hi-res/520810_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Reaction Nutrition Whey Protein</Card.Title>
								<Card.Title>$75.00</Card.Title>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }}>
							{/* <Link to={`/${apparel._id}`}> */}
							<Card.Img
								variant="top"
								src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw9bb71e34/hi-res/386569_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
								alt="top"
							/>
							{/* </Link> */}
							<Card.Body>
								<Card.Title>Ripped Whey Protein</Card.Title>
								<Card.Title>$38.00</Card.Title>
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
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw65b2a723/hi-res/217908_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Isolate Protein</Card.Title>
									<Card.Title>$48.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw20424ef4/hi-res/916091_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Isopure Protein</Card.Title>
									<Card.Title>$48.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwda4f9cec/hi-res/350260_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Optimum Protein</Card.Title>
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
										src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwb6c1c013/hi-res/398507_web_Xtend%20Pro%20Whey%20Isolate%20Cookie%20Butter_Front_Tub.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>XTend Whey Protein</Card.Title>
										<Card.Title>$38.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw264d9592/hi-res/230311_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>MuscleTech Protein</Card.Title>
										<Card.Title>$28.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwadacbd23/hi-res/215600_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>Truth Whey Protein</Card.Title>
										<Card.Title>$38.00</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
							<div>
								<CardGroup className="menmargin">
									<Card style={{ width: '18rem' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw892b22b7/hi-res/253034_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>Designer Whey Protein</Card.Title>
											<Card.Title>$48.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw6d446588/hi-res/554411_web_Transparent%20Labs%20100%20Grass%20Fed%20Whey%20Protein%20Isolate%20French%20Vanilla_Front_Tub.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>Transparent Lab Protein</Card.Title>
											<Card.Title>$52.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://cdn-us-ec.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.1e/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwd8ef5fc3/hi-res/386576_1.jpg?sw=305&sh=305&sm=fit&yocs=s_f_&yoloc=us"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>AMP Whey Protein</Card.Title>
											<Card.Title>$43.00</Card.Title>
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
