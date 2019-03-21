import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<nav className="navbar">
				<a href="/about">About</a>
				<a href="/fitness">Fitness</a>
				<h1>Fitness App</h1>
				<a href="/shop">Shop</a>
				<a href="#contact">Contact</a>
			</nav>
		);
	}
}
// 			<div>
// 				<h1>Home</h1>
// 			</div>
// 		);
// 	}
// }

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
