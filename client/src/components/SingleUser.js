import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SingleUser extends Component {
	state = {
		userId: this.props.userId,
		currentUser: {
			_id: '',
			userName: '',
			password: ''
		},
		redirectToHome: false,
		displayEditForm: false
	};

	getUserData = () => {
		axios.get(`/api/users/${this.state.userId}`).then((res) => {
			this.setState({ currentUser: res.data });
		});
	};

	componentDidMount = () => {
		this.getUserData();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	handleChange = (e) => {
		const updatedUser = { ...this.state.currentUser };
		updatedUser[e.target.name] = e.target.value;
		this.setState({ currentUser: updatedUser });
	};

	updateUser = (e) => {
		e.preventDefault();
		axios
			.put(`/api/users/${this.state.userId}`, {
				password: this.state.currentUser.password,
				userName: this.state.currentUser.userName
			})
			.then((res) => {
				this.setState({ user: res.data, displayEditForm: false });
			});
		this.getUserData();
	};

	deleteUser = () => {
		axios.delete(`/api/users/${this.state.userId}`).then((res) => {
			this.setState({ redirectToHome: true });
		});
	};

	render() {
		if (this.state.redirectToHome) {
			return <Redirect to="/users" />;
		}

		return (
			<div className="container">
				<h3 className="text-center">{this.state.currentUser.userName}</h3>
				{this.state.displayEditForm ? (
					<form onSubmit={this.updateUser} className="container">
						<div className="container" style={{ textAlign: 'center' }}>
							<label htmlFor="userName" style={{ textAlign: 'center' }}>
								Username
							</label>
							<input
								className="container"
								id="userName"
								type="text"
								name="userName"
								onChange={this.handleChange}
								value={this.state.currentUser.userName}
							/>
						</div>

						<div style={{ textAlign: 'center' }}>
							<label htmlFor="password" className="container">
								Password
							</label>
							<input
								// className="container"
								id="password"
								type="password"
								name="password"
								onChange={this.handleChange}
								value={this.state.currentUser.password}
							/>
						</div>
						<button>Update</button>
					</form>
				) : (
					<div>
						<div>{/* <Pharmacy userId={this.state.userId} /> */}</div>
					</div>
				)}
				<div className="row">
					<button className="container" onClick={this.toggleEditForm}>
						Edit
					</button>
					<button onClick={this.deleteUser} className="container">
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default SingleUser;
