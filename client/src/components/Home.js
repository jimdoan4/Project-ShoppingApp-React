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
			<Jumbotron fluid>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>

			// <CardGroup style={{ width: '56rem' }}>
			// 	<Card>
			// 		<Card.Img
			// 			variant="top"
			// 			src="https://cdn.liftbrands.com/snap/uploads/location_tour/2018/may/30/Urban-Fitness-Club-Battle-Ropes_ori.jpg"
			// 		/>
			// 		<Card.Body>
			// 			<Card.Title>Card title</Card.Title>
			// 			<Card.Text>
			// 				This is a wider card with supporting text below as a natural lead-in to additional content.
			// 				This content is a little bit longer.
			// 			</Card.Text>
			// 		</Card.Body>
			// 		<Card.Footer>
			// 			<small className="text-muted">Last updated 3 mins ago</small>
			// 		</Card.Footer>
			// 	</Card>
			// 	<Card>
			// 		<Card.Img
			// 			variant="top"
			// 			src="https://cdn.liftbrands.com/snap/uploads/location_tour/2018/may/30/Urban-Fitness-Club-Battle-Ropes_ori.jpg"
			// 		/>
			// 		<Card.Body>
			// 			<Card.Title>Card title</Card.Title>
			// 			<Card.Text>
			// 				This card has supporting text below as a natural lead-in to additional content.{' '}
			// 			</Card.Text>
			// 		</Card.Body>
			// 		<Card.Footer>
			// 			<small className="text-muted">Last updated 3 mins ago</small>
			// 		</Card.Footer>
			// 	</Card>
			// 	<Card>
			// 		<Card.Img
			// 			variant="top"
			// 			src="https://cdn.liftbrands.com/snap/uploads/location_tour/2018/may/30/Urban-Fitness-Club-Battle-Ropes_ori.jpg"
			// 		/>
			// 		<Card.Body>
			// 			<Card.Title>Card title</Card.Title>
			// 			<Card.Text>
			// 				This is a wider card with supporting text below as a natural lead-in to additional content.
			// 				This card has even longer content than the first to show that equal height action.
			// 			</Card.Text>
			// 		</Card.Body>
			// 		<Card.Footer>
			// 			<small className="text-muted">Last updated 3 mins ago</small>
			// 		</Card.Footer>
			// 	</Card>
			// </CardGroup>
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
