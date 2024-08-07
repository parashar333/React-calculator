import React from 'react';

const Button = ({ value, onClick }) => {
    return (
        <button className={`button ${value === '⌫' ? 'backspace' : ''}`} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;