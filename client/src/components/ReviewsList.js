// import React, { Component } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom'


// class ReviewsList extends Component {
//     state = {
//         apparelId: this.props.apparelId,
//         reviews: [],
//         newReview: {
//             title: '',
//             description: '',
//         },
//         displayReviewForm: false
//     }

//     componentDidMount = () => {
//          axios
//             .get(`/api/apparels/${this.state.apparelId}/reviews`)
//             .then(res => {
//                 console.log(res.data)
//                 this.setState({ reviews: res.data})
//             })
//     }

//     toggleReviewForm = () => {
//         this.setState((state, props) => {
//             return ({displayReviewForm: !state.displayReviewForm})
//         })
//     }

//     handleChange = (e) => {
//         const changeNewReview = {...this.state.newReview}
//         changeNewReview[e.target.name] = e.target.value
//         this.setState({newReview: changeNewReview})
//     }

//     createReview = (e) => {
//         e.preventDefault()
//         axios
//             .post(`/api/apparels/${this.state.apparelId}/reviews`, {
//                 title: this.state.newReview.title,
//                 description: this.state.newReview.description,
//             })
//             .then(res => {
//                 const reviewsList = [...this.state.reviews]
//                 reviewsList.unshift(res.data)
//                 this.setState({
//                     newReview: {
//                         title: '',
//                         description: '',
                      
//                     },
//                     displayReviewForm: false,
//                     reviews: reviewsList
//                 })
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Reviews</h3>
//                 <button onClick = {this.toggleReviewForm}>
//                     <i className="small material-icons">add_circle</i>
//                     New Medicine
//                 </button>
//                 {
//                     this.state.displayReviewForm
//                     ? <form onSubmit={this.createReview}>
//                         <div>
//                             <label htmlFor="name">Title</label>
//                             <input
//                                 id="title"
//                                 type="text"
//                                 name="title"
//                                 onChange={this.handleChange}
//                                 value={this.state.newReview.title}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="description">Description</label>
//                             <input
//                                 id="description"
//                                 type="text"
//                                 name="description"
//                                 onChange={this.handleChange}
//                                 value={this.state.newReview.description}
//                             />
//                         </div>
//                         <button>Submit</button>
//                     </form>
//                     : null
//                 }
//                 {
//                     this.state.reviews.map(review => {
//                         return (
//                             <div key = {review._id}>
//                                 <button>
//                                     <Link to ={`/${this.state.apparelId}/reviews/${review._id}`} className="white-text">{review.title}</Link>
//                                 </button>   
//                             </div>
//                         )
//                     })
//                 }

//             </div>
//         );
//     }
// }

// export default ReviewsList;