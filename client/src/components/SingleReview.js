import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'




class SingleReview extends Component {
    state = {
        review: {
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
            <div>
                <h3 style= {{ marginTop: '30px' }}className="text-center">{this.state.review.title}</h3>
                {
                    this.state.displayEditForm
                    ? <form onSubmit = {this.updateReview} className="col s12">
                        <div className="col">
                            <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '30px'}}htmlFor="title">Title</label>
                                <input style= {{height: '65px', width: '320px'}}
                                    id="title"
                                    type="text"
                                    name="title"
                                    onChange={this.handleChange}
                                    value={this.state.review.title}
                                />
                            </div>  
                            <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '40px'}}htmlFor="description">Description</label>
                                <input
                                style= {{height: '65px', width: '320px'}}
                                    id="description"
                                    type="text"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.review.description}
                                />
                            </div> 
                        </div>
                    
                        <button className= 'text-center'>Submit</button>
                    </form>
                    : <div>
                        <div className="text-center">
                            <button onClick = {this.toggleEditForm}>Edit Review</button>
                            <button onClick = {this.deleteReview}>Delete Review</button>
                        </div>
                       
                     </div>
                }
                <div className="text-center">
                <Link className="text-center" to = {`/apparels/${this.state.apparelId}/`}>Back To Apparels</Link>
                </div>
            </div>
        );
    }
}

export default SingleReview;