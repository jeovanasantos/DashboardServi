import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useCSV } from './CSVContext';
import './dashboard.css';

const Dashboard = () => {
  const { csvData } = useCSV();
  const barRef = useRef(null);
  const pieRef = useRef(null);
  const lineRef = useRef(null);
  const doughnutRef = useRef(null);

  const barChart = useRef(null);
  const pieChart = useRef(null);
  const lineChart = useRef(null);
  const doughnutChart = useRef(null);

  useEffect(() => {
    if (csvData.length === 0) return;

    const cargos = csvData.map(item => item.Categoria);
    const quantidades = csvData.map(item => parseInt(item.Quantidade, 10));

    const destroyChart = (chartRef) => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };

    destroyChart(barChart);
    barChart.current = new Chart(barRef.current, {
      type: 'bar',
      data: {
        labels: cargos,
        datasets: [
          {
            label: 'Quantidade de Servidores',
            data: quantidades,
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    destroyChart(pieChart);
    pieChart.current = new Chart(pieRef.current, {
      type: 'pie',
      data: {
        labels: cargos,
        datasets: [
          {
            label: 'Distribuição de Servidores',
            data: quantidades,
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderWidth: 1,
          },
        ],
      },
    });

    destroyChart(lineChart);
    lineChart.current = new Chart(lineRef.current, {
      type: 'line',
      data: {
        labels: cargos,
        datasets: [
          {
            label: 'Crescimento de Servidores',
            data: quantidades,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
    });

    destroyChart(doughnutChart);
    doughnutChart.current = new Chart(doughnutRef.current, {
      type: 'doughnut',
      data: {
        labels: cargos,
        datasets: [
          {
            label: 'Crescimento de Servidores',
            data: quantidades,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(220,20,60)','rgba(30,144,255)'],
            borderWidth: 2,
            fill: true,
          },
        ],
      },
    });

    return () => {
      destroyChart(barChart);
      destroyChart(pieChart);
      destroyChart(lineChart);
      destroyChart(doughnutChart);
    };
  }, [csvData]);

  return (
    <div id="dashboard">
      <h1>Dashboard de Servidores</h1>
      <div className="chart-container">
        <canvas ref={barRef}></canvas>
        <canvas ref={pieRef}></canvas>
        <canvas ref={lineRef}></canvas>
        <canvas ref={doughnutRef}></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
