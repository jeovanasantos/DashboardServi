// src/components/Chart/BarChart.js
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import  '../../styles/dashboard.css'

const BarChart = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const barChart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Quantidade de Servidores',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    return () => barChart.destroy();
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
