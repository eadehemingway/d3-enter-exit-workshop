import React from 'react';
import * as d3 from 'd3';
import { BallNumberPanel } from './BallNumberPanel';
import { BallSizePanel } from './BallSizePanel';
import { BallColorPanel } from './BallColorPanel';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, height: 90, liquidHeight: 35, color: '#FDA7DF' },
        { id: 2, height: 100, liquidHeight: 40, color: '#54a0ff' }
      ],
      balls: [],
      catPath:
        'm396.35663,311.25821c-13.41742,-10.47318 -28.76758,-3.96683 -43.5509,-4.75632c-12.93182,-11.07962 -28.66629,2.3475 -40.85934,-8.33789c-15.77493,-14.05475 11.56558,-22.86807 5.7373,-39.56415c-0.65771,-24.0419 -10.94836,-45.81717 -21.77539,-66.02428c-7.65988,-16.06839 -4.94803,-34.53508 -7.41699,-51.7166c-8.85388,-12.34473 -17.69766,-27.62405 -7.16412,-42.87289c11.90973,-12.87106 6.30396,-29.77943 1.62924,-44.65391c12.03101,3.54156 25.85321,19.66071 41.68884,16.43285c10.75632,-6.93137 17.29297,-0.08103 19.09409,12.61797c5.64624,16.29109 8.93484,38.5827 26.75375,43.83432c18.70941,5.34254 39.6553,6.52644 54.44867,22.20027c27.06769,25.3474 39.60474,65.31624 38.552,103.83789c2.43921,18.01105 25.04413,8.44919 36.23547,11.10004c18.74976,-0.82904 36.76111,5.06967 54.91443,9.1069c16.20013,4.31042 29.92078,-9.31888 45.14905,-10.9483c2.57037,15.745 -17.41418,22.30164 -28.33221,27.15833c-12.95184,5.51471 -26.98676,5.64691 -40.29266,1.6095c-28.78772,-7.18442 -59.29565,-5.29221 -86.63629,7.31573c-14.76294,5.44357 -29.09103,15.73447 -45.14957,14.43954l-3.02536,-0.77902l0,0l0,0z'
    };
  }
  componentDidMount() {
    const { data, catPath } = this.state;
    const svgWidth = 800;
    const svgHeight = 500;
    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    svg
      .append('path')
      .attr('d', catPath)
      .attr('stroke-width', 6)
      .attr('fill', 'none')
      .attr('stroke', '#f9c89d')
      .attr('width', 50)
      .attr('height', 70);
  }

  addWoolToQueue = () => {
    const xVal = Math.floor(Math.random() * 700) + 20;
    const yVal = Math.floor(Math.random() * 50) + 290;
    const newBallArr = [...this.state.balls, { x: xVal, y: yVal }];
    this.setState({ balls: newBallArr });
  };

  dropWool = () => {
    const { balls } = this.state;
    const ballSelection = d3
      .select('svg')
      .selectAll('circle')
      .data(balls);
    ballSelection
      .enter()
      .append('circle')
      .attr('r', 13)
      .attr('cx', d => d.x)
      .attr('cy', 0)
      .attr('stroke', '#f99ad5')
      .attr('fill', 'none')
      .attr('stroke-width', 6)
      .transition()
      .duration(1250)
      .ease(d3.easeBounce)
      .attr('cy', d => d.y);

    ballSelection
      .exit()
      .transition()
      .ease(d3.easeExp)
      .duration(1500)
      .attr('cx', 900)

      .remove();
  };

  minusWoolFromQueue = () => {
    const newBallArr = [...this.state.balls];
    newBallArr.pop();
    this.setState({ balls: newBallArr });
  };
  render() {
    return (
      <section>
        <div id="chart" />

        <section className="button_panel">
          <BallNumberPanel
            addWoolToQueue={this.addWoolToQueue}
            minusWoolFromQueue={this.minusWoolFromQueue}
            balls={this.state.balls}
          />

          <BallColorPanel />
          <BallSizePanel />
          <button className="update-btn" onClick={this.dropWool}>
            update
          </button>
        </section>
      </section>
    );
  }
}
