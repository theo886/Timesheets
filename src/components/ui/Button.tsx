import React from 'react';

const Button = ({ children, onClick, disabled, className, variant }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${className || ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;