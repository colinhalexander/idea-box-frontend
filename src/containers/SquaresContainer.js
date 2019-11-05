import React, { Component } from 'react';
import SquareFront from '../components/SquareFront';
import SquareBack from '../components/SquareBack';

export default class SquaresContainer extends Component {

  render() {
    return(
      <div className="squares-container">
        <h2>Square Container</h2>
        <SquareFront />
        <SquareBack />
      </div>
    )
  }
}