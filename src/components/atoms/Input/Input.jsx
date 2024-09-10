import React, {useState} from 'react';

const Input = ({placeholder = "Enter text"}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="inputField">Enter Text: </label>
            <input
                type="text"
                id="inputField"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />
            <p>Current Value: {inputValue}</p>
        </div>
    );
};

export default Input;
