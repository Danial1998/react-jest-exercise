import React from "react";
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from "../components/Counter";

test('renders Counter component', () => { 
    render(<Counter/>);
    const counterElement = screen.getByTestId('counter');
    const buttonElement = screen.getByTestId('increment-button');

    expect(counterElement).toHaveTextContent('0');
    expect(buttonElement).toBeInTheDocument();
 });

test('increments counter on button click', () => { 
    render(<Counter/>);
    const counterElement = screen.getByTestId('counter');
    const buttonElement = screen.getByTestId('increment-button');

    fireEvent.click(buttonElement);

    expect(counterElement).toHaveTextContent('1');
 });

 