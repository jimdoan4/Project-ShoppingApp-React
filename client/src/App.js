import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import WomenClothes from './components/WomenClothes';
import MenClothes from './components/MenClothes';
import Accessories from './components/Accessories';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import LogIn from './components/LogIn';
// import Users from './components/Users.js'
// import Clothes from './components/Clothes.js'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Brand href="/">EQuis</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/about">About</Nav.Link>
								<Nav.Link href="/fitness">Fitness</Nav.Link>
								<Nav.Link href="/nutrition">Nutrition</Nav.Link>
								<NavDropdown title="Shop" id="collasible-nav-dropdown">
									<NavDropdown.Item href="/womenclothes">Women Apparel</NavDropdown.Item>
									<NavDropdown.Item href="/menclothes">Men Apparel</NavDropdown.Item>
									<NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
									<NavDropdown.Divider />
									{/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link href="/login">Log In</Nav.Link>
								{/* <Nav.Link eventKey={2} href="#memes">
									Dank memes
								</Nav.Link> */}
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/womenclothes" component={WomenClothes} />
						<Route path="/menclothes" component={MenClothes} />
						<Route path="/accessories" component={Accessories} />
						<Route path="/fitness" component={Fitness} />
						<Route path="/nutrition" component={Nutrition} />
						<Route path="/Login" component={LogIn} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
