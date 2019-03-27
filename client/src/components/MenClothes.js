import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

import { Link } from 'react-router-dom';
// import CityHoodie from './CityHoodie';

export default class MenClothes extends Component {
	// state = {
	// 	apparels: [],
	// 	newApparel: {
	// 		image: '',
	// 		name: '',
	// 		size: '',
	// 		price: '',
	// 		description: ''
	// 	},
	// 	isApparelFormDisplayed: false
	// };

	// componentDidMount = () => {
	// 	axios.get('/api/v1/apparels').then((res) => {
	// 		this.setState({ apparels: res.data });
	// 	});
	// };
	// toggleApparelForm = () => {
	// 	this.setState((state, props) => {
	// 		return { isApparelFormDisplayed: !state.isApparelFormDisplayed };
	// 	});
	// };

	// handleChange = (e) => {
	// 	const cloneNewApparel = { ...this.state.newApparel };
	// 	cloneNewApparel[e.target.name] = e.target.value;
	// 	this.setState({ newApparel: cloneNewApparel });
	// };

	// createApparel = (e) => {
	// 	e.preventDefault();
	// 	axios
	// 		.post('/api/v1/apparels', {
	// 			name: this.state.newApparel.name,
	// 			description: this.state.newApparel.description,
	// 			image: this.state.newApparel.image,
	// 			price: this.state.newApparel.price,
	// 			size: this.state.newApparel.size
	// 		})
	// 		.then((res) => {
	// 			const apparelsList = [ ...this.state.apparels ];
	// 			apparelsList.unshift(res.data);
	// 			this.setState({
	// 				newApparel: {
	// 					name: '',
	// 					description: '',
	// 					image: '',
	// 					price: '',
	// 					size: ''
	// 				},
	// 				isApparelFormDisplayed: false,
	// 				apparels: apparelsList
	// 			});
	// 		});
	// };

	render() {
		return (
			<div>
				<Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container>
						<h1>Men Clothing</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal.</p>
					</Container>
				</Jumbotron>
				<div style={{ marginLeft: '30px', marginRight: '30px' }}>
					<CardGroup>
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
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
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
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
						<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
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
					{/* </div> */}
					<div style={{ marginTop: '30px' }}>
						<CardGroup>
							<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM4886S_0023_2?$product_tile-lg_2x$"
									alt="top"
									href="/menclothes/cityhoodie"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Zurge Warm Zip</Card.Title>
									<Card.Title>$118.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM3BCOS_038607_2?$product_tile-lg_2x$"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Geo Hoodie</Card.Title>
									<Card.Title>$88.00</Card.Title>
								</Card.Body>
							</Card>
							<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
								{/* <Link to={`/${apparel._id}`}> */}
								<Card.Img
									variant="top"
									src="https://images.lululemon.com/is/image/lululemon/LM3BN2S_036744_2?$product_tile-lg_2x$"
									alt="top"
								/>
								{/* </Link> */}
								<Card.Body>
									<Card.Title>Drysense Mesh Sleeveless</Card.Title>
									<Card.Title>$58.00</Card.Title>
								</Card.Body>
							</Card>
						</CardGroup>
						{/* </div> */}
						<div style={{ marginTop: '30px' }}>
							<CardGroup className="menmargin">
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LM3AEUS_0023_2?$product_tile-lg_2x$"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>Metal Vent Tech</Card.Title>
										<Card.Title>$48.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LM3AQSS_031808_2?$product_tile-lg_2x$"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>5 Year Basic Tee</Card.Title>
										<Card.Title>$28.00</Card.Title>
									</Card.Body>
								</Card>
								<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
									{/* <Link to={`/${apparel._id}`}> */}
									<Card.Img
										variant="top"
										src="https://images.lululemon.com/is/image/lululemon/LM5543S_036763_2?$product_tile-lg_2x$"
										alt="top"
									/>
									{/* </Link> */}
									<Card.Body>
										<Card.Title>City Sweat Jogger</Card.Title>
										<Card.Title>$128.00</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
							<div style={{ marginTop: '30px', marginBottom: '30px' }}>
								<CardGroup className="menmargin">
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LM7A99S_0001_2?$product_tile-lg_2x$"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>Surge Short</Card.Title>
											<Card.Title>$48.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LM9563S_036866_2?$product_tile-lg_2x$"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>No Boxer</Card.Title>
											<Card.Title>$38.00</Card.Title>
										</Card.Body>
									</Card>
									<Card style={{ width: '18rem', marginLeft: '30px', marginRight: '30px' }}>
										{/* <Link to={`/${apparel._id}`}> */}
										<Card.Img
											variant="top"
											src="https://images.lululemon.com/is/image/lululemon/LM5570S_031382_2?$product_tile-lg_2x$"
											alt="top"
										/>
										{/* </Link> */}
										<Card.Body>
											<Card.Title>Intent Jogger</Card.Title>
											<Card.Title>$108.00</Card.Title>
										</Card.Body>
									</Card>
								</CardGroup>
								{/* <Switch>
										<Route path="/menclothes/cityhoodie" component={CityHoodie} />
									</Switch> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
