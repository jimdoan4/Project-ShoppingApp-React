import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import MenClothes from './components/MenClothes';
import Home from './components/Home';

import WomenClothes from './components/WomenClothes';
import Accessories from './components/Accessories';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import LogIn from './components/LogIn';
import Gym from './components/Gym';
import Forum from './components/Forum';
import Cart from './components/Cart';
import Register from './components/Register';
import FullItemPage from './components/FullItemPage';

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
								<Nav.Link>
									<Link to="/fitness" style={{ color: 'white ' }}>
										Fitness
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to="/nutrition" style={{ color: 'white ' }}>
										Nutrition
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to="/gym" style={{ color: 'white ' }}>
										Gym
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to="/forum" style={{ color: 'white' }}>
										Forum
									</Link>
								</Nav.Link>
								<NavDropdown title="Shop" id="collasible-nav-dropdown">
									<NavDropdown.Item>
										<Link to="/womenclothes" style={{ color: 'black ' }}>
											Women Apparel
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to="/apparels" style={{ color: 'black ' }}>
											Men Apparel
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to="/accessories" style={{ color: 'black ' }}>
											Accessories
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Divider />
								</NavDropdown>
							</Nav>
							<Nav.Link>
								<Link to="/login" style={{ color: 'white ' }}>
									Log In
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/cart" style={{ color: 'white ' }}>
									My Cart
								</Link>
							</Nav.Link>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/apparels" component={MenClothes} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/womenclothes" component={WomenClothes} />
						<Route exact path="/accessories" component={Accessories} />
						<Route exact path="/fitness" component={Fitness} />
						<Route exact path="/nutrition" component={Nutrition} />
						<Route exact path="/gym" component={Gym} />
						<Route exact path="/forum" component={Forum} />
						<Route exact path="/cart/:itemid" component={Cart} />
						<Route exact path="/:apparelId" component={FullItemPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
