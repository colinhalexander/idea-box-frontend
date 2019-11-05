import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Welcome from './components/Welcome'
import SquaresContainer from './containers/SquaresContainer';
import IdeaForm from './components/IdeaForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route path="/ideas" component={SquaresContainer} />
        <Route path="/new-idea" component={IdeaForm} />
      </Router>
    </div>
  );
}

export default App;
