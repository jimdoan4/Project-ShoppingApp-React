

import React, { Component } from 'react';
import SingleApparel from './SingleApparel';
import ReviewPage from './ReviewPage';

class ClothesPage extends Component {
	state = {
        apparelId: this.props.match.params.apparelId
       
	};

	render() {
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<SingleApparel apparelId={this.state.apparelId} />
				</div>
 
 				<div className="container col">
 					<ReviewPage apparelId={this.state.apparelId} />
				</div>
			</div>
		);
	}
}

export default ClothesPage;
