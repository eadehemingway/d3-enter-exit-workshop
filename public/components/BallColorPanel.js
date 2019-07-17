import React from 'react';

export class BallColorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { color, changeColor } = this.props;
    return (
      <div className="color-panel">
        <p className="ballNumber">Color: {color}</p>
        <div className="button-container">
          <button className="change-color-btn" onClick={changeColor}>
            ~
          </button>
        </div>
      </div>
    );
  }
}
