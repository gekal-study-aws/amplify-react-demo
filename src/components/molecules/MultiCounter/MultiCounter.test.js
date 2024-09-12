import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './MultiCounter'; // adjust the import path according to your project structure

test('renders Counter component', () => {
    act(() => {
        render(<Counter label="Click Me"/>);
    });
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick callback when clicked', () => {
    const handleClick = jest.fn();
    act(() => {
        render(<Counter onClick={handleClick} label="Click Me"/>);
    });

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
});