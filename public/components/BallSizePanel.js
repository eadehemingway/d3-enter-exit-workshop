import React from 'react';

export const BallSizePanel = ({ radius, increaseRadius, decreaseRadius }) => {
  return (
    <div className="size-panel">
      <p className="ballNumber">Size: {radius} </p>
      <div className="button-container">
        <button id="decrease" className="decrease-btn" onClick={decreaseRadius}>
          -
        </button>
        <button id="increase" className="increase-btn" onClick={increaseRadius}>
          +
        </button>
      </div>
    </div>
  );
};
