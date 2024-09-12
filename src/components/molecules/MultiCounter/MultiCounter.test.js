import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiCounter from "./MultiCounter";

test('renders MultiCounter component', () => {
    act(() => {
        render(<MultiCounter/>);
    });

    const buttonElements = screen.getAllByText(/Clicked 0 times/i);
    expect(buttonElements).toHaveLength(2);
});

test('calls onClick callback when clicked', () => {
    act(() => {
        render(<MultiCounter/>);
    });

    const buttonElements = screen.getAllByText(/Clicked 0 times/i);

    let count = 0;
    buttonElements.forEach((buttonElement) => {
        fireEvent.click(buttonElement);
        count++; // count up
        buttonElements.forEach((it) => expect(it).toHaveTextContent(`Clicked ${count} times`));
    });
});
