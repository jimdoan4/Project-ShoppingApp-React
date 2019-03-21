import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Fitness from './components/Fitness';
// import Users from './components/Users.js'
// import Clothes from './components/Clothes.js'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/shop" component={Shop} />
						<Route path="/fitness" component={Fitness} />
						{/* <Route exact path="/" component={Home} />  */}
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
