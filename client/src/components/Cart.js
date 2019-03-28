import React, { Component } from 'react';
import ApparelItem from './ApparelItem';

class Cart extends Component {
	state = {
		apparelId: this.props.match.params.itemid,
		userCart: []
	};
	addThisItem = () => {
		const nowCart = this.state.userCart;
		nowCart.push(this.state.apparelId);
		this.setState({ userCart: nowCart });
	};

	componentDidMount() {
		this.addThisItem();
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<ApparelItem apparelId={this.state.apparelId} />
				</div>
			</div>
		);
	}
}

export default Cart;
