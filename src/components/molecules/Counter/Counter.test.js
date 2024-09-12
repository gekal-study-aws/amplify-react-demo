import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

test('renders Counter component', () => {
    act(() => {
        render(<Counter/>);
    });
    const counterElement = screen.getByText(/Clicked 0 times/i);

    expect(counterElement).toBeInTheDocument();
});

test('calls onClick callback when clicked', () => {
    act(() => {
        render(<Counter/>);
    });

    const counterElement = screen.getByText(/Clicked 0 times/i);

    fireEvent.click(counterElement);
    expect(counterElement).toHaveTextContent('Clicked 1 times');

    fireEvent.click(counterElement);
    expect(counterElement).toHaveTextContent('Clicked 2 times');
});