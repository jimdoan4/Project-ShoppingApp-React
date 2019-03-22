import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MenClothes extends Component {
	state = {
		apparels: [],
		newApparel: {
			name: '',
			image: '',
			description: ''
		},
		isApparelFormDisplayed: false
	};

	componentDidMount = () => {
		axios.get('/api/v1/apparels').then((res) => {
			this.setState({ apparels: res.data });
		});
	};
	toggleApparelForm = () => {
		this.setState((state, props) => {
			return { isApparelFormDisplayed: !state.isApparelFormDisplayed };
		});
	};

	handleChange = (e) => {
		const cloneNewApparel = { ...this.state.newApparel };
		cloneNewApparel[e.target.name] = e.target.value;
		this.setState({ newApparel: cloneNewApparel });
	};

	createApparel = (e) => {
		e.preventDefault();
		axios
			.post('/api/v1/apparels', {
				name: this.state.newApparel.name,
				description: this.state.newApparel.description,
				image: this.state.newApparel.image
			})
			.then((res) => {
				const apparelsList = [ ...this.state.apparels ];
				apparelsList.unshift(res.data);
				this.setState({
					newApparel: {
						name: '',
						description: '',
						image: ''
					},
					isApparelFormDisplayed: false,
					apparels: apparelsList
				});
			});
	};

	render() {
		return (
			<div>
				{this.state.apparels.map((apparel) => {
					return (
						<div key={apparel._id}>
							<Link to={`/${apparel._id}`}>
								<img src={apparel.image} alt={apparel.name} />
								{apparel.name}
							</Link>
						</div>
					);
				})}
				<button onClick={this.toggleApparelForm}>+ New Clothing</button>
				{this.state.isApparelFormDisplayed ? (
					<form onSubmit={this.createApparel}>
						<div>
							<label htmlFor="name">Name</label>
							<input
								id="name"
								type="text"
								name="name"
								onChange={this.handleChange}
								value={this.state.newApparel.name}
							/>
						</div>
						<div>
							<label htmlFor="description">Description</label>
							<textarea
								id="description"
								type="text"
								name="description"
								onChange={this.handleChange}
								value={this.state.newApparel.description}
							/>
						</div>
						<button>Create</button>
					</form>
				) : null}
			</div>
		);
	}
}
// 			<Jumbotron fluid style={{ height: '26rem' }}>
// 				<Container>
// 					<h1>Men Clothing</h1>
// 					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
// 				</Container>
// 			</Jumbotron>
// 		);
// 	}
// }
