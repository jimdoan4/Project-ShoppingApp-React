import React, { Component } from 'react';
import ApparelItem from './ApparelItem'



class FullItemPage extends Component {
    state = {
        apparelId: this.props.match.params.apparelId,
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m4 l3">
                    <ApparelItem apparelId={this.state.apparelId}/>
                </div>
            </div>
        );
    }
}

export default FullItemPage;