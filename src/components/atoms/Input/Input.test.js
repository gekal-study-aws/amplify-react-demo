import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from "./Input";

test('renders input and checks if it works correctly', () => {
    render(<Input/>);

    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {target: {value: 'Hello World'}});
    expect(inputElement.value).toBe('Hello World');
});