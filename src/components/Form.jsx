import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(jsonInput);
      if (data && data.data) {
        onSubmit(data);
        setError(null);
      } else {
        setError('Invalid JSON format.');
      }
    } catch (err) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON here'
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
