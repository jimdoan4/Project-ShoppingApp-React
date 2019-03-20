import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users.js'
import Clothes from './components/Clothes.js'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={}/>
            <Route path="/:id" component={}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
