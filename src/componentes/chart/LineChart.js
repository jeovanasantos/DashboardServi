import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import "../../styles/dashboard.css";

const LineChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const lineChart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Crescimento de Servidores",
            data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
    });
    return () => lineChart.destroy();
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
