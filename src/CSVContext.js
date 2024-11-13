// CSVContext.js
import React, { createContext, useState, useContext } from 'react';

const CSVContext = createContext();

export const CSVProvider = ({ children }) => {
  const [csvData, setCsvData] = useState([]);

  return (
    <CSVContext.Provider value={{ csvData, setCsvData }}>
      {children}
    </CSVContext.Provider>
  );
};

export const useCSV = () => useContext(CSVContext);
