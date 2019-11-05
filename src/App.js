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
    // fetch ideas
    const ideas = []
    for (let i = 0; i <= 1000; i++) {
      ideas.push({
        id: i,
        content: "This is an idea, I hope you like it",
        author: "Abraham Lincoln"
      })
    }

    this.setState({ ideas })
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


