import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button' }) => (
    <button type={type} onClick={onClick} className="btn">
        {label}
    </button>
);

export default Button;
