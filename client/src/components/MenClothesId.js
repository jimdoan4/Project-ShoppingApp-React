import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class MenClothingId extends Component {
	state = {
		apparel: {},
		redirectToHome: false,
		isEditFormDisplayed: false
	};

	componentDidMount = () => {
		axios.get(`/api/v1/apparels${this.props.match.params.id}`).then((res) => {
			this.setState({ apparel: res.data });
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
			<div>
				<button onClick={this.toggleEditForm}>Edit</button>
				<h1>Single Item</h1>
				<div>Name: {this.state.apparel.name}</div>
				<div>Description: {this.state.apparel.description}</div>
				<button onClick={this.deleteApparel}>Delete</button>
			</div>
		);
	}
}

export default MenClothingId;
