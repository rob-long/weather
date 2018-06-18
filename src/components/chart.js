import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avg(data) {
  return Math.round(data.reduce((a,b) => a + b) / data.length);
}

const SparkLinesForecast = ({forecast, color, unit}) => (
  <div>
  <Sparklines data={forecast} svgWidth={250} svgHeight={100} margin={5}>
  <SparklinesLine color={color} />
  <SparklinesReferenceLine type="avg" /> 
  </Sparklines>
  <div>{avg(forecast)} {unit}</div>
  </div>
);

export default SparkLinesForecast;