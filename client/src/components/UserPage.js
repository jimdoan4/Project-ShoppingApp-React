import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

class UserPage extends Component {
  	state = {
		apparel: {},
        redirectToHome: false,
        isEditFormDisplayed: false,
		createdApparel: {}
	};

  componentDidMount = () => {
      axios.get(`/api/apparels/${this.props.match.params.id}`).then(res => {
          this.setState({apparel: res.data})
      })
  }

  deleteApparel = () => {
      axios.delete(`/api/apparels/${this.props.match.params.id}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: true}
      })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/" />)
    }

    return (
      <div>
        <div>{this.state.apparel.image}</div>
        <div>Name: {this.state.apparel.name}</div>
        <div>Price: {this.state.apparel.price}</div>
        <div>Size: {this.state.apparel.size}</div>
        <div>Description: {this.state.apparel.description}</div>
        <button onClick={this.deleteApparel}>Delete</button>
         <button onClick={this.toggleEditForm}>Edit</button>
      </div>
    );
  }
}

export default UserPage;

// export default class UserPage extends Component {
// 	render() {
// 		return (
// 			<Jumbotron fluid className="gym" style={{ height: '26rem', fontWeight: 'bold' }}>
// 				<Container>
// 					<h1 style={{ fontWeight: 'bold' }}>EQUIS Gym</h1>
// 					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
// 				</Container>
// 			</Jumbotron>
// 		);
// 	}
// }
