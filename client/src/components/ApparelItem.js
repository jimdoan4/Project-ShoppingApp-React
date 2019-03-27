import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class ApparelItem extends Component {
        state = {
        apparelId: this.props.apparelId,
        apparel: {
            _id: '',
            name: '',
			size: '',
			image: '',
            price: '',
            description: '',
            reviews: [],
        },
        redirectToHome: false,
        displayEditForm: false,
    }

    componentDidMount = () => {
        axios
            .get(`/api/apparels/${this.state.apparelId}`)
            .then(res => {
                this.setState({apparel: res.data})
            })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return ({displayEditForm: !state.displayEditForm})
        })
    }

    handleChange = (e) => {
        const updatedApparel = {...this.state.apparel}
        updatedApparel[e.target.name] = e.target.value
        this.setState({apparel: updatedApparel})
    }

    updateApparel = (e) => {
        e.preventDefault()
        axios
            .put(`/api/apparels/${this.state.apparelId}`, {
                image: this.state.apparel.image,
                name: this.state.apparel.name,
                description: this.state.apparel.description,
                size: this.state.apparel.size,
                price: this.state.apparel.price,
            })
            .then(res => {
                this.setState({apparel: res.data, displayEditForm: false})
            })
    }

    deleteApparel =() => {
        axios
            .delete(`/api/apparels/${this.state.apparelId}`)
            .then(res => {
                this.setState({redirectToHome: true})
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to = '/' />)
        }

        return (
            <div>
<Jumbotron fluid className='cart' style={{ height: '26rem' }}>
				<Container>
					<h1 style={{ color: 'black', fontWeight: 'bold' }}>Brand</h1>
					<p>This is a modified jumbotron that occupies the.</p>
				</Container>
			</Jumbotron>
<div style= {{ marginTop: '100px', marginBotton: '70px' }}>
					<Card className='container' style={{ width: '34rem' }}>
						<Card>
							<Card.Img
								variant="top"
								src={this.state.apparel.image}
								alt="top"
							/>
							<Card.Body>
								<Card.Title>{this.state.apparel.name}</Card.Title>
								<Card.Title>
									{this.state.apparel.description}
								</Card.Title>
								<Card.Title>${this.state.apparel.price}</Card.Title>
							</Card.Body>
							<Form.Group controlId="exampleForm.ControlSelect1" className='container' style={{ width: '34rem' }}>
								<Form.Label>Size</Form.Label>
								<Form.Control as="select" className='container' style={{ width: '12rem' }}>
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</Form.Control>
                            </Form.Group>     
                            <div style= {{ marginBotton: '70px'}}>  
							<button className='container'
								style={{ width: '10rem', backgroundColor: 'red' }}
								onClick={this.toggleApparelForm}
							>
								Add to Cart
							</button>
                          </div>
							{/* <Card className='container' style={{ width: '31.9rem' }}>
								<Card.Body>
									<Card.Title>Reviews</Card.Title>
									<Card.Text>
										This is where you write your reviews.
									</Card.Text>
								</Card.Body>
							</Card> */}
						</Card>
					</Card>
				</div>
                </div>
               
        );
    }
}


export default ApparelItem;


