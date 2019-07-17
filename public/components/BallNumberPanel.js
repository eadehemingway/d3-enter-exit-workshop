import React from 'react';

export class BallNumberPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { addWoolToQueue, minusWoolFromQueue, balls } = this.props;
    return (
      <div className="number-panel">
        <p className="ballNumber">balls: {balls.length}</p>
        <div className="button-container">
          <button
            id="decrease"
            className="decrease-btn"
            onClick={minusWoolFromQueue}
          >
            -
          </button>
          <button
            id="increase"
            className="increase-btn"
            onClick={addWoolToQueue}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
