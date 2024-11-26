import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import "../../styles/dashboard.css";

const DoughnutChart = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const DoughnutChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            label: "Crescimento de Servidores",
            data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderWidth: 2,
            fill: true,
          },
        ],
      },
    });
    return () => DoughnutChart.destroy();
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
