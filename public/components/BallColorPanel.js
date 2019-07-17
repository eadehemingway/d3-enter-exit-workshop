import React from 'react';

export const BallColorPanel = ({ color, changeColor }) => {
  return (
    <div className="color-panel">
      <p className="panelScreen">color: {color}</p>
      <div className="button-container">
        <button className="change-color-btn" onClick={changeColor}>
          ~
        </button>
      </div>
    </div>
  );
};
