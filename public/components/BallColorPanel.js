import React from 'react';

export class BallColorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="number-panel">
        <p className="ballNumber">Color: </p>
        <button id="increase" className="increase-btn">
          -
        </button>
        <button id="decrease" className="decrease-btn">
          -
        </button>
      </div>
    );
  }
}
