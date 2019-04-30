import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import MenClothes from './components/MenClothes';
import Home from './components/Home';
import UserAccount from './components/UserAccount';
import UserPage from './components/UserPage';
import ClothesPage from './components/ClothesPage';
import SingleReview from './components/SingleReview';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Brand href="/">EQUIS</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<NavDropdown title="Shop" id="collasible-nav-dropdown">
									<NavDropdown.Item>
										<Link to="/apparels/" style={{ color: 'black ' }}>
											Men Apparel
										</Link>
									</NavDropdown.Item>
									
								</NavDropdown>
							</Nav>
							<Nav.Link>
								<Link to="/users/" style={{ color: 'white ' }}>
									User Account
								</Link>
							</Nav.Link>
							
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/apparels/" component={MenClothes} />
						<Route exact path="/users/" component={UserAccount} />
						<Route exact path="/users/:userId/" component={UserPage} />
						<Route exact path="/apparels/:apparelId/" component={ClothesPage} />
						<Route exact path="/apparels/:apparelId/reviews/:reviewId/" component={SingleReview} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
