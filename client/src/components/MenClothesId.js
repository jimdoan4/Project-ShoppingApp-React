import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import MenClothes from './MenClothes.js';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class MenClothesId extends Component {
	state = {
		apparel: {},
		redirectToHome: false,
		isEditFormDisplayed: false
	};

	componentDidMount = () => {
		axios.get(`/api/v1/apparels${this.props.match.params.id}`).then((res) => {
			this.setState({ apparels: res.data });
		});
	};

	deleteApparel = () => {
		axios.delete(`/api/v1/apparels${this.props.match.params.id}`).then((res) => {
			this.setState({ redirectToHome: true });
		});
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { isEditFormDisplayed: true };
		});
	};

	render() {
		if (this.state.redirectToHome) {
			return <Redirect to="/" />;
		}

		return (
			// <Card key={this.state.apparel._id} style={{ width: '18rem' }}>
			<div>
				<Card>
					{/* <Card.Img variant="top" src={this.state.apparel.image} alt={this.state.apparel.name} /> */}

					<Card.Body>
						<Card.Title>{this.state.apparel.name}</Card.Title>
						<Card.Text>
							<Card.Title>{this.state.apparel.description}</Card.Title>
						</Card.Text>
						<button onClick={this.deleteApparel}>Delete</button>
						<button onClick={this.toggleEditForm}>Edit</button>
					</Card.Body>
				</Card>
			</div>
			// <div>
			// 	<h1>Single Item</h1>
			// 	<div>Name: {this.state.apparel.name}</div>
			// 	<div>Description: {this.state.apparel.description}</div>
			// 	<button onClick={this.deleteApparel}>Delete</button>
			// 	<button onClick={this.toggleEditForm}>Edit</button>
			// </div>
		);
	}
}

export default MenClothesId;
