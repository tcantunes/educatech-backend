import React from 'react';

const Button = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={{ ...defaultStyles.button, ...style }}>
      {text}
    </button>
  );
};

const defaultStyles = {
  button: {
    backgroundColor: '#d7bf5e',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    margin: '10px',
    borderRadius: '10px',
    color: '#83555e',
    fontWeight: 'bold',
    height: '48px',
    width: '180px',
  },
};

export default Button;
