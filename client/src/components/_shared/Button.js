import React from 'react';

const Button = ({ children, isProceeding, onClick }) => (
  <button onClick={onClick}>
    {isProceeding ? <span>Loading animation...</span> : children}
  </button>
);

export default Button;
