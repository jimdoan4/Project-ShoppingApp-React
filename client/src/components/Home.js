import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<Jumbotron fluid style={{ height: '26rem' }}>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>
		);
	}
}

// class Home extends Component {
// 	// state = {
// 	// 	users: [],
// 	// 	newUser: {
// 	// 		firstName: '',
// 	// 		lastName: '',
// 	// 		userName: ''
// 	// 	},
// 	// 	isUserFormDisplayed: false
// 	// };

// 	// componentDidMount = () => {
// 	// 	axios.get('/api/v1').then((res) => {
// 	// 		this.setState({ users: res.data });
// 	// 	});
// 	// };

// 	render() {
// 		return (
// 			<div>
// 				<h1>testing</h1>
// 				{/* {
//                     this.state.users.map(user => {
//                         return (
//                             <div key={user._id}>
//                                 <Link
//                                     to={`/${user._id}`}
//                                 >
//                                     {user.name}
//                                 </Link> */}
// 			</div>
// 		);
// 	}
// }

// export default Home;
