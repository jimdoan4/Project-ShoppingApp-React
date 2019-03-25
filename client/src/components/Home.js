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
            <div>
            <Jumbotron fluid className='home' style={{ height: '26rem' }}>
				<Container>
					<h1>EQUIS</h1>
					<p>Your MIND, BODY and SOUL</p>
				</Container>
			</Jumbotron>
           
       
            <Jumbotron fluid className='homes' style={{ height: '26rem' }}>
				<Container>
					<h1>EQUIS</h1>
					<p>Your MIND, BODY and SOUL</p>
				</Container>
			</Jumbotron>
          
         
            <Jumbotron fluid className='homee' style={{ height: '26rem' }}>
				<Container>
					<h1>EQUIS</h1>
					<p>Your MIND, BODY and SOUL</p>
				</Container>
			</Jumbotron>
            </div>
         
            


		);
	}
}


 