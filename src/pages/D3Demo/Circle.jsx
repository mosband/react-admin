import React, { Component } from "react";
import * as d3 from "d3";
export default class Circle extends Component {
  componentDidMount() {
    const mainSvg = d3.select("#mainSvg");
    const mainGroup = mainSvg
      .append("g")
      .attr("transform", `translate(${100}, ${100})`);
    mainGroup
      .append("circle")
      .attr("stroke", "black")
      .attr("r", "66")
      .attr("fill", "yellow");
  }
  render() {
    return (
      <div>
        <svg width="960" height="500" id="mainSvg"></svg>
      </div>
    );
  }
}
