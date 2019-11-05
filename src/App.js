import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Welcome from './components/Welcome'
import SquaresContainer from './containers/SquaresContainer';
import IdeaForm from './components/IdeaForm';

export default class App extends Component {
  
  state = {
    ideas: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/ideas")
      .then(response => response.json())
      .then(ideas => this.setState({ ideas }))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route 
            path="/ideas" 
            render={ () => <SquaresContainer ideas={this.state.ideas} /> } 
          />
          <Route path="/new-idea" component={IdeaForm} />
        </Router>
      </div>
    );
  }
}


