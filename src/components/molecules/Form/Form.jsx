import React from 'react';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import './Form.css';

const Form = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="form">
            <Input type="text" name="name" placeholder="Enter your name"/>
            <Button type="submit" label="Submit"/>
        </form>
    );
}

export default Form;
