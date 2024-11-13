
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSVProvider } from './CSVContext';
import UploadPage from './UploadPage';
import Dashboard from './dashboard';


const App = () => (
  <CSVProvider>
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </CSVProvider>
);

export default App;
