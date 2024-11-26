
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSVProvider } from './context/CSVContext';
import UploadPage from './pages/UploadPage';
import DashboardPage from './pages/DashboardPage';


const App = () => (
  <CSVProvider>
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  </CSVProvider>
);

export default App;
