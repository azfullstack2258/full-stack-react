import React from 'react';

const Input = ({ value, type = "text", onChange }) => (
  <input type={type} value={value} onChange={onChange} />
);

export default Input;
