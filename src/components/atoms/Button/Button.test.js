import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button'; // adjust the import path according to your project structure

test('renders Button component', () => {
    act(() => {
        render(<Button label="Click Me"/>);
    });
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick callback when clicked', () => {
    const handleClick = jest.fn();
    act(() => {
        render(<Button onClick={handleClick} label="Click Me"/>);
    });

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
});