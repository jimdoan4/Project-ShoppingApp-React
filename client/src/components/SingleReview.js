import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleReview extends Component {
    state = {
        review: {
            screenName: '',
            title: '',
            description: ''
        },
        redirectToReview: false,
        displayEditForm: false,
        apparelId: this.props.match.params.apparelId,
        reviewId: this.props.match.params.reviewId,
    }

    getReviewData = () => {
        axios
            .get(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`)
            .then(res => {
                this.setState({review: res.data})
            })
    }

    componentDidMount = () => {
        this.getReviewData()
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return ({displayEditForm: !state.displayEditForm})
        })
    }

    handleChange = (e) => {
        const updateReview = {...this.state.review}
        updateReview[e.target.name] = e.target.value
        this.setState({review: updateReview})
    }


    updateReview = (e) => {
        e.preventDefault()
        axios
            .put(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`, {
                screenName: this.state.review.screenName,
                title: this.state.review.title,
                description: this.state.review.description
                
            })
            .then(res => {
                this.setState({review: res.data, displayEditForm: false})
            })
        this.getReviewData()
    }

    deleteReview = () => {
        axios
            .delete(`/api/apparels/${this.state.apparelId}/reviews/${this.state.reviewId}`)
            .then(res => {
                this.setState({redirectToReview: true})
            })

    }

    render() {
        if (this.state.redirectToReview) {
            return (<Redirect to={`/apparels/${this.state.apparelId}`}/>)
        }
        return (
            <div className= 'text-center'>
                <h3 style= {{ marginTop: '30px' }} className="text-center">{this.state.review.title}</h3>
                {
                    this.state.displayEditForm
                    ? <form style= {{margin: 'auto'}} onSubmit = {this.updateReview} className="row text-center">
                     <div className="col">
                            <div className="col text-center">
                                <label style= {{ marginRight: '30px', marginTop: '30px'}}htmlFor="screenName">Screen Name</label>
                                <input style= {{height: '50px', width: '320px'}}
                                    className= 'text-center'
                                    id="screenName"
                                    type="text"
                                    name="screenName"
                                    onChange={this.handleChange}
                                    value={this.state.review.screenName}
                                />
                            </div>  
                       
                        <div className="col">
                            <div className="col text-center">
                                <label style= {{ marginRight: '30px', marginTop: '30px'}}htmlFor="title">Title</label>
                                <input style= {{height: '50px', width: '320px'}}
                                    className= 'text-center'
                                    id="title"
                                    type="text"
                                    name="title"
                                    onChange={this.handleChange}
                                    value={this.state.review.title}
                                />
                            </div>  
                            <div className="col text-center">
                                <label style= {{ marginRight: '30px', marginTop: '40px'}}htmlFor="description">Description</label>
                                <input
                                style= {{height: '54px', width: '390px', marginRight: '53px', paddingTop: '130px', paddingBottom: '130px', marginTop: '20px'}}
                                    className= 'text-center'
                                    id="description"
                                    type="text"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.review.description}
                                />
                            </div> 
                        </div>
                    <div className= 'text-center' style= {{ marginTop: '20px'}}>
                        <button style= {{ backgroundColor: '#3a5d96', color: 'white',
                            borderColor: 'black'}} className= 'text-center'>Submit</button>
                        </div>
                        </div>
                    </form>
                   
                    : <div>
                        <div className="text-center">
                            <button onClick = {this.toggleEditForm} style= {{ marginRight: '50px', marginTop: '20px', width: '12rem', marginBottom: '30px', backgroundColor: '#3a5d96', borderColor: 'white', color: 'white',
                            borderColor: 'black'}}>Edit Review</button>
                            <button style= {{ marginTop: '20px', width: '12rem', marginBottom: '30px', backgroundColor: '#3a5d96', borderColor: 'white',color: 'black', borderColor: 'white'}} onClick = {this.deleteReview}>Delete Review</button>
                        </div>
                     </div>
                }
                <div className="text-center" style= {{ marginTop: '18px'}}>
                <Link className="text-center" to = {`/apparels/${this.state.apparelId}/`}>Back To Apparels</Link>
                </div>
            </div>
        );
    }
}

