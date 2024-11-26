import React from 'react';
import Papa from 'papaparse';
import { useCSV } from '../context/CSVContext'
import { useNavigate } from 'react-router-dom';
import  '../styles/dashboard.css'

const UploadPage = () => {
  const { setCsvData } = useCSV();
  const navigate = useNavigate();  
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setCsvData(result.data);
        navigate('/dashboard'); 
      },
      error: (error) => {
        console.error('Erro ao carregar CSV:', error);
      }
    });
  };

  return (
    <div id='upload-csv' >
      <h1>Carregar Arquivo CSV</h1>
      <input id='upload-csv' type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadPage;