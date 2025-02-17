'use client';

import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: Array<{ skill: string; value: number }>;
}

const RadarChartInner = ({ data }: RadarChartProps) => {
  const chartData = {
    labels: data.map(item => item.skill),
    datasets: [{
      label: "Skill Level",
      data: data.map(item => item.value),
      backgroundColor: "rgba(71, 85, 105, 0.3)", // slate-600 with opacity
      borderColor: "rgb(71, 85, 105)", // slate-600
      borderWidth: 2,
      pointBackgroundColor: "rgb(71, 85, 105)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(71, 85, 105)",
      pointRadius: 4,
    }],
  };

  return (
    <Radar 
      data={chartData} 
      options={{
        scales: {
          r: { 
            suggestedMin: 0, 
            suggestedMax: 5,
            ticks: { stepSize: 1 },
            grid: { color: "rgba(71, 85, 105, 0.1)" },
            angleLines: { color: "rgba(71, 85, 105, 0.1)" },
          }
        },
        plugins: {
          legend: { display: false }
        }
      }}
    />
  );
};

export default RadarChartInner; 