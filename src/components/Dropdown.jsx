import React from 'react';

const Dropdown = ({ onChange }) => {
  const options = ['numbers', 'alphabets', 'highest_alphabet'];

  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    onChange(selectedOptions);
  };

  return (
    <select multiple onChange={handleChange}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
