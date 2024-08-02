import React, { useState } from 'react';
import Form from './components/Form';
import Dropdown from './components/Dropdown';
import axios from 'axios';
import './App.css';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFormSubmit = async (data) => {
    try {
      const res = await axios.post('https://bajaj-backend-ijkk.onrender.com/bfhl', data);
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  };

  const handleDropdownChange = (options) => {
    setSelectedOptions(options);
  };

  const filteredResponse = () => {
    if (!response) return null;
    const filtered = {};
    selectedOptions.forEach(option => {
      filtered[option] = response[option];
    });
    return filtered;
  };

  return (
    <div className="App">
      <h1>BFHL Challenge</h1>
      <Form onSubmit={handleFormSubmit} />
      {response && (
        <>
          <Dropdown onChange={handleDropdownChange} />
          <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
