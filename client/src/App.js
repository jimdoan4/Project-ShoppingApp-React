import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import MenClothes from "./components/MenClothes";
import Home from "./components/Home";
import UserAccount from "./components/UserAccount";
import UserPage from "./components/UserPage";
import ClothesPage from "./components/ClothesPage";
import SingleReview from "./components/SingleReview";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apparels/" component={MenClothes} />
            <Route exact path="/users/" component={UserAccount} />
            <Route exact path="/users/:userId/" component={UserPage} />
            <Route exact path="/apparels/:apparelId/" component={ClothesPage} />
            <Route
              exact
              path="/apparels/:apparelId/reviews/:reviewId/"
              component={SingleReview}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
