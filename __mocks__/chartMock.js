import React from "react";

// Define a generic chart mock component
const ChartMock = ({ data, options }) => (
  <div
    data-testid="chart-mock"
    data-data={JSON.stringify(data)}
    data-options={JSON.stringify(options)}
  >
    Mock Chart
  </div>
);

// Export mocked chart components
export const Radar = ChartMock;
export const Bar = ChartMock;
export const Line = ChartMock;
export const Pie = ChartMock;
export const Doughnut = ChartMock;
export const PolarArea = ChartMock;
export const Bubble = ChartMock;
export const Scatter = ChartMock;
export const Chart = ChartMock;
