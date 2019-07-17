import React from 'react';

export class BallSizePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="number-panel">
        <p className="ballNumber">Size: </p>
        <button id="increase" className="increase-btn">
          +
        </button>
        <button id="decrease" className="decrease-btn">
          -
        </button>
      </div>
    );
  }
}
