import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <button className="navigate-button" onClick={() => navigate(to)}>
      {text}
    </button>
  );
};

export default Button;
