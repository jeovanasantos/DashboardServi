// src/pages/DashboardPage.js
import React from 'react';
import BarChart from '../componentes/chart/BarChart';
import { useCSV } from '../context/CSVContext';
import DoughnutChart from '../componentes/chart/DoughnutChart';
import LineChart from '../componentes/chart/LineChart';
import PieChart from '../componentes/chart/PieChart';
import  '../styles/dashboard.css'


const DashboardPage = () => {
  const { csvData } = useCSV();

  const labels = csvData.map(item => item.Categoria);
  const data = csvData.map(item => parseInt(item.Quantidade, 10));

  return (
    <div id="dashboard">
    <h1>Dashboard de Servidores</h1>
    <div className="chart-container">
      <BarChart data={data} labels={labels} />
      <DoughnutChart data={data} labels={labels} />
      <LineChart data={data} labels={labels} />
      <PieChart data={data} labels={labels} />
    </div>
    </div>
  );
};

export default DashboardPage;
