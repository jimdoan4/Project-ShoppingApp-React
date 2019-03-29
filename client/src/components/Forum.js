import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export default class Forum extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="forum" style={{ height: '26rem' }}>
					<Container className= 'homefont' style={{ marginTop: '180px' }}>
						<h1 style={{ fontWeight: 'bold', fontSize: '70px' }}>Forum</h1>
				
					</Container>
				</Jumbotron>
				<div className="container">
					<Table striped bordered hover size="sm">
						<thead style= {{backgroundColor: '#9eacc1'}}>
							<tr>
								<th>Welcome to EQUIS Fitness Forums</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
              
							<tr>
								<td style={{ padding: '14px' }}>Workout Equipment</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Workout Programs</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Exercises</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Nutrition</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Losing Fat</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Teen Bodybuilding</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Powerlifting/Strongman
</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Female Bodybuilding
</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>Sport Training</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
