import React from 'react';
import Papa from 'papaparse';
import { useCSV } from './CSVContext'
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const { setCsvData } = useCSV();
  const navigate = useNavigate();  // Substitua useHistory por useNavigate

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setCsvData(result.data);
        navigate('/dashboard'); // Use navigate ao invés de history.push
      },
      error: (error) => {
        console.error('Erro ao carregar CSV:', error);
      }
    });
  };

  return (
    <div>
      <h1>Carregar Arquivo CSV</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadPage;
