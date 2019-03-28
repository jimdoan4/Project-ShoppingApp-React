import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export default class Forum extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid className="forum" style={{ height: '26rem' }}>
					<Container>
						<h1 style={{ fontWeight: 'bold' }}>Forum</h1>
						<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</Container>
				</Jumbotron>
				<div className="container">
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>Welcome to EQUIS Fitness Forums</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
							<tr>
								<td style={{ padding: '14px' }}>User Guidelines & General Information</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
