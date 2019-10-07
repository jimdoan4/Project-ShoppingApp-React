import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron className="main-page-image" style={{ height: '26rem' }}>
					<Container className="main-header-img intro-header">
						<h1>EQUIS Men Apparel</h1>
					</Container>
				</Jumbotron>
				<div id="event">
        <div class="container-fluid text-center">
<div class="container-fluid">
        
              <div class="row text-center"> 
                <div class="col main-img-intro">
                      <img class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LM3BF7S_038068_1?$image_carousel-lg$"/>
                </div>
  
                <div class="col main-img-intro">
                      <img class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LM3AUTS_037049_1?$image_carousel-lg$"/>
                </div>
          </div> 
      </div>

					<div id="event">
					
                <button class="btn btn-custom" type="submit" value="Send">SHOP WHAT'S NEW</button>
             
		<div class="container-fluid">
              <div class="row text-center">
                <div class="col secondary-img-intro">
                      <img class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LU9A73S_037040_1?$image_carousel-lg_2x$"/> 
                </div>
				<div class="col secondary-img-intro">                 
                      <img style={{width: '20rem', height: '460px'}} class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LM9767S_036763_2?$product_tile-lg_2x$"/>          
                </div>
				<div class="col secondary-img-intro">
                      <img style={{width: '20rem', height: '460px'}} class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LM5609S_1971_1?$image_carousel-lg_2x$"/>
                </div>
				</div>
				<br/>
				<div class="row text-center">
				<div class="col secondary-img-intro">
                      <img class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LM9474S_037617_2?$product_tile-lg_2x$"/>
                </div>
				<div class="col secondary-img-intro">
                      <img class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LM9641S_031382_2?$product_tile-lg_2x$"/>
                </div>
                <div class="col secondary-img-intro">
                      <img class="card-img-top" src="https://images.lululemon.com/is/image/lululemon/LU9AF5S_0001_2?$product_tile-lg_2x$"/>
                </div>
            </div>
			</div>
			</div>
			</div>
			</div>
			</div>
	

		);
	}
}
