import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Forum extends Component {
	render() {
		return (
            <div>
			<Jumbotron fluid className='forum' style={{ height: '26rem' }}>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>
            <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
     
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
    </div>
		);
	}
}
