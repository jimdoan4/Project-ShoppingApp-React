// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';
// import MenClothes from './MenClothes'
// // import { Card } from 'react-bootstrap';
// // import MenClothes from './MenClothes';
// // import { Container } from 'react-bootstrap';
// // import { Jumbotron } from 'react-bootstrap';

// class ApparelItem extends Component {
//         state = {
//         apparelId: this.props.apparelId,
//         currentApparel: {
//             _id: '',
//             name: '',
// 			size: '',
// 			image: '',
//             price: '',
//             description: '',
//             medicines: [],
//         },
//         redirectToHome: false,
//         displayEditForm: false
//     }

//     componentDidMount = () => {
//         axios
//             .get(`/api/apparels/${this.state.apparelId}`)
//             .then(res => {
//                 this.setState({currentApparel: res.data})
//             })
//     }

//     toggleEditForm = () => {
//         this.setState((state, props) => {
//             return ({displayEditForm: !state.displayEditForm})
//         })
//     }

//     handleChange = (e) => {
//         const updatedApparel = {...this.state.currentApparel}
//         updatedApparel[e.target.name] = e.target.value
//         this.setState({currentApparel: updatedApparel})
//     }

//     updateApparel = (e) => {
//         e.preventDefault()
//         axios
//             .put(`/api/apparels/${this.state.apparelId}`, {
//                 name: this.state.currentUser.email,
//                 description: this.state.currentApparel.description,
//                 price: this.state.currentApparel.price,
//             })
//             .then(res => {
//                 this.setState({apparel: res.data, displayEditForm: false})
//             })
//     }

//     deleteUser =() => {
//         axios
//             .delete(`/api/apparels/${this.state.apparelId}`)
//             .then(res => {
//                 this.setState({redirectToHome: true})
//             })
//     }

//     render() {
//         if (this.state.redirectToHome) {
//             return (<Redirect to = '/' />)
//         }

//         return (
//             <div>
//                 <h3 className="text-center">{this.state.currentApparel.name}</h3>
//                 {
//                     this.state.displayEditForm
//                     ? <form onSubmit = {this.updateApparel}>
//                         <div>
//                             <label htmlFor="displayName">Display Name</label>
//                             <input
//                                 id="name"
//                                 type="text"
//                                 name="name"
//                                 onChange={this.handleChange}
//                                 value={this.state.currentApparel.name}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 id="email"
//                                 type="text"
//                                 name="email"
//                                 onChange={this.handleChange}
//                                 value={this.state.currentUser.size}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 onChange={this.handleChange}
//                                 value={this.state.currentUser.password}
//                             />
//                         </div>
//                         <button className="green lighten-3">Update!</button>
//                     </form>
//                         : <div>
//                         <div>
//                            hi
//                         </div>
//                     </div> 
//                 }
//                 <div className="row">
//                     <button className="btn-small" onClick = {this.toggleEditForm}>Edit</button>
//                     <button onClick = {this.deleteUser} className="btn-small">Delete</button>
//                 </div>
                
//             </div>
//         );
//     }
// }

// export default ApparelItem;


