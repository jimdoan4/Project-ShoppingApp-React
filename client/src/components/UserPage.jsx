import React, { Component } from 'react';
import SingleUser from './SingleUser';


export default class UserPage extends Component {
	state = {
		userId: this.props.match.params.userId
	};

	render() {
		return (
			<div className="row">
				<div className="col s12 m4 l3" style= {{ marginTop: '50px'}}>
					<SingleUser userId={this.state.userId} />
				</div>
			</div>
		);
	}
}


