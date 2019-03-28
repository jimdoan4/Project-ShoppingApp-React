// // import React, { Component } from 'react';
// // import { Redirect } from 'react-router-dom';
// // import axios from 'axios';
// // import { Container } from 'react-bootstrap';
// // import { Jumbotron } from 'react-bootstrap';
// // import { Card } from 'react-bootstrap';
// // import { Form } from 'react-bootstrap';

// // class CartItem extends Component {
// //         state = {
// //         apparelId: this.props.apparelId,
// //         apparel: {
// //             _id: '',
// //             name: '',
// // 			size: '',
// // 			image: '',
// //             price: '',
// //             description: '',
// //             reviews: [],
// //         },
// //         redirectToHome: false,
// //         displayEditForm: false,
// //     }

// //     componentDidMount = () => {
// //         axios
// //             .get(`/api/apparels/${this.state.apparelId}`)
// //             .then(res => {
// //                 this.setState({apparel: res.data})
// //             })
// //     }

// //     toggleEditForm = () => {
// //         this.setState((state, props) => {
// //             return ({displayEditForm: !state.displayEditForm})
// //         })
// //     }

// //     handleChange = (e) => {
// //         const updatedApparel = {...this.state.apparel}
// //         updatedApparel[e.target.name] = e.target.value
// //         this.setState({apparel: updatedApparel})
// //     }

// //     updateApparel = (e) => {
// //         e.preventDefault()
// //         axios
// //             .put(`/api/apparels/${this.state.apparelId}`, {
// //                 image: this.state.apparel.image,
// //                 name: this.state.apparel.name,
// //                 description: this.state.apparel.description,
// //                 size: this.state.apparel.size,
// //                 price: this.state.apparel.price,
// //             })
// //             .then(res => {
// //                 this.setState({apparel: res.data, displayEditForm: false})
// //             })
// //     }

// //     deleteApparel =() => {
// //         axios
// //             .delete(`/api/apparels/${this.state.apparelId}`)
// //             .then(res => {
// //                 this.setState({redirectToHome: true})
// //             })
// //     }


// //     render() {
// //         if (this.state.redirectToHome) {
// //             return (<Redirect to = '/' />)
// //         }

// //         return (
// //             <div>
// // <Jumbotron fluid className='cart' style={{ height: '26rem' }}>
// // 				<Container>
// // 					<h1 style={{ color: 'black', fontWeight: 'bold' }}>Brand</h1>
// // 					<p>This is a modified jumbotron that occupies the.</p>
// // 				</Container>
// // 			</Jumbotron>
// // <div style= {{ marginTop: '100px', marginBotton: '100px' }}>
// // 					<Card className='container' style={{ width: '43rem' }}>
// // 						<Card>
// // 							<Card.Img
// // 								variant="top"
// // 								src={this.state.apparel.image}
// // 								alt="top"
// // 							/>
// // 							<Card.Body>
// // 								<Card.Title>{this.state.apparel.name}</Card.Title>
// // 								<Card.Title>
// // 									{this.state.apparel.description}
// // 								</Card.Title>
// // 								<Card.Title>${this.state.apparel.price}</Card.Title>
// // 							</Card.Body>
// // 							<Form.Group controlId="exampleForm.ControlSelect1" className='container' style={{ width: '34rem' }}>
// // 								<Form.Label>Size</Form.Label>
// // 								<Form.Control as="select" className='container' style={{ width: '12rem' }}>
// // 									<option>S</option>
// // 									<option>M</option>
// // 									<option>L</option>
// // 									<option>XL</option>
// // 								</Form.Control>
// //                             </Form.Group>     
// //                             <div className='container' style= {{ marginBotton: '70px'}}>  
// // 							<button className='container'
// // 								style={{ width: '10rem', marginBottom: '50px', backgroundColor: 'red' }}
// // 								onClick={this.toggleApparelForm}
// // 							>
// // 								Edit Item
// // 							</button>
// //                           </div>
// //                            <div className='container' style= {{ marginBotton: '70px'}}>  
// // 							<button className='container'
// // 								style={{ width: '10rem', marginBottom: '50px', backgroundColor: 'red' }}
// // 								onClick={this.deleteApparel}
// // 							>
// // 								Delete Item
// // 							</button>
// //                           </div>
                         
// // 						</Card>
// // 					</Card>

						
// // 				</div>
// //                 </div>
               
// //         );
// //     }
// // }


// // export default CartItem;


// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';
// import { Container } from 'react-bootstrap';
// import { Jumbotron } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

// class CartItem extends Component {
//         state = {
//         apparelId: this.props.apparelId,
//         apparels: [],
//         apparel: {
//             _id: '',
//             name: '',
// 			size: '',
// 			image: '',
//             price: '',
//             description: '',
//             reviews: [],
//         },
//         redirectToHome: false,
//         displayEditForm: false,
//     }

//     componentDidMount = () => {
//         axios
//             .get(`/api/apparels/${this.state.apparelId}`)
//             .then(res => {
//                 this.setState({apparel: res.data})
//             })
//     }

//     toggleEditForm = () => {
//         this.setState((state, props) => {
//             return ({displayEditForm: !state.displayEditForm})
//         })
//     }

//     handleChange = (e) => {
//         const updatedApparel = {...this.state.apparel}
//         updatedApparel[e.target.name] = e.target.value
//         this.setState({apparel: updatedApparel})
//     }

//     updateApparel = (e) => {
//         e.preventDefault()
//         axios
//             .put(`/api/apparels/${this.state.apparelId}`, {
//                 image: this.state.apparel.image,
//                 name: this.state.apparel.name,
//                 description: this.state.apparel.description,
//                 size: this.state.apparel.size,
//                 price: this.state.apparel.price,
//             })
//             .then(res => {
//                 this.setState({apparel: res.data, displayEditForm: false})
//             })
//     }

//     addToCart = (e) => {
//         e.preventDefault()
//         axios
//             .put(`/api/apparels/${this.state.apparelId}`, {
//                 image: this.state.apparel.image,
//                 name: this.state.apparel.name,
//                 description: this.state.apparel.description,
//                 size: this.state.apparel.size,
//                 price: this.state.apparel.price,
//             })
//             .then(res => {
//                 this.setState({apparel: res.data, displayEditForm: false})
//             })
//     }

//     deleteApparel =() => {
//         axios
//             .delete(`/api/apparels/${this.state.apparelId}`)
//             .then(res => {
//                 this.setState({redirectToHome: true})
//             })
//     }

//     createApparel = (e) => {
//         e.preventDefault()
//         axios
//             .post(`/api/apparels/${this.state.apparelId}`, {
//                 image: this.state.apparel.image,
//                 name: this.state.apparel.name,
//                 description: this.state.apparel.description,
//                 size: this.state.apparel.size,
//                 price: this.state.apparel.price,
//             })
//             .then(res => {
//                 const apparelsList = [this.state.apparels]
//                 apparelsList.unshift(res.data)
//                 this.setState({
//                     apparel: {
//                     name: '',
// 			        size: '',
// 			        image: '',
//                     price: '',
//                     description: '',
//                     },
//                     displayUserForm: false,
//                     apparels: apparelsList
//                 })
//             })
//     }

//     render() {
//         if (this.state.redirectToHome) {
//             return (<Redirect to = '/' />)
//         }

//         return (
//             <div>
// <Jumbotron fluid className='cart' style={{ height: '26rem' }}>
// 				<Container>
// 					<h1 style={{ color: 'black', fontWeight: 'bold' }}>Brand</h1>
// 					<p>This is a modified jumbotron that occupies the.</p>
// 				</Container>
// 			</Jumbotron>
//             <form onSubmit = {this.createApparel}>
// <div style= {{ marginTop: '100px', marginBotton: '100px' }}>
// 					<Card className='container' style={{ width: '43rem' }}>
// 						<Card>
// 							<Card.Img
//                                 variant="top"
//                                 onChange={this.handleChange}
//                                 value={this.state.apparel.image}
// 								src={this.state.apparel.image}
// 								alt="top"
// 							/>
// 							<Card.Body>
// 								<Card.Title>{this.state.apparel.name}</Card.Title>
// 								<Card.Title>
// 									{this.state.apparel.description}
// 								</Card.Title>
// 								<Card.Title>${this.state.apparel.price}</Card.Title>
// 							</Card.Body>
// 							<Form.Group controlId="exampleForm.ControlSelect1" className='container' style={{ width: '34rem' }}>
// 								<Form.Label>Size</Form.Label>
// 								<Form.Control as="select" className='container' style={{ width: '12rem' }}>
// 									<option>S</option>
// 									<option>M</option>
// 									<option>L</option>
// 									<option>XL</option>
// 								</Form.Control>
//                             </Form.Group>     
//                             <div className='container' style= {{ marginBotton: '70px'}}>  
// 							<button className='container'
// 								style={{ width: '10rem', marginBottom: '50px', backgroundColor: 'red' }}
// 								onClick={this.toggleApparelForm}
// 							>
// 								Add to Cart
// 							</button>
//                           </div>
                         
// 						</Card>
// 					</Card>

// 				</div>
//                 </form>
//                 </div>
               
//         );
//     }
// }

// export default CartItem;