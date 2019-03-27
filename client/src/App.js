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
// import MenClothesId from './components/MenClothesId';
import Accessories from './components/Accessories';
import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import LogIn from './components/LogIn';
import Gym from './components/Gym';
import Forum from './components/Forum';
import Cart from './components/Cart';
import CityHoodie from './components/CityHoodie';
import Register from './components/Register';
import UserPage from './components/UserPage';
// import Users from './components/Users.js'

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
								<Nav.Link href="/about">About</Nav.Link>
								<Nav.Link href="/fitness">Fitness</Nav.Link>
								<Nav.Link href="/nutrition">Nutrition</Nav.Link>
								<Nav.Link href="/shopping">Example</Nav.Link>
								<Nav.Link href="/gym">Gym</Nav.Link>
								<Nav.Link href="/forum">Forum</Nav.Link>
								<NavDropdown title="Shop" id="collasible-nav-dropdown">
									<NavDropdown.Item href="/womenclothes">Women Apparel</NavDropdown.Item>
									<NavDropdown.Item href="/menclothes">Men Apparel</NavDropdown.Item>
									<NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
									<NavDropdown.Divider />
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link href="/login">Log In</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="/cart">My Cart</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/shopping" component={Shop} />
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/menclothes/cityhoodie" component={CityHoodie} />
						<Route path="/about" component={About} />
						<Route path="/womenclothes" component={WomenClothes} />
						<Route path="/accessories" component={Accessories} />
						<Route path="/fitness" component={Fitness} />
						<Route path="/nutrition" component={Nutrition} />
						<Route path="/gym" component={Gym} />
						<Route path="/forum" component={Forum} />
						<Route path="/cart" component={Cart} />
						<Route exact path="/menclothes" component={MenClothes} />
						<Route exact path="/apparel/:apparelId" component={UserPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
