import React from 'react';

export const BallColorPanel = ({ color, changeColor }) => {
  const colourDictionary = {
    LightPink: 'pink',
    DarkSalmon: 'salmon',
    orange: 'orange',
    coral: 'coral',
    CornflowerBlue: 'blue'
  };
  return (
    <div className="color-panel">
      <p className="panelScreen">color: {colourDictionary[color]}</p>
      <div className="button-container">
        <button className="change-color-btn" onClick={changeColor}>
          ~
        </button>
      </div>
    </div>
  );
};
