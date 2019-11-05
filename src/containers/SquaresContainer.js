import React, { Component } from 'react';
import IdeaDisplay from '../components/IdeaDisplay';

export default class SquaresContainer extends Component {

  state = {
    activeSquareID: "none"
  }

  showIdea = (id) => {
    this.setState({ activeSquareID: id })
  }

  closeIdea = () => {
    this.setState({ activeSquareID: "none" })
  }

  makeSquares = () => {
    return this.props.ideas.map((idea) => {
      return (idea.id !== this.state.activeSquareID)
        ? (
          <div key={idea.id} className="square-front" onClick={() => this.showIdea(idea.id)}></div>
        ) : (
          <IdeaDisplay key={idea.id} closeIdea={this.closeIdea} idea={idea} />
        )
    })
  }

  render() {
    return(
      <div className="squares-container">
        {this.makeSquares()}
      </div>
    )
  }
}