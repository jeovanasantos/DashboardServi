import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import "../../styles/dashboard.css";


const PieChart = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const pieChart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            label: "Distribuição de Servidores",
            data,
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
    return () => pieChart.destroy();
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
